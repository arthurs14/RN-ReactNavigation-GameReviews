import React from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormButton from '../shared/FormButton';

const ReviewSchema = yup.object({
  title: yup
    .string()
    .required()
    .min(4),
  body: yup
    .string()
    .required()
    .min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', val => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={handleChange('title')} // update value
              value={values.title} // saves new value
              onBlur={handleBlur('title')}
            />

            <Text style={globalStyles.errorText}>
              {touched.title && errors.title}
            </Text>

            <TextInput
              multiline
              minHeight={60}
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={handleChange('body')}
              value={values.body}
              onBlur={handleBlur('body')}
            />

            <Text style={globalStyles.errorText}>
              {touched.body && errors.body}
            </Text>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1 - 5)"
              onChangeText={handleChange('rating')}
              value={values.rating}
              keyboardType="numeric"
              onBlur={handleBlur('rating')}
            />

            <Text style={globalStyles.errorText}>
              {touched.rating && errors.rating}
            </Text>

            <FormButton text="submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ReviewForm;
