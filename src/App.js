import {useState} from "react";
import "./App.css";
import axios from "axios";
import Amounts from "./Components/Amounts";
import Result from "./Components/Result";
import Loser from "./Components/Loser";
import Winner from "./Components/Winner";

function App() {
  const [text, setText] = useState("");
  const [question, setQuestion] = useState([]);
  const [count, setCount] = useState(0);
  const [ansA, setAnswerA] = useState("");
  const [ansB, setAnswerB] = useState("");
  const [ansC, setAnswerC] = useState("");
  const [ansD, setAnswerD] = useState("");
  const [score, setScore] = useState(0);
  const [correctAns, setCorrectAns] = useState("");
  const apiKey = "6AAGQTFN01PTlQxNXsUitLUW0WqjeWmBOLymSuqO";
  // const limit = 5;
  // const category = "JavaScript";
  const [rightAns, setRightAns] = useState(true);
  // const [amount, setAmount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [gameStart, setGameStart] = useState(false);
  //const [checkWinner, setCheckWinner] = useState(false);

  //////////// //

  function getData(e) {
    setShowBtn(false);
    setText("Question#");
    setGameStart(true);
    e.preventDefault();
    setRightAns(true);
    setGameOver(false);
    setCount(() => count + 1);
    axios
      .get(
        `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&difficulty=easy&limit=10&tags=JavaScript`
      )
      .then((response) => {
        console.log(response.data[0]);

        setQuestion(response.data[0].question);
        setAnswerA(response.data[0].answers.answer_a);
        setAnswerB(response.data[0].answers.answer_b);
        setAnswerC(response.data[0].answers.answer_c);
        setAnswerD(response.data[0].answers.answer_d);
        setCorrectAns(response.data[0].correct_answers);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function checkAnswerA() {
    if (Object.values(correctAns)[0] === "true") {
      // setRightAns((current) => !current);
      setRightAns(false);
      setShowBtn(true);
      setScore(() => score + 1);
    } else {
      setRightAns(true);
      setGameOver(true);
    }
  }
  function checkAnswerB() {
    if (Object.values(correctAns)[1] === "true") {
      // setRightAns((current) => !current);
      setRightAns(false);
      setShowBtn(true);
      setScore(() => score + 1);
    } else {
      setRightAns(true);
      setGameOver(true);
    }
  }
  function checkAnswerC() {
    if (Object.values(correctAns)[2] === "true") {
      // setRightAns((current) => !current);
      setRightAns(false);
      setShowBtn(true);
      setScore(() => score + 1);
    } else {
      setRightAns(true);
      setGameOver(true);
    }
  }
  function checkAnswerD() {
    if (Object.values(correctAns)[3] === "true") {
      // setRightAns((current) => !current);
      setRightAns(false);
      setShowBtn(true);
      setScore(() => score + 1);
    } else {
      setRightAns(true);
      setGameOver(true);
    }
  }
  return (
    <>
      {/* //////////////////////////////////// */}
      {gameOver && count === 1 ? (
        <div className="gameOver">
          <Loser />
        </div>
      ) : null}
      {gameOver && count === 2 ? (
        <div className="gameOver">
          <Result amount={`1000`} />
        </div>
      ) : null}
      {gameOver && count === 3 ? (
        <div className="gameOver">
          <Result amount={`10,000`} />
        </div>
      ) : null}
      {gameOver && count === 4 ? (
        <div className="gameOver">
          <Result amount={`50,000`} />
        </div>
      ) : null}
      {gameOver && count === 5 ? (
        <div className="gameOver">
          <Result amount={`100,000`} />
        </div>
      ) : null}
      {gameOver && count === 6 ? (
        <div className="gameOver">
          <Result amount={`250,000`} />
        </div>
      ) : null}
      {gameOver && count === 7 ? (
        <div className="gameOver">
          <Result amount={`500,000`} />
        </div>
      ) : null}
      {gameOver && count === 8 ? (
        <div className="gameOver">
          <Result amount={`750,000`} />
        </div>
      ) : null}
      {gameOver && count === 9 ? (
        <div className="gameOver">
          <Result amount={`850,000`} />
        </div>
      ) : null}
      {gameOver && count === 10 ? (
        <div className="gameOver">
          <Result amount={`900,000`} />
        </div>
      ) : null}

      {/* //////////////////////////////////// */}
      {count <= 10 && gameOver === false ? (
        <>
          <div className="container">
            <div className="main-container container-1">
              {gameStart && (
                <>
                  <h3>
                    <div className="question">
                      {count}: {question}
                    </div>
                  </h3>
                  <ul className="list">
                    <div className="options-div">
                      <li>
                        <button className="options" onClick={checkAnswerA}>
                          <p>
                            <strong>a.</strong>&nbsp;
                          </p>
                          {ansA}
                        </button>
                      </li>
                      <li>
                        <button className="options" onClick={checkAnswerB}>
                          <p>
                            <strong>b.</strong>&nbsp;
                          </p>
                          {ansB}
                        </button>
                      </li>
                    </div>
                    <div className="options-div options-div-2">
                      {ansC === null ? null : (
                        <li>
                          <button className="options" onClick={checkAnswerC}>
                            <p>
                              <strong>c.</strong>&nbsp;
                            </p>
                            {ansC}
                          </button>
                        </li>
                      )}
                      {ansD === null ? null : (
                        <li>
                          <button className="options" onClick={checkAnswerD}>
                            <p>
                              <strong>d.</strong>&nbsp;
                            </p>{" "}
                            {ansD}
                          </button>
                        </li>
                      )}
                    </div>
                  </ul>
                </>
              )}
            </div>
            {/* ///////////////////////// */}
            <div className="container-2">
              {count === 0 ? (
                <button className="btn" onClick={getData}>
                  {count === 0 ? `Click to Start` : `Next Question`}
                </button>
              ) : null}
              {count > 0 && count <= 9 && showBtn ? (
                <button className="btn" onClick={getData}>
                  {count === 0 ? `Click to Start` : `Next Question`}
                </button>
              ) : null}
              {count > 9 && showBtn ? (
                <button className="btn" onClick={getData}>
                  {count > 9 ? `Congratulations!!` : `d`}
                </button>
              ) : null}
            </div>
            {/* //////////////////////////////////////// */}
            <div className="score-container container-3">
              {count === 0 ? (
                <Amounts amount={0} />
              ) : count === 1 && rightAns === false ? (
                <Amounts amount={`1,000`} />
              ) : count === 2 && rightAns === false ? (
                <Amounts amount={`10,000`} />
              ) : count === 2 && rightAns === true ? (
                <Amounts amount={`1,000`} />
              ) : count === 3 && rightAns === false ? (
                <Amounts amount={`50,000`} />
              ) : count === 3 && rightAns === true ? (
                <Amounts amount={`10,000`} />
              ) : count === 4 && rightAns === false ? (
                <Amounts amount={`100,000`} />
              ) : count === 4 && rightAns === true ? (
                <Amounts amount={`50,000`} />
              ) : count === 5 && rightAns === false ? (
                <Amounts amount={`250,000`} />
              ) : count === 5 && rightAns === true ? (
                <Amounts amount={`100,000`} />
              ) : count === 6 && rightAns === false ? (
                <Amounts amount={`500,000`} />
              ) : count === 6 && rightAns === true ? (
                <Amounts amount={`250,000`} />
              ) : count === 7 && rightAns === false ? (
                <Amounts amount={`750,000`} />
              ) : count === 7 && rightAns === true ? (
                <Amounts amount={`500,000`} />
              ) : count === 8 && rightAns === false ? (
                <Amounts amount={`850,000`} />
              ) : count === 8 && rightAns === true ? (
                <Amounts amount={`750,000`} />
              ) : count === 9 && rightAns === false ? (
                <Amounts amount={`900,000`} />
              ) : count === 9 && rightAns === true ? (
                <Amounts amount={`850,000`} />
              ) : count === 10 && rightAns === false ? (
                <Amounts amount={`1,000,000`} />
              ) : count === 10 && rightAns === true ? (
                <Amounts amount={`900,000`} />
              ) : (
                <Amounts amount={0} />
              )}

              {/* ////////////////////////////////////////////////////// */}
              <p
                className={`amount ${
                  count === 10 && rightAns === false ? "add-color" : ""
                }`}
              >
                $1,000,000
              </p>
              <p
                className={`amount ${
                  (count === 9 && rightAns === false) || count === 10
                    ? "add-color"
                    : ""
                }`}
              >
                $900,000
              </p>
              <p
                className={`amount ${
                  (count === 8 && rightAns === false) ||
                  count === 9 ||
                  count === 10
                    ? "add-color"
                    : ""
                }`}
              >
                $850,000
              </p>
              <p
                className={`amount ${
                  (count === 7 && rightAns === false) ||
                  count === 8 ||
                  count === 9 ||
                  count === 10
                    ? "add-color"
                    : ""
                }`}
              >
                $750,000
              </p>
              <p
                className={`amount ${
                  (count === 6 && rightAns === false) ||
                  count === 7 ||
                  count === 8 ||
                  count === 9 ||
                  count === 10
                    ? "add-color"
                    : ""
                }`}
              >
                $500,000
              </p>
              <p
                className={`amount ${
                  (count === 5 && rightAns === false) ||
                  count === 6 ||
                  count === 7 ||
                  count === 8 ||
                  count === 9 ||
                  count === 10
                    ? "add-color"
                    : ""
                }`}
              >
                $250,000
              </p>
              <p
                className={`amount ${
                  (count === 4 && rightAns === false) ||
                  count === 5 ||
                  count === 6 ||
                  count === 7 ||
                  count === 8 ||
                  count === 9 ||
                  count === 10
                    ? "add-color"
                    : ""
                }`}
              >
                $100,000
              </p>
              <p
                className={`amount ${
                  (count === 3 && rightAns === false) ||
                  count === 4 ||
                  count === 5 ||
                  count === 6 ||
                  count === 7 ||
                  count === 8 ||
                  count === 9 ||
                  count === 10
                    ? "add-color"
                    : ""
                }`}
              >
                $50,000
              </p>
              <p
                className={`amount ${
                  (count === 2 && rightAns === false) ||
                  count === 3 ||
                  count === 4 ||
                  count === 5 ||
                  count === 6 ||
                  count === 7 ||
                  count === 8 ||
                  count === 9 ||
                  count === 10
                    ? "add-color"
                    : ""
                }`}
              >
                $10,000
              </p>
              <p
                className={`amount ${
                  (count === 1 && rightAns === false) ||
                  count === 2 ||
                  count === 3 ||
                  count === 4 ||
                  count === 5 ||
                  count === 6 ||
                  count === 7 ||
                  count === 8 ||
                  count === 9 ||
                  count === 10
                    ? "add-color"
                    : ""
                }`}
              >
                $1,000
              </p>
            </div>
          </div>
        </>
      ) : null}

      {count > 10 && gameOver === false ? (
        <div className="millionare-div">
          <Winner />
        </div>
      ) : null}
    </>
  );
}

export default App;
