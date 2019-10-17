import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { withStyles, Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Head from "next/head";
import Nav from "../components/nav";
import Link from "next/link";

export default function index() {
  const [buttonText, setButtonText] = useState("Click me, please");

  return (
    <Container
      style={{
        //marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
        // padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit *
        //   5}px ${theme.spacing.unit * 5}px`
      }}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          confirmPassword: ""
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(10, "Password must be at least 10 characters")
            .required("Password is required"),
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required"),
          confirmPassword: Yup.string().required(
            "reconfirm password is required"
          )
        })}
        onSubmit={() => {
          console.log("asd");
        }}
      >
        {() => (
          <Form>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              component={TextField}
              style={{ margin: 10 }}
              fullWidth
            />
            <Field
              name="firstName"
              type="text"
              placeholder="First Name"
              component={TextField}
              style={{ margin: 10 }}
              fullWidth
            />
            <Field
              name="lastName"
              placeholder="Last Name"
              component={TextField}
              style={{ margin: 10 }}
              fullWidth
            />
            <Field
              type="password"
              name="password"
              placeholder="Password"
              component={TextField}
              style={{ margin: 10 }}
              fullWidth
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              component={TextField}
              style={{ margin: 10 }}
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ margin: 10 }}
            >
              Sign Up
            </Button>
            <Link href="/index">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: 10 }}
                onClick={() => {
                  console.log("test");
                }}
              >
                Sign In
              </Button>
            </Link>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
