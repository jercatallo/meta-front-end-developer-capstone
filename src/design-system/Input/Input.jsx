import React from 'react'

export function Input({ inputProps, labelProps, validationProps, testId='input-component' }) {

    const { placeholder } = labelProps;
    const { error, touched } = validationProps;
    return (
        <fieldset className="relative h-11 w-full mb-9">
            <input data-testid={testId} placeholder=' '
                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                {...inputProps}
            />
            <label htmlFor={inputProps.name} className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {placeholder}
            </label>
            <div className='block text-xs text-errorColor pt-1'>
            {(touched && error) || ' '} 

            </div>
        </fieldset>
    )
}