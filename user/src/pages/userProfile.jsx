import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProfileComponent from '../components/Dashboard/ProfileComponent';
import EditProfileComponent from '../components/Dashboard/EditProfileComponent';
import toast from 'react-hot-toast';
import LogoutComponent from '../components/Dashboard/Logout';

const UserProfile = () => {
    const userId = useSelector(state => state.auth.user);
    const [user, setUser] = useState(userId);
    const [activeTab, setActiveTab] = useState('profile');
    const [formData, setFormData] = useState({
        name: user.Name,
        email: user.email,
        phoneNo: user.phoneNo,
    });
    const apiUrl = import.meta.env.VITE_API_URL;
    const fetchUser = async () => {
        try {
          toast.loading("Fetching user data...");
            const response = await fetch(`${apiUrl}/getUser/${userId._id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            toast.dismiss();
            setUser(data);
            setFormData({
                name: data.Name,
                email: data.email,
                phoneNo: data.phoneNo,
            });
        } catch (error) {
            toast.dismiss();
            toast.error('Error fetching user data');
            console.error('Error fetching user data:', error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async () => {
        console.log('Form Data:', formData);
        try {
            toast.loading('Updating user data...');
            const response = await fetch(`${apiUrl}/editUser/${userId._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
            toast.dismiss();
            toast.success('User data updated successfully');
            setUser(data);
        } catch (error) {
            toast.dismiss();
            toast.error('Error updating user data');
            console.error('Error updating user data:', error);
        }
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex flex-col md:flex-row w-screen min-h-screen bg-gray-100">
        <aside className="w-full md:w-64 bg-purple-600 text-white p-8 md:min-h-screen">
          <nav>
            <ul className="flex md:block">
              <li className={`mb-4 ${activeTab === 'profile' ? 'bg-purple-800 rounded-xl' : ''}`}>
                <a href="#" onClick={() => handleTabClick('profile')} className="block py-2 px-4 rounded hover:text-gray-300">Profile</a>
              </li>
              <li className={`mb-4 ${activeTab === 'editProfile' ? 'bg-purple-800 rounded-xl' : ''}`}>
                <a href="#" onClick={() => handleTabClick('editProfile')} className="block py-2 px-4 rounded hover:text-gray-300">Edit Profile</a>
              </li>
              {/* <li className={`mb-4 ${activeTab === 'settings' ? 'bg-purple-800 rounded-xl' : ''}`}>
                <a href="#" onClick={() => handleTabClick('settings')} className="block py-2 px-4 rounded hover:text-gray-300">Settings</a>
              </li> */}
              <li className={`mb-4 ${activeTab === 'logout' ? 'bg-purple-800 rounded-xl' : ''}`}>
                <a href="#" onClick={() => handleTabClick('logout')} className="block py-2 px-4 rounded hover:text-gray-300">Logout</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-grow p-8">
          <div className="w-[80%] mx-auto bg-white p-8 rounded-lg shadow-lg">
            {activeTab === 'profile' && <ProfileComponent user={user} />}
            {activeTab === 'editProfile' && <EditProfileComponent formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />}
            {activeTab === 'settings' && <SettingsComponent />}
            {activeTab === 'logout' && <LogoutComponent />}
          </div>
        </main>
      </div>
      
    );
};

export default UserProfile;
