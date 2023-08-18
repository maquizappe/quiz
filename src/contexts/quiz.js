import { createContext, useReducer } from "react";
import question from "../data";
import { shuffleAnswers } from "../helpers";

const initialState = {
  currentQuestionIndex: 0,
  question,
  showResults: false,
  answers: shuffleAnswers(question[0]), //primera pregunta
  currentAnswer: '',
  correctAnswersCount: 0,
};

const reducer = (state, action) => {
  console.log('reducer', state, action)
  switch (action.type){
    case "SELECT_ANSWER" :{
      const correctAnswersCount = action.payload === state.question[state.currentQuestionIndex].correctAnswer ? state.correctAnswersCount + 1 : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      }
    }
    case "NEXT_QUESTION" :{
      const showResults = state.currentQuestionIndex === state.question.length -1;
      const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex +1;
      const answers = showResults ? [] : shuffleAnswers(state.question[currentQuestionIndex])
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        showResults,
        answers,
        currentAnswer : ""
      };
    }
    case "RESTART" :{
      return initialState;
    }
    default: {
      return state;
    }
  }
  
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  console.log("state", value);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
