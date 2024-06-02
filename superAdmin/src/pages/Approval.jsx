import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

function SuperAdminApproval() {
  const [files, setFiles] = useState([]);
  const [adminDetails, setAdminDetails] = useState({});
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/files');
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      alert('Error fetching files');
    }
  };

  const getAdminDetails = async (adminId, fileId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/${adminId}`);
      const data = await response.json();
      setAdminDetails((prevDetails) => ({
        ...prevDetails,
        [fileId]: data,
      }));
      setOpenDropdown(fileId);
    } catch (error) {
      alert('Error fetching admin details');
    }
  };

  const handleReject = async (fileId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/reject/${fileId}`, {
        method: 'POST',
      });

      if (response.ok) {
        alert('File rejected successfully');
        fetchFiles(); // Refresh the list of files after rejection
      } else {
        alert('Error rejecting file');
      }
    } catch (error) {
      alert('Error rejecting file');
    }
  };

  const handleApprove = async (fileId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/approve/${fileId}`, {
        method: 'POST',
      });

      if (response.ok) {
        alert('File approved successfully');
        fetchFiles(); // Refresh the list of files after approval
      } else {
        alert('Error approving file');
      }
    } catch (error) {
      alert('Error approving file');
    }
  };
  
  const handleDelete = async (fileId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/delete/${fileId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('File deleted successfully');
        fetchFiles(); // Refresh the list of files after deletion
        window.location.reload();
      } else {
        alert('Error deleting file');
      }
    } catch (error) {
      alert('Error deleting file');
    }
  }


  return (
    <div className="bg-purple-800 min-h-screen flex">
      <div className=" p-4 rounded-lg shadow-lg w-1/4 overflow-y-auto">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Files From Admins</h2>
        <ul className=" space-y-5">
          {files.map((file) => (
            <li
              key={file._id}
              className={`p-2 rounded-lg shadow-md cursor-pointer ${
                openDropdown === file._id ? 'bg-purple-900' : ''
              }`}
              onClick={() => getAdminDetails(file.uploadedBy, file._id)}
            >
              <div className="text-white font-medium truncate">
                {file.name.length > 15 ? file.name.slice(0, 15) + '...' : file.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-3/4">
        {openDropdown && adminDetails[openDropdown] ? (
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Admin Details:</h3>
            <p><strong>Name:</strong> {adminDetails[openDropdown].admin.name}</p>
            <p><strong>Email:</strong> {adminDetails[openDropdown].admin.email}</p>
            <p><strong>Time:</strong> {new Date(files.find(file => file._id === openDropdown).uploadedAt).toLocaleString()}</p>
           <div className="flex items-center space-x-4 mt-4">
              <a
                href={`http://localhost:3000/api/download/${files.find(file => file._id === openDropdown).name}`}
                download
                className="bg-gray-800 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                Download
              </a>
              
              {files.find(file => file._id === openDropdown).approved === "approved" ? (
                <h1 className="text-green-500">Approved</h1>
              ) : files.find(file => file._id === openDropdown).approved === "pending" ? (
                <>
                  <button
                    onClick={() => handleApprove(openDropdown)}
                    className="bg-yellow-300 text-black py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(openDropdown)}
                    className="bg-red-500 text-black py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    Reject
                  </button>
                
                </>
              ) : (
               <div>
                 <h1 className="text-red-500">Rejected</h1>
                </div>
                
              )}
               <button
                    onClick={() => handleDelete(openDropdown)}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    Delete
                  </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-700">Click on a file to view details</p>
        )}
      </div>
    </div>
  );
}

export default SuperAdminApproval;
