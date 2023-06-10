import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import api from "../services/api";
import { saveToken } from "../services/auth";

const SignIn = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is invalid";
      }

      if (!values.password) {
        errors.password = "Password is required";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        const response = await api.post("/api/auth/login", values);
        saveToken(response.data.token);
        navigate("/profile");
      } catch (error) {
        console.error(error);
        alert("Error signing in");
      }
    },
  });

  return (
    <Container>
      <h1>Sign In</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            isInvalid={formik.errors.email && formik.touched.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            isInvalid={formik.errors.password && formik.touched.password}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.password}
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Sign In</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
