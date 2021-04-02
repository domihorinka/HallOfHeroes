import React,{ useState,useEffect} from 'react'
import './Card.css'
import { CardView } from 'react-card-with-image'
import littlebirddude from '../../images/littlebirddude.png'
import API from "../../utils/API"

const Card = (props) => {

  const [character, setCharacter] = useState([])

  useEffect(()=> {
      loadCharacters()
  }, [])

  function loadCharacters() {
      API.getCharacters()
          .then(res =>
              // setCharacter(res.data)
              console.log(res.data)
          )
          .catch(err => console.log(err));
  };




  const items = [
      {
        id: 1,
        name: props.name,
        class: props.class,
        level: props.level,
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

