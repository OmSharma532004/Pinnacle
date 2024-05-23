import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

function SuperAdminApproval() {
  const [files, setFiles] = useState([]);

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
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">Files From Admins</h2>
        <ul className="space-y-4">
          {files.map((file) => (
            <li key={file._id} className="flex items-center justify-between p-4 bg-purple-100 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <a
                  href={`http://localhost:3000/api/download/${file.name}`}
                  download={file.name}
                  className="text-purple-700 font-medium hover:underline"
                >
                  {file.name}
                </a>
                <a
                  href={`http://localhost:3000/api/download/${file.name}`}
                  download
                  className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                  Download
                </a>
              </div>
             {
               file.approved==true?(<>
               
               <h1 className="text-green-500">Approved</h1>
               </>):(<>
               <button
                onClick={() => handleApprove(file._id)}
                className="bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 rounded-lg shadow-md transition duration-300 ease-in-out"
                >
                Approve
                </button>
               </>)
             }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SuperAdminApproval;
