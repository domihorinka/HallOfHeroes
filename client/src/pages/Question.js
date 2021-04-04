
import React ,{useState,useEffect} from 'react';

function Questions() {


    const questions = [
        {
            questionText: `Welcome {Adventurer} to Dungeons and Dragons!, How exciting you decided to join us. lets start by making a character the best to do that to pick a role. what would you like to do?`,
            possibleAnswers: [
                {answerText:"Strong",answerValue:"Str" },
                {answerText:"Nimble",answerValue:"Dex" },
                {answerText:"Mystical",answerValue:"Int" }
            ]
        },
        {
            questionText: `Excellent choice {Adventurer} now being from what classes would you wanna play?`,
            possibleAnswers: [
                 {answerText: "Barbarian", answerValue:"barbarian"},       
                 {answerText: "fighter", answerValue:"fighter"},       
                 {answerText: "paladin", answerValue:"paladin"}    
            ]
        }
    ]


    const [currentQuestion,setCurrentQuetion] = useState(0);
    const [showCharacter,setShowCharacter] = useState([]

    );

    const handleButtonClicked = (option) =>{
        const nextQuestion = currentQuestion + 1;
        const makeCharacter = showCharacter.push(option);
        if(nextQuestion < questions.length){
        setCurrentQuetion(nextQuestion)
        console.log(option)
        
        } else {
            console.log(makeCharacter)
        }
    }

    return (
        <div>
            <div>
                <span>Hello</span>
            </div>
            <div>
                {questions[currentQuestion].questionText}
            </div>
            <div>
            {questions[currentQuestion].possibleAnswers.map(( possibleAnswer ) => {return (<button onClick={()=>{handleButtonClicked(possibleAnswer.answerValue)}}> {possibleAnswer.answerText} </button>)})  }
            </div>
        </div>
    )
}

export default Questions
