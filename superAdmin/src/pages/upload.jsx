import React, { useState } from 'react';

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
            const response = await fetch('http://localhost:3000/api/uploadCSV', {
                method: 'POST',
                body: formData
                // fetch automatically sets the 'Content-Type' to 'multipart/form-data' when using FormData
            });
            if (response.ok) {
                const result = await response.json();
                alert('File uploaded successfully');
                console.log(result);
            } else {
                throw new Error('Failed to upload file');
            }
            alert('File uploaded successfully');
        } catch (error) {
            alert(error.message);
            console.error('Error:', error);
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
