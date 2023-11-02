import React from 'react'
import { Button, Heading, Input, Paragraph } from '../../design-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export function Form({ buttonTestId = 'form-component-button', fields, onSubmit, title, description, backAction, buttonText, testId = 'form-component' }) {

    return (
        <form data-testid={testId} onSubmit={onSubmit} className='w-2/3 mx-auto border-solid border-2 p-5 border-primaryText rounded'>
            {typeof backAction === 'function' && <FontAwesomeIcon data-testid={`${testId}-back-button`} onClick={backAction} className='text-2xl pl-1 pt-2' role="button" icon={faChevronLeft} />}
            <Heading type="h5" overrides="mb-1 mt-3">{title}</Heading>
            <Paragraph type="p6" overrides="mb-5">{description}</Paragraph>
            {fields && fields.map(field => {
                const { placeholder, onChange, value, type, name, error, touched, maxLength, max } = field;
                return (
                    <React.Fragment key={name}>
                        <Input testId={`input-${name}`} inputProps={{ name, onChange, value, type, maxLength, max }} validationProps={{error, touched}} labelProps={{ placeholder }}></Input>
                    </React.Fragment> 
                )
            })}

            <Button type="primary" testId={buttonTestId} buttonType="submit" overrides="ml-auto">{buttonText}</Button>
        </form>
    )
}   