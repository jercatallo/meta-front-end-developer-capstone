import React from 'react'

export function Paragraph({type, children, overrides, testId = 'paragraph-component'}) {
    const headingStyles = {
        'p1': 'text-2xl md:text-3xl',
        'p2': 'text-xl md:text-2xl',
        'p3': 'text-lg',
        'p4': 'text-md',
        'p5': 'text-sm',
        'p6': 'text-xs',
    };

    const commonStyles = 'my-2 text-primaryText';

    const styleClasses = `${commonStyles} ${headingStyles[type]} ${overrides}`;

    return (
        <p data-testid={testId} className={styleClasses}>{children}</p>
    )

}
