'use client';

import Button from '@components/Button';
import { ErrorMessage, Field, FieldProps, Form, Formik } from 'formik';
// import { signIn } from 'next-auth/react';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';

interface LoginFormProps {
  email: string;
  password: string;
}

const initialValues: LoginFormProps = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const _onSubmit = async (values: LoginFormProps) => {
    setIsLoading(true);

    await wait(3000);
    console.log(values);
    toast.success('Logged in successfully');

    setIsLoading(false);
    router.push('/overview');

    // signIn('credentials', {
    //   ...values,
    //   redirect: false,
    //   callbackUrl: '/overview',
    // }).then((res) => {
    //   if (res?.ok && !res?.error) {
    //     toast.success('Logged in successfully');
    //     router.push('/overview');
    //     setIsLoading(false);
    //   }

    //   if (res?.error && !res?.url) {
    //     setIsLoading(false);
    //     toast.error(res.error);
    //   }
    // });

    // if (response?.ok && response?.url) {
    //   setIsLoading(false);
    //   toast.success('Logged in successfully');
    //   router.push(response.url);
    // }

    // if (response?.error) {
    //   setIsLoading(false);
    //   toast.error(response.error);
    // }
  };

  return (
    <div className="w-[30rem]">
      <div className="text-center">
        <h1 className="font-bold">Welcome back</h1>
        <p>Login to your account</p>
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
                    label={isLoading ? 'logging In...' : 'Login'}
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

export default Login;
