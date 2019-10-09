import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { withStyles, Container, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Head from 'next/head';
import Nav from '../components/nav';
export default function index() {
  const [buttonText, setButtonText] = useState('Click me, please');
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        // Your client-side validation logic
      }}
      onSubmit={(values, { setSubmitting }) => {
        // Call your API
      }}
    >
      {({ isSubmitting }) => (
        <Container>
          <Form>
            <Field type="email" name="email" component="TextField">
              <TextField
                required
                id="standard-required"
                label="Required"
                margin="normal"
              />
            </Field>
            <Field type="password" name="password" component="TextField" />
            <Button
              type="submit"
              //fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
}
