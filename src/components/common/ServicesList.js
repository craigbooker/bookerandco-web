import React from 'react'
import Title from '../Title'
import servicesData from '../../constants/ServicesData'
import {
  servicesCenter,
  serviceCard,
} from '../../assets/css/services.module.css'

const ServicesList = () => {
  return (
    <section className="section bg-grey">
      <Title title="services" />

      <div className={`section-center ${servicesCenter}`}>
        {servicesData.map(service => {
          // const { id, icon, title, text } = service
          const { id, icon, title, description } = service
          return (
            <article key={id} className={serviceCard}>
              {icon}
              <h4>{title}</h4>
              {/* <div className="underline"></div> */}
              <p>{description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default ServicesList
