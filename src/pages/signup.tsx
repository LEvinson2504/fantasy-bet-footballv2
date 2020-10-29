import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/core";
import { Field, FieldProps, Formik } from "formik";
import React from "react";
import Layout from "../components/Layout";
import axios from "axios";
import Cookies from "js-cookie";

export default function Signup() {
  return (
    <Layout>
      <Flex h="80vh" align="center" justify="center">
        <Flex direction="column">
          <Text fontSize={30}>Signup Form</Text>
          <Formik
            initialValues={{ email: "", name: "", password: "" }}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
              axios
                .post("http://localhost:1337/auth/local/register", {
                  username: values.name,
                  email: values.email,
                  password: values.password,
                })
                .then((response) => {
                  // Handle success.
                  console.log("Well done!");
                  console.log("User profile", response.data.user);
                  console.log("User token", response.data.jwt);
                  Cookies.set("jwt", response.data.jwt);
                })
                .catch((error) => {
                  // Handle error.
                  console.log("An error occurred:", error.response);
                });
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <Field name="email">
                  {({ field, form }: { field: FieldProps; form: FormData }) => (
                    <FormControl>
                      <FormLabel htmlFor="email">email address</FormLabel>
                      <Input {...field} id="email" placeholder="email id" />
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>

                <Field name="name">
                  {({ field, form }: { field: FieldProps }) => (
                    <FormControl>
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <Input {...field} id="name" placeholder="your name" />
                    </FormControl>
                  )}
                </Field>

                <Field name="password">
                  {({ field, form }: { field: FieldProps }) => (
                    <FormControl>
                      <FormLabel htmlFor="password">password</FormLabel>
                      <Input
                        {...field}
                        type="password"
                        id="password"
                        placeholder="password"
                      />
                    </FormControl>
                  )}
                </Field>

                <Button mt={4} isLoading={props.isSubmitting} type="submit">
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </Flex>
      </Flex>
    </Layout>
  );
}
