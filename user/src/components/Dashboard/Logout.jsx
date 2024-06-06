import React from 'react';
import axios from 'axios';

const LogoutComponent = () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const handleGoogleLogout = async () => {
        const tokenId = localStorage.getItem('token');

        if (tokenId) {
            try {
                await axios.post(`${apiUrl}/google-logout`, { tokenId });
                localStorage.clear();

                // Clear cookies
                document.cookie.split(';').forEach(cookie => {
                    const eqPos = cookie.indexOf('=');
                    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
                });

                window.location.href = '/login';
                console.log('Logout successful');
            } catch (error) {
              localStorage.clear();
              window.location.href = '/login';

                // console.error('Logout failed', error);
            }
        } else {
            console.error('Logout failed: No tokenId found in local storage');
        }
    };

    const handleLogoutLocally = () => {
        localStorage.clear();
        window.location.href = '/login';
    };

    return (
        <div className='flex flex-col w-[100%] h-[200px] gap-[50px] items-center justify-center'>
            <h3>Are You Sure You want to Logout</h3>
              <button onClick={handleGoogleLogout} className="hover:text-yellow-400 bg-red-500 p-4 rounded-lg">Logout</button>
        </div>
    );
};

export default LogoutComponent;
