import React from 'react'
import { useNavigate } from 'react-router-dom'
import restaurantImage from '../../../../assets/little-lemon-restaurant.jpeg'
import { Button, Heading } from '../../../../design-system'
import { Paragraph } from '../../../../design-system/Paragraph'

export function Hero() {
  const navigate = useNavigate();

  return (
    <article data-testid='hero-container' className='grid grid-cols-1 md:grid-cols-2 my-28 gap-10'>
      <section className='grid content-around'> 
        <div>
        <Heading testId='hero-heading' type="h1">Little Lemon</Heading>
        <Paragraph type="p2" testId='hero-paragraph' overrides="text-left">Where culinary excellence meets warm hospitality. Indulge in a culinary journey that celebrates flavors, freshness, and creativity. </Paragraph>
        </div>
       
        <Button type="brand" onClick={() => navigate('book')} testId='hero-reserve-a-table-button' overrides="mt-5">Reserve a Table!</Button>
      </section>
      <section className='row-start-1 md:col-start-2'>
        <img src={restaurantImage} data-testid='hero-image' alt="little-lemon-restaurant" />
      </section>

    </article>
  )
}