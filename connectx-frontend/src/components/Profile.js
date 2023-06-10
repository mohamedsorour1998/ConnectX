import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { isAuthenticated } from "../services/auth";
import api from "../services/api";
import { Container, Card, Image, Row, Col } from "react-bootstrap";

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
    <Container>
      {user && (
        <>
          <h1 className="mb-4">Profile</h1>
          <strong>Image: </strong>
          <Row>
            <Col xs={12} md={4}>
              <Image
                src={user.profileImage}
                roundedCircle
                fluid
                className="mb-3"
              />
            </Col>
            <Col xs={12} md={8}>
              <Card>
                <Card.Body>
                  <Card.Title>
                    <strong>Username: </strong>
                    {user.username}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    <strong>Full Name: </strong>
                    {user.firstName} {user.lastName}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Bio: </strong>
                    {user.bio}
                  </Card.Text>
                  <Card.Text>
                    <strong>Email: </strong>
                    {user.email}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Profile;
