import React from 'react'
const questionOne = `Welcome {Adventurer} to Dungeons and Dragons!, How exciting you decided to join us. lets start by making a character the best to do that to pick a role. what would you like to do?`
const questionTwo = `Excellent choice {Adventurer} now being {answerone} from what classes would you wanna play?`
const answersOne = ["Strong","Nimble","Mystical"]
const answersTwoStrong = ["Barbarian","Fighter","Paladin"]
const answersTwoNimble = ["Rogue","Ranger","Monk"]
const answersTwoMystical = ["Sorcerer","Wizard","Warlock"]


const d20 = () => {console.log( Math.floor(Math.random() * 20) + 1)};
const d6 = () =>  {console.log(Math.floor(Math.random() * 6) + 1)};

let staging = 0;

const questionaire = (e,a,b) => {

    staging ++;

    
    console.log(a)

   let q1 = e.target.value;
   let q2;

    if(q1 == b[0]){
        q2 = answersTwoStrong
    } else if(q1 == b[1]){
        q2 = answersTwoNimble
     
    } else if(q1 ==b[2]){
        q2 = answersTwoMystical
    }   

    console.log(q1,q2)
    if(staging < 1){
        questionaire(questionTwo,q2)
    }
 
}


// if i loop through the questionaire get loop can compare what question we are at. then it should repeat itself. this might also be recursive
// so a varible for the answervalue and what question.  so like updating the state. we start off when zero and we push an element and update the value and continue to push elements until the character has been created. 

function Question() {
    return (
        <div>


            <button onClick={questionaire(answersOne)} value={`Strong`}>Nimble</button>
            <button onClick={questionaire} value={`Nimble`}>Nimble</button>
            <button onClick={questionaire} value={`Mystical`}
            >Mystical</button>
            <button onClick={d20}> 20</button>
            <button onClick={d6}> 6</button>
        </div>
    )
}

export default Question
