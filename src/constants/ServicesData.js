import React from 'react'
import { FaCode, FaKeyboard, FaComments } from 'react-icons/fa'

const servicesData = [
  {
    id: 1,
    icon: <FaKeyboard className="service-icon" />,
    title: 'writing',
    description:
      'Your business recognizes the value creative content offers to your customers, but you might not have the resources to do it all by yourself. I understand and am happy to help.',
  },

  {
    id: 2,
    icon: <FaComments className="service-icon" />,
    title: 'consulting',
    description:
      'Sometimes having a knowledgable person you can trust is what your business really needs. I understand there’s value in collaboration. I am here to help.',
  },
]

export default servicesData
