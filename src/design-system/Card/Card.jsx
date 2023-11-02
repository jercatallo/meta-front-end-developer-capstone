import React from 'react'
import { Heading } from '../Heading'
import { Paragraph } from '../Paragraph'

export function Card({ title, description, imageSrc, tags, imageAlt, testId = "card-component"}) {

  return (
    <section data-testid={testId} className="max-w-sm rounded hover:scale-105 overflow-hidden shadow-lg transition duration-200">
      <img style={{ height: '300px', width: '100%', objectFit: 'cover' }} src={imageSrc} alt={imageAlt} />

      <div className="px-6 py-4">
        <Heading type="h5" overrides="my-0 mb-3">{title}</Heading>
        <Paragraph>
          {description}
        </Paragraph>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-end">
        {tags && tags.map((tag) => {
          return (<span key={tag} className="inline-block bg-primaryColor rounded-full px-3 py-1 text-sm font-semibold text-primaryText mr-2 mb-2">{tag}</span>)
        })}
      </div>
    </section>
  )
}

