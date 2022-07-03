import React, {useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, onDelete} ) {

  


  const displayQuestions = questions.map((question)=>
  (<QuestionItem question={question} key={question.id} onDelete={onDelete}/>))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
