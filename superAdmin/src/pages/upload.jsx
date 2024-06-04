import React, { useState } from 'react';
import toast from 'react-hot-toast';

function CSVUpload() {
    const [file, setFile] = useState(null);

    // Function to handle file input change
    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Set the file to state
    };

    // Function to handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            alert('Please select a file first!');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            toast.loading('Uploading file...')
            const response = await fetch('http://localhost:3000/api/uploadCSV', {
                method: 'POST',
                body: formData
                // fetch automatically sets the 'Content-Type' to 'multipart/form-data' when using FormData
            });
            if (response.ok) {
                const result = await response.json();
                toast.dismiss();
                toast.success('File uploaded successfully');
                console.log(result);
            } else {
                toast.dismiss();
                toast.error(response);
                throw new Error('Failed to upload file');
             
            }
        
        } catch (error) {
            toast.dismiss();
            toast.success('File uploaded successfully');
        }
    };

    return (
        <div>
            <h1>Upload CSV File</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} accept=".csv" />
                <button className='bg-black text-white  p-4 rounded-xl' type="submit">Upload CSV</button>
            </form>
        </div>
    );
}

export default CSVUpload;
