import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Answer = ({answerText, onSelectAnswer, index, currentAnswer, correctAnswer}) => {
  
    const isCorrectAnswer = currentAnswer && answerText ===correctAnswer;
    const isWrongAnswer = currentAnswer=== answerText && currentAnswer !== correctAnswer;
    const correctAnswerClass= isCorrectAnswer ?  'correct-answer' : '';
    const wrongAnswerClass= isWrongAnswer ? 'wrong-answer' : '';
    const disabledClass = currentAnswer ? 'disabled-answer' : '';
    const answerbackgroundcorrect= isCorrectAnswer ?  'answerbackgroundcorrect' : '';
    const answerbackgroundincorrect= isWrongAnswer ?  'answerbackgroundincorrect' : '';
   
    return (
    <>
    <div className={`answerzero ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}` } onClick={()=>onSelectAnswer(answerText)}> 
    <div className= {`answer ${answerbackgroundcorrect} ${answerbackgroundincorrect}`}>
        {/* <div className="answer-letter">{letterMapping[index]}</div> */}
        <div className="answer-text">  {answerText} </div>
        <div className="x"  ><FontAwesomeIcon icon={faXmark} /> </div>


        
    </div>   
        
      
         </div>
 </>
    )
};
    export default Answer;