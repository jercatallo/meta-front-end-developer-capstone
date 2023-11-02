import React from 'react';

export const Button = ({children, type, onClick, buttonType = 'button', overrides, testId = 'button-component'}) => {
  const buttonStyles = {
    'primary': 'bg-primaryColor py-4 px-4 text-2xl text-textOnPrimaryBackground hover:bg-secondaryColor',
    'secondary': 'bg-secondaryColor hover:bg-gray-400 text-textOnSecondaryBackground',
    'danger': 'bg-errorColor hover:bg-red-600 text-primaryColor',
    'brand': 'bg-secondaryColor py-4 px-4 w-56 text-2xl text-textOnSecondaryBackground hover:bg-primaryColor'
  };

  const commonStyles = 'py-2 px-4 rounded block text-xl text-white hover:scale-105 transition duration-200';

  const styleClasses = `${commonStyles} ${buttonStyles[type]} ${overrides}`;

  return (
    <button type={buttonType} data-testid={testId} className={styleClasses} onClick={onClick}>
        {children}
    </button>
  );
};
