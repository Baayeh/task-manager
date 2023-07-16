'use client';

import Button from '@components/Button';
import axios from 'axios';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

interface RegisterFormProps {
  name: string;
  email: string;
  password: string;
}

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const _onSubmit = async (values: RegisterFormProps) => {
    setIsLoading(true);

    try {
      const res = await axios.post('/api/register', values);

      if (res.status === 200) {
        toast.success('Account created');
        router.push('/overview');
      } else {
        const errorData = await res.data;
        toast.error(errorData.error);
      }
    } catch (error: any) {
      toast.error(error.response.data.error);
    }
    setIsLoading(false);
  };

  return (
    <div className="w-[30rem]">
      <div className="text-center">
        <h1 className="font-bold">Welcome to TaskBuddy</h1>
        <p>Create an account</p>
      </div>
      <div className="p-4">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={_onSubmit}
        >
          {() => {
            return (
              <Form>
                <div className="mb-6">
                  <Field name="name">
                    {({ field, meta }: FieldProps) => {
                      return (
                        <div>
                          <input
                            type="text"
                            {...field}
                            placeholder="Enter your name"
                            className={`w-full border border-gray-300 px-4 py-2 rounded-lg ${
                              meta.touched && meta.error
                                ? 'border-2 border-red-500 outline-red-500 placeholder:text-red-500'
                                : ''
                            }`}
                          />
                          <ErrorMessage
                            name="name"
                            component="p"
                            className="text-red-500 text-xs ml-3 my-1"
                          />
                        </div>
                      );
                    }}
                  </Field>
                </div>
                <div className="mb-6">
                  <Field name="email">
                    {({ field, meta }: FieldProps) => {
                      return (
                        <div>
                          <input
                            type="email"
                            {...field}
                            placeholder="Enter your email"
                            className={`w-full border border-gray-300 px-4 py-2 rounded-lg ${
                              meta.touched && meta.error
                                ? 'border-2 border-red-500 outline-red-500 placeholder:text-red-500'
                                : ''
                            }`}
                          />
                          <ErrorMessage
                            name="email"
                            component="p"
                            className="text-red-500 text-xs ml-3 my-1"
                          />
                        </div>
                      );
                    }}
                  </Field>
                </div>
                <div className="mb-6">
                  <Field name="password">
                    {({ field, meta }: FieldProps) => {
                      return (
                        <div>
                          <input
                            type="password"
                            {...field}
                            placeholder="Enter your password"
                            className={`w-full border border-gray-300 px-4 py-2 rounded-lg ${
                              meta.touched && meta.error
                                ? 'border-2 border-red-500 outline-red-500 placeholder:text-red-500'
                                : ''
                            }`}
                          />
                          <ErrorMessage
                            name="password"
                            component="p"
                            className="text-red-500 text-xs ml-3 my-1"
                          />
                        </div>
                      );
                    }}
                  </Field>
                </div>
                <div>
                  <Button
                    label={isLoading ? 'Creating Account...' : 'Create Account'}
                    type="submit"
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
