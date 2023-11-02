import React from 'react'

export function Heading({ type, children, overrides, testId = 'heading-component' }) {
    const headingStyles = {
        'h1': 'text-6xl',
        'h2': 'text-5xl',
        'h3': 'text-4xl',
        'h4': 'text-3xl',
        'h5': 'text-2xl',
        'h6': 'text-1xl',
    };

    const commonStyles = 'my-6 text-left text-primaryText font-medium';

    const styleClasses = `${commonStyles} ${headingStyles[type]} ${overrides}`;

    return (
        <h1 data-testid={testId} className={styleClasses}>{children}</h1>
    )
}
