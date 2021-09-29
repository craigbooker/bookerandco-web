import React from 'react'
import Title from '../Title'
import { StaticImage } from 'gatsby-plugin-image'

import {
  about,
  aboutCenter,
  aboutImg,
  aboutInfo,
  staticImg,
} from '../../assets/css/about.module.css'

const AboutHeader = () => {
  // const { aboutImage } = useStaticQuery(getAboutImage)
  return (
    <section className={about}>
      <Title title="about craig" subtitle="" />
      <div className={aboutCenter}>
        <article className={aboutImg}>
          <StaticImage
            src="../../assets/images/craigbookerOval.jpg"
            alt="Craig Booker photo"
            className={staticImg}
          />
        </article>
        <article className={aboutInfo}>
          <h4></h4>
          <p>
            I am a writer and the founder of Booker & Co. I love to write on
            topics such as Apple, Business, Fear, Faith, Personal Growth,
            Writing & Software.
          </p>
          <p>
            I help others create amazing content which adds value, builds
            loyalty, and engages their audience.
          </p>
        </article>
      </div>
    </section>
  )
}

export default AboutHeader
