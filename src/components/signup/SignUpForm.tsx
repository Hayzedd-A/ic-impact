import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Structure from './Structure';
import FormOne from './FormOne';
import FormTwo from './FormTwo';
import FormThree from './FormThree';
import FormStatus from './FormStatus';
import FormFour from './FormFour';
import { FormValues } from '@/types/FormType';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignUpForm: React.FC = () => {
  const [currentFormIndex, setCurrentFormIndex] = useState<number>(0);
  const [motionDirection, setMotionDirection] = useState<number>(300);

  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      whatsappNo: '',
      dob: '',
      city: '',
      gender: '',
      eduBackground: '',
      employmentStatus: '',
      rate: '',
      active: '',
      challenge: '',
      goals: '',
      relationship: '',
      motivation: '',
      purpose: '',
      improvements: '',
      talents: '',
      commitment: '',
      currFinance: '',
      financialIndependence: '',
      financialGrowth: '',
      learning: '',
      digitalSkill: '',
      opportunity: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Full name is required').nullable(),
      email: Yup.string()
        .email('Your Email')
        .required('Your email is required')
        .nullable(),
      whatsappNo: Yup.string()
        .matches(/^\d+$/, 'Phone number must be numeric')
        .required('Phone number is required')
        .nullable(),
      dob: Yup.string().required('Date of birth is required').nullable(),
      city: Yup.string().required('City is required').nullable(),
      gender: Yup.string().required('Gender is required').nullable(),
      eduBackground: Yup.string().required('Education background is required').nullable(),
      employmentStatus: Yup.string().required('Employment status is required').nullable(),
      relationship: Yup.string()
        .required('Describe your relationship with God')
        .nullable(),
      rate: Yup.string().required('Rate your relationship with God').nullable(),
      active: Yup.string().required('Answer yes or no').nullable(),
      challenge: Yup.string()
        .required('Tell us the challenge')
        .min(10, 'Value should be a minimum of 10 characters')
        .nullable(),
      goals: Yup.string()
        .required('Tell us your spiritual goals for this community')
        .min(10, 'Value should be a minimum of 10 characters')
        .nullable(),
      motivation: Yup.string()
        .required('Tell us your motivation to join for this community')
        .nullable(),
      purpose: Yup.string()
        .required('Share your with us purpose')
        .min(10, 'Value should be a minimum of 10 characters')
        .nullable(),
      improvements: Yup.string()
        .required('Tell us your areas of improvements')
        .nullable(),
      talents: Yup.string().required('Tell us your Talents').nullable(),
      commitment: Yup.string().required('Describe your commitment to personal growth'),
      currFinance: Yup.string().required('Describe your Financial situation'),
      financialIndependence: Yup.string().required('Describe efforts you made'),
      financialGrowth: Yup.string().required('Please tell us'),
      learning: Yup.string().required('Please tell us'),
      digitalSkill: Yup.string().required('Please tell us your Digital Skill'),
      opportunity: Yup.string().required('Please state your choice'),
    }),
    enableReinitialize: true,
    onSubmit: async (values) => {
      console.log(values, 'submitted');

      try {
        const response = await axios({
          method: 'POST',
          url: 'https://hook.eu2.make.com/8g7ysurvpztumhgbotmkz3yf185hu3ov',
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify(values),
        });

        if (!response.data) {
          toast.error('Sorry!, Failed to submit your response');
          return;
        }

        toast.success('Thank you!, Your application has been sent');
        setCurrentFormIndex(4);

        formik.resetForm();
      } catch (error) {
        toast.error('Sorry!, An error occurred while sending your response');
        console.error('Error:', error);
        // Optionally handle error (e.g., show an error message)
      }
    },
  });

  const currentForm = ['personalInfo', 'spiritualInfo', 'ministry', 'finance'];

  const handleNext = async () => {
    const errors = await formik.validateForm();

    const currentErrors = Object.keys(errors).filter((key) => {
      if (currentFormIndex === 0) {
        return [
          'name',
          'email',
          'whatsappNo',
          'dob',
          'city',
          'eduBackground',
          'employmentStatus',
        ].includes(key);
      } else if (currentFormIndex === 1) {
        return ['relationship', 'rate', 'challenge', 'goals'].includes(key);
      } else if (currentFormIndex === 2) {
        return [
          'motivation',
          'purpose',
          'improvements',
          'talents',
          'commitment',
        ].includes(key);
      } else if (currentFormIndex === 3) {
        return [
          'currFinance',
          'financialIndependence',
          'financialGrowth',
          'learning',
          'DigitalSkill',
          'opportunity',
        ].includes(key);
      }
      return false; // No validation needed for other steps
    });

    // If there are errors, set touched fields and return
    if (currentErrors.length > 0) {
      currentErrors.forEach((key) => {
        formik.setFieldTouched(key, true); // Mark fields as touched
      });
      return; // Prevent moving to the next step
    }

    // Moves to te next step if there isn't any issue
    if (currentFormIndex < currentForm.length - 1) {
      setCurrentFormIndex(currentFormIndex + 1);
      setMotionDirection(300);
    }
  };

  const handlePrevious = async () => {
    if (currentFormIndex > 0) {
      setCurrentFormIndex(currentFormIndex - 1);
      setMotionDirection(-300);
    }
  };

  return (
    <div className="min-h-[80vh] max-[980px]:min-h-[100vh] flex flex-col items-center justify-center gap-[20px]">
      <div className="flex flex-col items-center max-[950px]:items-center justify-center min-[1800px]:max-w-[1200px] max-[1800px]:max-w-[1100px] max-[1800px]:w-[90%] mx-auto max-[950px]:my-[0px] gap-[40px] my-[80px]">
        <Structure
          formik={formik}
          previous={handlePrevious}
          next={handleNext}
          currentFormIndex={currentFormIndex}
          setCurrentFormIndex={setCurrentFormIndex}
        >
          {currentForm[currentFormIndex] === 'personalInfo' ? (
            <FormOne formik={formik} motionDirection={motionDirection} />
          ) : currentForm[currentFormIndex] === 'spiritualInfo' ? (
            <FormTwo formik={formik} motionDirection={motionDirection} />
          ) : currentForm[currentFormIndex] === 'ministry' ? (
            <FormThree formik={formik} motionDirection={motionDirection} />
          ) : currentForm[currentFormIndex] === 'finance' ? (
            <FormFour formik={formik} />
          ) : (
            <FormStatus
              setCurrentIndex={setCurrentFormIndex}
              motionDirection={motionDirection}
            />
          )}
        </Structure>
      </div>
    </div>
  );
};

export default SignUpForm;
