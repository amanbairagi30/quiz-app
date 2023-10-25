import React, { useState } from 'react'
import { QuizData } from '../questions/quizdata';

const QuizPage = () => {

  const letters = ["A", "B", "C", "D"];

  const [currQuest, setCurrQuest] = useState(0);
  const [score, setScore] = useState(0);
  const [showAns, setShowAns] = useState(false)

  const handleSelectedOption = (index) => {
    if (QuizData[currQuest].answer == index + 1) {
      setScore(score + 1);
    }
  
    if (currQuest === QuizData.length - 1) {
      setShowAns(true);
    } else {
      setCurrQuest(currQuest + 1);
    }
  }

  const updateNext = () => {
    if (currQuest <= QuizData.length - 1)
    {
      setCurrQuest(currQuest + 1);

    } else{
      alert()
      setShowAns(true);
    }

  }

  return (
    <>
      <main className='quiz-box'>
        {
          showAns ? (

            <>
              <div className='result'>
              <div className='totalQuest'>
                  <p>Total Question : {QuizData.length}</p>
                  
                </div>
                <div className='score'>
                  <p>Score : {score} points</p>
                  
                </div>

                
              </div>
            </>
          ) :
            (
              <>
                <div className='question'>

                  <div className='qno'>Question {currQuest + 1} <span>Score : {score}</span></div>
                  <p>{QuizData[currQuest].question}</p>
                </div>



                <div className='options'>
                  {
                    QuizData[currQuest].options.map((item, index) => {
                      console.log(item)
                      return (
                        <>
                          <div className='feild'>
                            <div className='letter'>{letters[index]}</div>
                            <div onClick={() => handleSelectedOption(index)} className='feild-text'>{item}</div>
                          </div>
                        </>
                      );
                    })
                  }


                </div>


                <div className='buttons'>
                  <button disabled={!currQuest} onClick={() => setCurrQuest(currQuest - 1)} className='prev'>Prev</button>
                  <button onClick={updateNext} className='next'>{QuizData.length == currQuest + 1 ? "Submit" : "Next"}</button>
                </div>
              </>
            )
        }

      </main>
    </>
  )
}

export default QuizPage
