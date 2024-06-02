import React from 'react';

const EditProfileComponent = ({ formData, handleChange, handleSubmit }) => (
    <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNo">Phone Number</label>
            <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <button type="submit" onClick={(e)=>{
            handleSubmit()
        }} className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Save</button>
    </form>
);

export default EditProfileComponent;
