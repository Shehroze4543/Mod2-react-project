import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [question, setQuestion] = useState([]);
  const [count, setCount] = useState(0);
  const [ansA, setAnswerA] = useState("");
  const [ansB, setAnswerB] = useState("");
  const [ansC, setAnswerC] = useState("");
  const [ansD, setAnswerD] = useState("");
  const [correctAns, setCorrectAns] = useState("");
  const apiKey = "ctbYfQVwD7PYZSlHpr04pv8YRZnPWRA6Wl4CEvlB";
  const limit = 10;
  const category = "JavaScript";
  function getData(e) {
    e.preventDefault();
    setCount(() => count + 1);
    axios
      .get(
        `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=${limit}&tags=${category}`
      )
      .then((response) => {
        console.log(response.data[0]);
        // setData(console.log(response.data[0]));
        // setData(console.log(response.data[0].question));
        setQuestion(response.data[0].question);
        setAnswerA(response.data[0].answers.answer_a);
        setAnswerB(response.data[0].answers.answer_b);
        setAnswerC(response.data[0].answers.answer_c);
        setAnswerD(response.data[0].answers.answer_d);
        setCorrectAns(response.data[0].correct_answers);
        // console.log(response.data[0].correct_answers.answer_a_correct);
        // console.log(response.data[0].correct_answers.answer_b_correct);
        // console.log(response.data[0].correct_answers.answer_c_correct);
        // console.log(response.data[0].correct_answers.answer_d_correct);
      });
  }
  function checkAnswerA() {
    if (Object.values(correctAns)[0] === "true") {
      console.log(`Sahi Jawab`);
    } else {
      console.log("Ghalt Jawab");
    }
  }
  function checkAnswerB() {
    if (Object.values(correctAns)[1] === "true") {
      console.log(`Sahi Jawab`);
    } else {
      console.log("Ghalt Jawab");
    }
  }
  function checkAnswerC() {
    if (Object.values(correctAns)[2] === "true") {
      console.log(`Sahi Jawab`);
    } else {
      console.log("Ghalt Jawab");
    }
  }
  function checkAnswerD() {
    if (Object.values(correctAns)[3] === "true") {
      console.log(`Sahi Jawab`);
    } else {
      console.log("Ghalt Jawab");
    }
  }
  return (
    <>
      <h3>
        Question #{count}: {question}
      </h3>
      <ul>
        <li>
          <button onClick={checkAnswerA}>{ansA}</button>
        </li>
        <li>
          <button onClick={checkAnswerB}>{ansB}</button>
        </li>
        {ansC === null ? null : (
          <li>
            <button onClick={checkAnswerC}>{ansC}</button>
          </li>
        )}
        {ansD === null ? null : (
          <li>
            <button onClick={checkAnswerD}>{ansD}</button>
          </li>
        )}
      </ul>
      <button onClick={getData}>Click me</button>
      <ul>
        {Object.entries(correctAns).map(([key, val]) => (
          <li key={key}>
            <strong>{key}</strong>: '{val}'
          </li>
        ))}
        {/* {console.log(Object.values(correctAns)[0])} */}
      </ul>
    </>
  );
}

export default App;
