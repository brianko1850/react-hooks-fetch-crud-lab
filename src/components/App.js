import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])
  useEffect(()=>{
    fetch("http://localhost:4000/questions")
    .then(res=>res.json())
    .then(data=>setQuestions(data))
  },[])

  const postQuestion =(question)=>{
    fetch('http://localhost:4000/questions',{
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(question)
        })
    .then(res=>res.json())
    .then(data=>{
      setQuestions([...questions, data])
    })
  }

 
  const deleteQuestion=(id)=>{
    fetch(`http://localhost:4000/questions/${id}`,{
      method: "DELETE"
    })
    const updatedQuestions = questions.filter(question => question.id !== id)
    setQuestions(updatedQuestions)
  }
  


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm postQuestion={postQuestion}/> : <QuestionList onDelete={ deleteQuestion } questions={questions}/>}
    </main>
  );
}

export default App;
