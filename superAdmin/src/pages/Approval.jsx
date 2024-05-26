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
      setOpenDropdown((prevDropdown) => (prevDropdown === fileId ? null : fileId));
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

  return (
    <div className="bg-purple-800 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Files From Admins</h2>
        <ul className="space-y-4">
          {files.map((file) => (
            <li
              key={file._id}
              className="flex flex-col p-4 bg-purple-100 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <a
                    href={`http://localhost:3000/api/download/${file.name}`}
                    download={file.name}
                    className="text-gray-800 font-medium hover:underline"
                  >
                    {file.name}
                  </a>
                </div>
             {
              file.approved=="pending"?(<>
                 <div className="flex items-center space-x-4">
                  <a
                    href={`http://localhost:3000/api/download/${file.name}`}
                    download
                    className="bg-gray-800 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    Download
                  </a>
                  {file.approved === "Approved" ? (
                    <h1 className="text-yellow-500">Approved</h1>
                  ) : (
                    <>
                      <button
                        onClick={() => handleApprove(file._id)}
                        className="bg-yellow-300 text-black py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(file._id)}
                        className="bg-red-500 text-black py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                      >
                        Reject
                      </button>
                    </>
                  )}
                  <button
                    onClick={() => getAdminDetails(file.uploadedBy, file._id)}
                    className="bg-blue-300 text-black py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                    {openDropdown === file._id ? 'Hide Details' : 'Show Details'}
                  </button>
                </div></>):(<  >
                
                <div className=' bg-white p-4 rounded-xl'>
                {
                  file.approved=="approved"?(<>
                  <h1 className="text-green-500">Approved</h1>
                  </>):(<>
                  <h1 className="text-red-500">Rejected</h1>
                  </>)

                }
                </div>
                </>)
             }
              </div>
              {openDropdown === file._id && adminDetails[file._id] && (
                <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Admin Details:</h3>
                  <p><strong>Name:</strong> {adminDetails[file._id].admin.name}</p>
                  <p><strong>Email:</strong> {adminDetails[file._id].admin.email}</p>
                  <p><strong>Time:</strong> {new Date(file.uploadedAt).toLocaleString()}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SuperAdminApproval;
