import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState([]);
  const [ansA, setAnswerA] = useState("");
  const [ansB, setAnswerB] = useState("");
  const [ansC, setAnswerC] = useState("");
  const [ansD, setAnswerD] = useState("");
  const apiKey = "ctbYfQVwD7PYZSlHpr04pv8YRZnPWRA6Wl4CEvlB";
  const limit = 10;
  const category = "JavaScript";
  function getData(e) {
    e.preventDefault();
    axios
      .get(
        `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${limit}&tags=${category}`
      )
      .then((response) => {
        // console.log(response.data[0]);
        // setData(console.log(response.data[0]));
        // setData(console.log(response.data[0].question));
        // setAnswer(console.log(response.data[0].answers.answer_a));
        // setAnswer(console.log(response.data[0].answers.answer_b));
        // setAnswer(console.log(response.data[0].answers.answer_c));
        // setAnswer(console.log(response.data[0].answers.answer_d));
        setQuestion(response.data[0].question);
        setAnswerA(response.data[0].answers.answer_a);
        setAnswerB(response.data[0].answers.answer_b);
        setAnswerC(response.data[0].answers.answer_c);
        setAnswerD(response.data[0].answers.answer_d);
      });
  }
  return (
    <>
      <h3>{question}</h3>
      <ul>
        <li>{ansA}</li>
        <li>{ansB}</li>
        {ansC === null ? null : <li>{ansC}</li>}
        {ansD === null ? null : <li>{ansD}</li>}
      </ul>
      <button onClick={getData}>Click me</button>
    </>
  );
}

export default App;
