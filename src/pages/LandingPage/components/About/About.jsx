import React from 'react'
import { Heading, Paragraph } from '../../../../design-system'
import familyPhoto from '../../../../assets/about.jpeg'

export function About() {
    return (
        <article data-testid='about-container' className='py-10' id="about">
            <Heading testId='about-heading' type="h2">About Us</Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 content-center items-center'>
                <section>
                    <img data-testid="about-image" src={familyPhoto} alt="family"></img>
                </section>

                <section className='hover:scale-105 transition duration-200'>
                    <Paragraph testId="about-paragraph1" type="p2">Welcome to "Little Lemon" nestled in the heart of California, our restaurant is designed with one goal in mind: to provide families with an inviting, warm, and inclusive environment where every member, from the youngest to the oldest, feels right at home</Paragraph>
                    <Paragraph testId="about-paragraph-quote" overrides="text-right">~ Little Lemon Family</Paragraph>
                </section>
            </div>
        </article>
    )
}
