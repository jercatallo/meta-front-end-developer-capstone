import React from 'react'
import * as Yup from 'yup';
import { formikSerializeFields } from '../../../../utilities';
import { useFormik } from 'formik';
import { Form } from '../../../../components';

export function PaymentDetailsForm({onSubmit, backAction}) {
    const form = useFormik({
        initialValues: {
            cardName: '',
            cardNumber: '',
            cardExpirationDate: '',
            cardCCV: '',
        },
        validationSchema: Yup.object({
            cardName: Yup.string()
                .required('Card Name is required')
                .matches(/^[A-Za-z\s]+$/, 'Card Name must contain only letters and spaces'),
            cardNumber: Yup.string()
                .required('Card Number is required')
                .matches(/^\d{16}$/, 'Card Number must be a 16-digit number'),
            cardExpirationDate: Yup.string()
                .required('Card Expiration Date is required')
                .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid Expiration Date format (MM/YY)'),
            cardCCV: Yup.string()
                .required('Card CCV is required')
                .matches(/^\d{3}$/, 'Card CCV must be a 3-digit number'),
        }),
        onSubmit: (values) => {
            onSubmit({values})
        },
    });

    const fields = formikSerializeFields([
        {
            name: 'cardName',
            type: 'password',
            placeholder: '*Card Name',
            maxLength: 20
            
        },
        {
            name: 'cardNumber',
            type: 'password',
            placeholder: '*Card Number',
            maxLength: 16
        },
        {
            name: 'cardExpirationDate',
            type: 'password',
            placeholder: '*Card Expiration Date (MM/YY)',
            maxLength: 5
        },
        {
            name: 'cardCCV',
            type: 'password',
            placeholder: '*Card CCV',
            maxLength: 3
        },
    ], form)

    const Form2Props = {
        buttonTestId: 'book-table-page-form2-button',
        testId: 'book-table-page-form2',
        buttonText: "Submit",
        backAction: backAction,
        title: "Payment Details",
        description: "We will charge you $1 for the reservation. Rest assured, we collect your payment details securely for a worry-free transaction.",
        onSubmit: form.handleSubmit,
        fields: fields,
    }


  return (
    <Form {...Form2Props} />
  )
}
