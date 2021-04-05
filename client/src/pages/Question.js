
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
        
        },
        {
            questionText: `Excellent choice {Adventurer} now being from what classes would you wanna play?`,
            possibleAnswers: [
                 {answerText: "rogue", answerValue:"rogue"},       
                 {answerText: "ranger", answerValue:"ranger"},       
                 {answerText: "monk", answerValue:"monk"}    
            ]
        },
        {
            questionText: `Excellent choice {Adventurer} now being from what classes would you wanna play?`,
            possibleAnswers: [
                 {answerText: "sorcerer", answerValue:"sorcerer"},       
                 {answerText: "wizard", answerValue:"wizard"},       
                 {answerText: "warlock", answerValue:"warlock"},    
    
            ]
        },
        {
            questionText: `a fine choice indeed playing a {} with just great {}! now what name should there character have?`,
            possibleAnswers: [
                 {answerText: "sorcerer", answerValue:"sorcerer"},       
                 {answerText: "wizard", answerValue:"wizard"},       
                 {answerText: "warlock", answerValue:"warlock"}    
            ]
        }
    ]


    const [currentQuestion,setCurrentQuetion] = useState(0);
    const [showCharacter,setShowCharacter] = useState([]

    );
    let nextQuestion;
    let numbernew;
    let makeCharacter;
    const handleButtonClicked = (option) =>{

        if(option == "Dex"){
            numbernew = 2;
            makeCharacter = {...showCharacter, Prof: option};
        }
       else if(option == "Str"){
            numbernew = 1;
            makeCharacter = {...showCharacter, Prof: option};
        }
        else if(option == "Int"){
            numbernew = 3;
            makeCharacter = {...showCharacter, Prof: option};
        }
        else {
            makeCharacter = {...showCharacter, class: option};

        }
        nextQuestion = currentQuestion + numbernew;

        
        
        if(nextQuestion < questions.length){
        setCurrentQuetion(nextQuestion)
        setShowCharacter(makeCharacter)
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
