import React, { useMemo } from 'react'
import { Button, Heading, Paragraph } from '../../../../design-system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { generateReferenceNumber } from '../../../../utilities';

export function BookingSuccess({ details }) {
    const navigate = useNavigate()
    const referenceNumber = generateReferenceNumber(10);

    const information = useMemo(()=> {
        return details || {}
    },[details])

    return (
        <section className='text-center'>
            <Heading testId="booking-success-heading1" type="h2" overrides="text-center">Reservation Success! </Heading>
            <FontAwesomeIcon data-testid="booking-success-icon" className='text-9xl text-successColor pl-1 pt-2' icon={faCheck} />
            <Heading testId="booking-success-heading2" type="h3" overrides="text-center">Thank you {information && information.name} for having transaction with us!</Heading>

            <Heading testId="booking-success-reference-number" type="h5" overrides="text-center">Here's your reference number: {referenceNumber}</Heading>

            <Paragraph testId="booking-success-description" type="p4">Keep your reference number and show it to the Little Lemon Staff on {information.date} at {information.time} <br></br> This reservation is for {information.numberOfPeople} people but guests are very welcome!</Paragraph>
            <br></br>
            <Button testId='booking-success-button' onClick={() => navigate('/')} type="primary" overrides="mx-auto">Go back to home page</Button>
        </section>
    )
}