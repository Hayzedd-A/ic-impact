import React, { useState } from 'react';
import { Input } from '../ui/input';
// import { Button } from '../ui/button';
import ButtonItem from '../button/Button';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Textarea } from '../ui/textarea';
import Texts from '../Texts';
// import { FormValues } from '@/types/FormType';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required').nullable(),
      lastName: Yup.string().required('Last Name is required').nullable(),
      email: Yup.string().required('Email is required').nullable(),
      telephone: Yup.string().required('Telephone is required').nullable(),
      message: Yup.string().required('Message is required').nullable(),
    }),
    onSubmit: async (values, { setFieldTouched }) => {
      setIsSubmitting(true);
      for (const key in values) {
       setFieldTouched(key, true);
      };
      try {
        const response = await axios({
          method: 'POST',
          url: 'https://hook.eu2.make.com/z6o7i2pb0v4qbe8lek8sxoyzmjgsr4v2',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify(values),
        });

        if (!response.data) {
          toast.error('Sorry!, Failed to submit your response');
          return;
        }

        toast.success('Your message has been sent, we will get back to you soon');
        
        // Set a 3-second delay before refreshing
        setTimeout(() => {
          location.reload(); // Refresh the page
        }, 1000);
        setIsSubmitting(false);
      } catch (error) {
        toast.error('Sorry!, An error occurred while sending your response');
        console.error('Error:', error);
      }
      
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
      className="min-w-[300px] max-[900px]:mx-auto max-[900px]:my-[50px] w-[500px] max-[500px]:w-full rounded-[30px] border border-black/50 px-[20px] py-[30px]"
    >
      <div>
        <h2 className="scroll-m-20 text-[35px] font-semibold tracking-tight py-3 text-center mb-3">
          Contact Us
        </h2>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <div className="flex flex-col mx-auto gap-2 w-[90%] max-[500px]:w-full">
          <label htmlFor="firstName" className="text-[16px] font-sourceSansBold">
            First name{' '}
          </label>
          <Input
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
            className="w-full"
            id="firstName"
            placeholder="Enter first name here"
          />
          {formik.errors.firstName && (
            <Texts className="text-red-500 text-[12px]">{formik.errors.firstName}</Texts>
          )}
        </div>
        <div className="flex flex-col mx-auto gap-2 w-[90%] max-[500px]:w-full">
          <label htmlFor="lastName" className="text-[16px] font-sourceSansBold">
            Last name{' '}
          </label>
          <Input
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
            id="lastName"
            placeholder="Enter last name here"
          />
          {formik.errors.lastName && (
            <Texts className="text-red-500 text-[12px]">{formik.errors.lastName}</Texts>
          )}
        </div>
        <div className="flex flex-col mx-auto gap-2 w-[90%] max-[500px]:w-full">
          <label htmlFor="email" className="text-[16px] font-sourceSansBold">
            Email Address
          </label>
          <Input
            name="email"
            type="text"
            onChange={formik.handleChange}
            id="email"
            onBlur={formik.handleChange}
            placeholder="Enter email address here"
          />
          {formik.errors.email && (
            <Texts className="text-red-500 text-[12px]">{formik.errors.email}</Texts>
          )}
        </div>
        <div className="flex flex-col mx-auto gap-2 w-[90%] max-[500px]:w-full">
          <label htmlFor="telephone" className="text-[16px] font-sourceSansBold">
            Phone No
          </label>
          <Input
            name="telephone"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleChange}
            id="telephone"
            placeholder="Enter phone no here"
          />
          {formik.errors.telephone && (
            <Texts className="text-red-500 text-[12px]">{formik.errors.telephone}</Texts>
          )}
        </div>
        <div className="flex flex-col mx-auto gap-2 w-[90%] max-[500px]:w-full">
          <label htmlFor="message" className="text-[16px] font-sourceSansBold">
            Message
          </label>
          <Textarea
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="message"
            placeholder="Enter your message here"
          />
          {formik.errors.message && (
            <Texts className="text-red-500 text-[12px]">{formik.errors.message}</Texts>
          )}
        </div>
        <ButtonItem className="!bg-orangish mx-auto text-white mt-3">
          {' '}
          {isSubmitting ? <span>Sent</span> : 'Submit'}{' '}
        </ButtonItem>
      </div>
    </form>
  );
};

export default ContactForm;
