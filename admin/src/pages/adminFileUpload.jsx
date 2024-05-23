import React, { useState } from 'react';

function AdminUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:3000/api/uploadFile', {
        method: 'POST',
        body: formData,
        headers: {
          // 'Content-Type' is not needed here because fetch will automatically set the correct content type for FormData
        },
      });

      if (response.ok) {
        alert('File uploaded successfully');
      } else {
        alert('Error uploading file');
      }
    } catch (error) {
      alert('Error uploading file');
    }
  };

  return (
    <div>
      <h2>Admin Portal</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload CSV</button>
    </div>
  );
}

export default AdminUpload;
