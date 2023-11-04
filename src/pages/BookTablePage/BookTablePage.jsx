import React, { useState } from 'react'
import { BookingSuccess, DetailsForm, PaymentDetailsForm } from './components';
import { Loading } from '../../components';

export function BookTablePage() {
    const [step, setStep] = useState(1);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState({});

    const callAPI = ({ successCallback }) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            successCallback()
        }, (Math.random() * 1000) + 1000)
    }

    const BookingSuccessProps = {
        details
    }

    const onDetailsFormSubmit = ({ values }) => {
        setDetails({ ...values })
        callAPI({ successCallback: () => setStep(2), setLoading })
    }

    const onPaymentDetailsFormSubmit = ({ values }) => {
        setDetails({ ...details, ...values })
        callAPI({ successCallback: () => setSuccess(true), setLoading })
    }
    return (
        <article data-testid="booking-page" className='py-5'>
            {!success &&
                <>
                    {step === 1 && <DetailsForm onSubmit={onDetailsFormSubmit} />}
                    {step === 2 && <PaymentDetailsForm onSubmit={onPaymentDetailsFormSubmit} />}
                </>
            }
            {success && <BookingSuccess {...BookingSuccessProps}></BookingSuccess>}
            {loading && <Loading></Loading>}
        </article>
    )
}
