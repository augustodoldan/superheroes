import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import Navbar from "../../components/Navbar";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [error, setError] = useState(null);
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
    onSubmit: async (dataFormulario) => {
      try {
        const response = await axios.post(
          "http://challenge-react.alkemy.org/",
          {
            email: dataFormulario.email,
            password: dataFormulario.password,
          }
        );
        localStorage.setItem("token", response.data.token);
        history.push("/");
      } catch (error) {
        setError(error.response.data.error);
      }
    },
  });

  return (
    <div className="container">
      <Navbar />
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            type="email"
            placeholder="Enter email"
            name="email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={formik.handleChange}
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        {error && <p>{error}</p>}
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
