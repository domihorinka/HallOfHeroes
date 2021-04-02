import React from 'react'
import './Card.css'
import { CardView } from 'react-card-with-image'
import littlebirddude from '../../images/littlebirddude.png'

const Card = (props) => {
  const items = [
    {
      id: 1,
      name: { props.name },
      class: { props.class },
      level: { props.level },
      image: littlebirddude
    }
  ]
  return (
    <CardView
      items={items}
      activeColor='#000'
      imageHeight='650px'
      imageWidth='800px'
    />
  )
}




export default Card

