import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'
import React , {useEffect, useState} from 'react'
// import littlebirddude from '../images/littlebirddude.png'

import API from "../utils/API"

const Character = () => {
  const [character, setCharacter] = useState([])

  useEffect(()=> {
      loadCharacters()
  }, [])

  function loadCharacters() {
      API.getCharacters()
          .then(res =>
              setCharacter(res.data)
          )
          .catch(err => console.log(err));
  };
  const items =[
    // {
    //   id: char._id,
    //   header: char.name,
    //   description: char.level,
    //   image: littlebirddude
    // }
  
  ]
  character.map((char) => {
    items.push({
      id: char._id,
      header: char.name,
      description: char.level,
      // image: littlebirddude
    })
  })
  return (
        <CardView
          // image={littlebirddude}
          items={items}
          activeColor='#000'
          // imageHeight='650px'
          // imageWidth='800px'
        />
      )
}

// const App = () => {
//   const items = [
//     {
//       id: 1,
//       header: 'Lorem ipsum',
//       description:
//         'dolor sit amet, consectetur adipiscing elit. Sed tempus nunc et tincidunt lobortis. Aliquam placerat, justo sit amet mattis molestie, ipsum nisi congue turpis, in imperdiet nisi nisl sit amet arcu. Donec euismod eu ante quis elementum. Maecenas commodo erat',
//       image: 'image-src'
//     },
//     {
//       id: 2,
//       header: 'Sed cursus',
//       description:
//         'in metus quis tempor. Donec at venenatis magna, vel fringilla dui. Curabitur id gravida ipsum. Donec at mollis massa. Nullam metus elit, pret',
//       image: 'image-src'
//     },
//     {
//       id: 3,
//       header: 'Sed fermentum',
//       description:
//         'condimentum purus, non sagittis massa faucibus id. Sed finibus convallis lectus eu fringilla. Proin lacinia sem vitae nunc consectetur, a faucibus orci ultricie',
//       image: 'image-src'
//     },
//     {
//       id: 4,
//       header: 'Proin et urna',
//       description:
//         'vitae neque fermentum fringilla. Proin bibendum sollicitudin aliquet. Fusce id magna aliquam, pulvinar metus vitae, bibendum felis.',
//       image: 'image-src'
//     },
//     {
//       id: 5,
//       header: 'Cras leo velit',
//       description:
//         'finibus id eros eu, commodo sollicitudin lacus. Nunc semper enim nec est viverra, at pharetra orci lobortis. Nulla facilisi. Sed non lectus nunc.',
//       image: 'image-src'
//     }
//   ]
//   return (
//     <CardView
//       items={items}
//       activeColor='#000'
//       imageHeight='650px'
//       imageWidth='800px'
//     />
//   )
// }

// export default App

export default Character
