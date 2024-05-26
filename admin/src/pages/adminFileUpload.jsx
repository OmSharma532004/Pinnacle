import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function AdminUpload() {
  const [file, setFile] = useState(null);
  const user = useSelector(state => state.auth.user); // Ensure this is an ID
  console.log('User ID:', user); // Debugging

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!user) {
      alert('User ID is not valid');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('user', user); // Append the user ID directly
    formData.append('time', Date.now().toString()); // Convert time to string

    try {
      const response = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formData,
        headers: {
          // 'Content-Type' is not needed here because fetch will automatically set the correct content type for FormData
        },
      });

      if (response.ok) {
        alert('File uploaded successfully');
      } else {
        const errorData = await response.json();
        alert(`Error uploading file: ${errorData.message}`);
      }
    } catch (error) {
      alert('Error uploading file');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-purple-700 mb-6 text-center">Admin Portal</h2>
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100 mb-4"
        />
        <button
          onClick={handleUpload}
          className="w-full bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800"
        >
          Upload CSV
        </button>
      </div>
    </div>
  );
}

export default AdminUpload;
