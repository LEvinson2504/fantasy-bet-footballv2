import { Button, FormControl, FormLabel, Select } from "@chakra-ui/core";
import { Field, FieldProps, Formik } from "formik";
import React from "react";

export const Match = ({
  awayTeam,
  homeTeam,
}: {
  awayTeam: string;
  homeTeam: string;
}) => {
  return (
    <Formik
      initialValues={{ homePoints: 0, awayPoints: 0 }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field name="homePoints">
            {({ field, form }: { field: FieldProps }) => (
              <FormControl>
                <FormLabel htmlFor="homePoints">{homeTeam}</FormLabel>
                <Select {...field} id="homePoints">
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Select>
              </FormControl>
            )}
          </Field>

          <Field name="awayPoints">
            {({ field, form }) => (
              <FormControl>
                <FormLabel htmlFor="awayPoints">{awayTeam}</FormLabel>
                <Select {...field} id="awayPoints">
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </Select>
              </FormControl>
            )}
          </Field>
          <Button mt={4} isLoading={props.isSubmitting} type="submit">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

Match.defaultProps = {
  homeTeam: "PSG",
  awayTeam: "Manchester united",
};
