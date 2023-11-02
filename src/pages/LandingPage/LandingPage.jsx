import React from 'react'
import { Hero, BestSellers, About } from './components'
import drinkImage from '../../assets/product-3.jpeg'
import eggImage from '../../assets/product-1.jpeg'
import chickenImage from '../../assets/product-2.jpeg'

export const LandingPage = () => {
  const bestSellers = [
    {
      imageSrc: drinkImage,
      imgAlt: "glass of drink",
      tags: ['$2.55'],
      title: 'Spice Lemon',
      description: 'Handpicked from the finest groves, our lemon juice is a burst of sunshine in every drop, meticulously crafted to elevate your culinary creations and quench your thirst for that refreshing, natural citrus kick.'
    },
    {
      imageSrc: eggImage,
      imgAlt: "breakfast foods",
      tags: ['$4.55'],
      title: 'Good Morning Lemon',
      description: 'This wholesome and nourishing breakfast product is designed to kickstart your day with a burst of nutrition, providing you with the vitality and sustenance you need to conquer your daily challenges.'
    },
    {
      imageSrc: chickenImage,
      imgAlt: "chicken with lot of goods",
      tags: ['$15.99'],
      title: 'Buffet Lemon Deluxe',
      description: 'A celebration of succulent, savory, and absolutely irresistible chicken delights. This all-you-can-eat extravaganza is the ultimate destination for chicken aficionados, offering a symphony of flavors and a feast fit for royalty.'
    }
  ]

  const BestSellersProps = {
    items: bestSellers
  }

  return (
    <article data-testid="landing-page">
      <Hero ></Hero>
      <BestSellers {...BestSellersProps}></BestSellers>
      <About></About>
    </article>
  )
}

