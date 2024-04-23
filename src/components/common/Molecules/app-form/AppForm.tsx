'use client';

import React from 'react';
import { Form, Formik } from 'formik';
import { Col, Row } from 'reactstrap';

import { SubmitButton, IFormControl } from '@components';
import FormMaker from './FormMaker';

interface IFormProps extends IFormControl {
  children?: React.ReactNode;
  ActionComponent?: React.ComponentType<any>;
  FieldComponent?: React.ComponentType<any>;
  submitBlock?: boolean;
}
const AppForm = (props: IFormProps) => {
  const {
    title,
    subtitle,
    initialValues,
    fields,
    validationSchema,
    children,
    buttonText = 'OK',
    ActionComponent,
    FieldComponent,
    onSubmit,
    submitBlock = true,
  } = props;

  return (
    <React.Fragment>
      {title && <h3 className="form-title text-center">{title}</h3>}
      {subtitle && <h6>{subtitle}</h6>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={formAction}
        onSubmit={onSubmit}
        validateOnBlur
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          submitCount,
          isValid,
          dirty,
          setSubmitting,
          status,
          getFieldProps,
          /* and other goodies */
        }) => (
          <Form className="formMaker">
            {'errorSummary' in errors && (
              <Row>
                <Col className="p-0 mb-2">
                  <small className="text-danger">{errors.errorSummary?.toString()}</small>
                </Col>
              </Row>
            )}
            {FieldComponent ? (
              <FieldComponent
                {...{
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  submitCount,
                  isValid,
                  dirty,
                  setSubmitting,
                  status,
                  getFieldProps,
                }}
              >
                <FormMaker fields={fields} handling={{ getFieldProps, values, errors }} />
              </FieldComponent>
            ) : (
              <FormMaker fields={fields} handling={{ getFieldProps, values, errors }} />
            )}
            {children}

            {ActionComponent ? (
              <ActionComponent>
                <SubmitButton
                  block={submitBlock}
                  text={buttonText}
                  design="text-white border-0"
                  disabled={!isValid || !dirty || isSubmitting}
                  isLoading={isSubmitting}
                />
              </ActionComponent>
            ) : (
              <SubmitButton
                block={submitBlock}
                text={buttonText}
                design="text-white border-0"
                disabled={!isValid || !dirty || isSubmitting}
                isLoading={isSubmitting}
              />
            )}
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
};

export default AppForm;
