import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
import * as Yup from "yup";
import { withStyles, Container, Grid } from "@material-ui/core";
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
        alignItems: "center",
        justify: "center"
        // padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit *
        //   5}px ${theme.spacing.unit * 5}px`
      }}
    >
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(10, "Password must be at least 10 characters")
            .required("Password is required")
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
              type="password"
              name="password"
              placeholder="Password"
              component={TextField}
              style={{ margin: 10 }}
              fullWidth
            />
            <Link href="/mainpage">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: 10 }}
              >
                Submit
              </Button>
            </Link>
            <Link href="/signup">
              <Button
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: 10 }}
                onClick={() => {}}
              >
                Sign Up
              </Button>
            </Link>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
