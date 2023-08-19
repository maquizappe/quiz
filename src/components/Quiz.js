import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";
import "../index.css";






const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const progress = (quizState.currentQuestionIndex /
    quizState.question.length) * 500
  const totalprogress = quizState.question.length * 64
  const totalquestions = quizState.question.length * 40
  const questionsright= (quizState.correctAnswersCount /quizState.question.length)* 317
  console.log("quizState", quizState);
  return (
    
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">
            CONGRATULATIONS!!!
          </div>
<div> 
<img style={{height:"400px", marginTop:"30px"}}src="/congratulations.png" alt="Congratulations" />
</div>
          <div className="results-info">
          
            <div> Yo have got {quizState.correctAnswersCount} of {""}
              {quizState.question.length} questions right.</div>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom:"30px" }}>
            <div style={{ width: `${totalquestions}px`, background: "#F5F5F5", border: "1px solid #000", height: "20px", borderRadius: "30px" }} >
              <div style={{ width: `${questionsright}px`, background: "#E6DCFF", height: "18px", borderRadius: "30px", marginLeft: "1px" }} >  </div>
            </div>
          </div>


          <div className="next-button"
            onClick={() => dispatch({ type: "RESTART" })}
          > Restart </div>

          
 
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.question.length}
          </div>
          <Question />
          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            Next question
          </div>

        
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop:"30px" }}>
            <div style={{ width: `${totalprogress}px`, background: "#F5F5F5", border: "1px solid #000", height: "20px", borderRadius: "30px" }} >
              <div style={{ width: `${progress}px`, background: "#E6DCFF", height: "18px", borderRadius: "30px", marginLeft: "1px" }} >  </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default Quiz;
