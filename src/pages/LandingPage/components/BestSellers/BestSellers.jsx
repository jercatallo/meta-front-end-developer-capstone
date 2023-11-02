import React from 'react'
import { Card, Heading } from '../../../../design-system';


export function BestSellers({items}) {
    return (
        <article id="best-sellers" data-testid="best-sellers-container" className='py-10'>
            <Heading testId="best-sellers-heading" type="h2">Best Sellers</Heading>
            <section className='flex flex-wrap gap-6 justify-center'>
                {items && items.map((item) => {
                    const { imageSrc, tags, title, description } = item;
                    return (<Card key={title} testId={`best-sellers-card-${title}`} imageSrc={imageSrc} tags={tags} title={title} description={description} />)
                })}

            </section>

        </article>
    )
}