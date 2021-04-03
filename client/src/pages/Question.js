import React from 'react'
const questionOne = `Welcome {Adventurer} to Dungeons and Dragons!, How exciting you decided to join us. lets start by making a character the best to do that to pick a role. what would you like to do?`

const answersOne = ["Strong","Nimble","Mystical"]
const answersTwoStrong = ["Barbarian","Fighter","Paladin"]
const answersTwoNimble = ["Rogue","Ranger","Monk"]
const answersTwoMystical = ["Sorcerer","Wizard","Warlock"]
const ht = querySelector(".healthtotal")
ht.addEventListener("click",startingHealth);

const d20 = () => {console.log( Math.floor(Math.random() * 20) + 1)};
const d6 = () =>  {console.log(Math.floor(Math.random() * 6) + 1)};
let lifetotal = []
const startingHealth = () =>{ 
    
    for(let i = 0; i < 2; i++){
        lifetotal.push(d6)
    }
    
    console.log(lifetotal);

 }

let staging = 0;
let a = questionOne

console.log(questionOne)
const questionaire = (e,a,staging) => {

    staging ++;

 

   let q1 = e.target.value;
   let q2;

    if(q1 == "Strong"){
        q2 = answersTwoStrong
    } else if(q1 =="Nimble"){
        q2 = answersTwoNimble
     
    } else if(q1 =="Mystical"){
        q2 = answersTwoMystical
    }   


let questionTwo =  console.log(`Excellent choice {Adventurer} now being ${q1} from what classes would you wanna play?`)

    console.log(q1,q2)
    if(staging < 2){
        questionaire(questionTwo,q2)
    }
 
}




// if i loop through the questionaire get loop can compare what question we are at. then it should repeat itself. this might also be recursive
// so a varible for the answervalue and what question.  so like updating the state. we start off when zero and we push an element and update the value and continue to push elements until the character has been created. 

function Question() {
    return (
        <div>


            <button onClick={questionaire} value={`Nimble`}>Nimble</button>
            <button onClick={questionaire} value={`Strong`}>Strong</button>
            <button onClick={questionaire} value={`Mystical`}
            >Mystical</button>
            <button className={`healthtotal`}></button>
            <button onClick={d20}> 20</button>
            <button onClick={d6}> 6</button>
        </div>
    )
}

export default Question
