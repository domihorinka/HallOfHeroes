import React from 'react'
import 'react-card-with-image/dist/index.css'
import Card from '../components/Cards/Card'
import seed from '../../../scripts/seed.json'


function List() {
  return (
    <>
      <Card
        name={seed[0].name}
        class={seed[0].class}
        level={seed[0].level}
        image={seed[0].image}
      />


    </>
  )
}
export default List