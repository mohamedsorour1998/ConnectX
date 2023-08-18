import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const RegisterSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters")
    .required("Username is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  firstName: Yup.string()
    .min(2, "First Name must be at least 2 characters")
    .max(40, "First Name must be at most 40 characters"),
  lastName: Yup.string()
    .min(2, "Last Name must be at least 2 characters")
    .max(40, "Last Name must be at most 40 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  profileImage: Yup.string()
    .url("Invalid URL format")
    .required("Profile Image URL is required"),
  bio: Yup.string()
    .min(10, "Bio must be at least 10 characters")
    .max(300, "Bio must be at most 300 characters")
    .required("Bio is required"),
});

const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      email: "",
      profileImage: "",
      bio: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      const { confirmPassword, ...dataToSubmit } = values;

      try {
        await api.post("/api/auth/register/", dataToSubmit);
        navigate("/sign-in");
      } catch (error) {
        console.error(error);
        console.log(dataToSubmit);
        alert("Error registering user");
      }
    },
  });

  return (
    <Container>
      <h1 className="my-4">Register</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Form.Group as={Col} controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              isInvalid={formik.errors.username && formik.touched.username}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.username}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              isInvalid={formik.errors.firstName && formik.touched.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              isInvalid={formik.errors.lastName && formik.touched.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              isInvalid={formik.errors.email && formik.touched.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="profileImage">
            <Form.Label>Profile Image URL</Form.Label>
            <Form.Control
              type="text"
              name="profileImage"
              value={formik.values.profileImage}
              onChange={formik.handleChange}
              isInvalid={
                formik.errors.profileImage && formik.touched.profileImage
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.profileImage}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="bio"
              value={formik.values.bio}
              onChange={formik.handleChange}
              isInvalid={formik.errors.bio && formik.touched.bio}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.bio}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              isInvalid={formik.errors.password && formik.touched.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              isInvalid={
                formik.errors.confirmPassword && formik.touched.confirmPassword
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.confirmPassword}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
