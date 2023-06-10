import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { isAuthenticated } from "../services/auth";
import api from "../services/api";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      alert("You must be logged in to view your profile.");
      navigate("/sign-in");
    } else {
      const fetchUserProfile = async () => {
        try {
          const response = await api.get("/api/users/profile");
          setUser(response.data);
        } catch (error) {
          console.error(error);
          alert("Error fetching user profile");
        }
      };

      fetchUserProfile();
    }
  }, [navigate]);

  return (
    <div>
      {user && (
        <>
          <h1 className="mb-4">Profile</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add any other user information here */}
        </>
      )}
    </div>
  );
};

export default Profile;
