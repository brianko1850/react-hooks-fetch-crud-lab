import React, {useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, handleDelete}) {
  const displayQuestions = questions.map((question)=>
  (<QuestionItem question={question} key={question.id} handleDelete={handleDelete}/>))

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{displayQuestions}</ul>
    </section>
  );
}

export default QuestionList;
