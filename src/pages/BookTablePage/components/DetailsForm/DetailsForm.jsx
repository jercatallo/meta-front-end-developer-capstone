import React from 'react'
import * as Yup from 'yup';
import { formikSerializeFields } from '../../../../utilities';
import { useFormik } from 'formik';
import { Form } from '../../../../components';

export function DetailsForm({onSubmit}) {
    const form = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            date: '',
            time: '',
            numberOfPeople: 0,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('First Name is required')
                .min(2, 'First Name must be at least 2 characters')
                .max(50, 'First Name must be at most 50 characters'),
            lastName: Yup.string()
                .required('Last Name is required')
                .min(2, 'Last Name must be at least 2 characters')
                .max(50, 'Last Name must be at most 50 characters'),
            date: Yup.date()
                .required('Date is required')
                .min(new Date(), 'Date cannot be in the past'), // Optionally set a minimum date
            time: Yup.string()
                .required('Time is required'),
            numberOfPeople: Yup.number()
                .max(20, 'Number of people at most 20 people')
                .required('Number of People is required')
                .integer('Number of People must be an integer')
                .positive('Number of People must be a positive number')
                .moreThan(0, 'Number of People must be greater than 0'),
        }),
        onSubmit: (values) => {
            onSubmit({values})
        },
    });

    const step1Fields = formikSerializeFields([
        {
            name: 'firstName',
            type: 'text',
            placeholder: '*First Name',
            maxLength: 20
        },
        {
            name: 'lastName',
            type: 'text',
            placeholder: '*Last Name',
            maxLength: 20
        },
        {
            name: 'numberOfPeople',
            type: 'number',
            placeholder: '*Number of People',
            max: 20
        },
        {
            name: 'date',
            type: 'date',
            placeholder: '*Date of reservation',
        },
        {
            name: 'time',
            type: 'time',
            placeholder: '*Time of reservation',
        },
    ], form)

    const Form1Props = {
        buttonTestId: 'book-table-page-form1-button',
        testId: 'book-table-page-form1',
        buttonText: "Next",
        title: "Reservation details",
        description: "For you to proceed, we would like to request to collect your information for our records. We prioritize your privacy and collect your information securely.",
        onSubmit: form.handleSubmit,
        fields: step1Fields,
    }

  return (
    <Form {...Form1Props} />
  )
}
