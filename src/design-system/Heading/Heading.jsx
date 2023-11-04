import React from 'react'

export function Heading({ type, children, overrides, testId = 'heading-component' }) {
    const headingStyles = {
        'h1': 'text-4xl md:text-6xl',
        'h2': 'text-3xl md:text-4xl',
        'h3': 'text-lg md:text-2xl',
        'h4': 'text-md md:text-lg',
        'h5': 'text-sm md:text-md',
        'h6': 'text-xs md:text-sm',
    };

    const commonStyles = 'my-6 text-left text-primaryText font-medium';

    const styleClasses = `${commonStyles} ${headingStyles[type]} ${overrides}`;

    return (
        <h1 data-testid={testId} className={styleClasses}>{children}</h1>
    )
}
