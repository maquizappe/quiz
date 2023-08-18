import Answer from "./Answer";
import { useContext } from "react";
import { QuizContext } from "../contexts/quiz"


const Question = ({question}) => {
    const [quizState, dispatch]= useContext(QuizContext)
    const currentQuestion=quizState.question[quizState.currentQuestionIndex]
    console.log('currentQuestion',currentQuestion )
    return (
        <div>      
         
            <div className="container"> 
            <div className="navbar" >
                <div className="dots"> 
                <div className="red-dots"> </div>
                <div className="yellow-dots"> </div>
                <div className="green-dots"> </div>
            </div>  
                </div>
                 </div>
                 <div className="container">      
            <div className="blockquestion" > 
            <div className="question"> {currentQuestion.question} </div>
            </div>
            </div>
        
            <div className="answers"> 
            {quizState.answers.map((answer, index) =>(
                <Answer answerText={answer} key={index} index={index} currentAnswer={quizState.currentAnswer} correctAnswer = {currentQuestion.correctAnswer} onSelectAnswer= {(answerText) =>dispatch({type:"SELECT_ANSWER", payload: answerText}) }/> 
            ))}
            </div>
        </div>

    )


        ;
};
export default Question;