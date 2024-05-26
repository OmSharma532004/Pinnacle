import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const userId = useSelector(state => state.auth.user);
  const [files, setFiles] = useState([]);

  

  useEffect(() => {
    getFiles();
  }, []);

  const getFiles = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/files/${userId}`);
      if (response.ok) {
        const result = await response.json();
        setFiles(result);
      } else {
        throw new Error('Failed to fetch files');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white w-screen h-screen text-black p-4">
      <h1 className="text-4xl font-bold mb-6">Dashboard</h1>
      <div className="w-full max-w-4xl">
        {files.length > 0 ? (
          <ul className="space-y-4">
            {files.map((file, index) => (
              <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div className="flex-1">
             
                    <a
                    href={`http://localhost:3000/api/download/${file.name}`}
                    download
                    className=" p-4 text-gray-900 font-bold m-4 rounded-lg shadow-md transition duration-300 ease-in-out"
                  >
                  {file.name}
                  </a>
                    <p className="text-gray-700 mt-4">
                      <strong>Uploaded At:</strong> {new Date(file.uploadedAt).toLocaleString()}
                    </p>
                   
                  </div>
                  <div className="flex-none mt-4 md:mt-0 md:ml-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        file.approved ? ' text-white' : 'bg-red-500 text-white'
                      }`}
                    >
                      {file.approved == "approved"?(<>
                      <h1 className=' bg-green-400 p-4 rounded-xl'>Approved</h1>
                      </>):(<>
                      {
                        file.approved == "rejected"?(<>
                        <h1 className='bg-red-500  p-4 rounded-xl '>Rejected</h1>
                        </>):(<>
                        <h1 className='bg-blue-500  p-4 rounded-xl '>Pending</h1>
                        </>)
                      }
                      </>)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No files found</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
