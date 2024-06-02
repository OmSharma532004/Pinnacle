import React from 'react';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';

const ProfileComponent = ({ user }) => (
    <div className="p-6 bg-gray-100 w-[100%] rounded-lg shadow-lg">
        {user && (
            <div className="text-black">
                <div className="flex items-center mb-4">
                    <FaUser className="text-gray-600 mr-2" />
                    <p className="text-lg"><strong>Name:</strong> {user.Name||user.name}</p>
                </div>
                <div className="flex items-center mb-4">
                    <FaEnvelope className="text-gray-600 mr-2" />
                    <p className="text-lg"><strong>Email:</strong> {user.email}</p>
                </div>
                <div className="flex items-center mb-4">
                    <FaPhone className="text-gray-600 mr-2" />
                    <p className="text-lg"><strong>Phone Number:</strong> {user.phoneNo}</p>
                </div>
            </div>
        )}
    </div>
);

export default ProfileComponent;
