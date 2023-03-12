import React, {memo} from "react";
import './App.scss'
import memory from './assets/images/icon-memory.svg'
import reaction from './assets/images/icon-reaction.svg'
import verbal from './assets/images/icon-verbal.svg'
import visual from './assets/images/icon-visual.svg'


const data = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": reaction,
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": memory,
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": verbal,
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": visual
  }
];

function App() {
  return (
    <div className="App">
      <div className="root">
        <div className="content">
          <div className="content-left">
            <h3 className="content__title content-left__title">Your Result</h3>
            <div className="content-left__coal">
              <p className="content-left__coal-title">76</p>
              <p className="">of 100</p>
            </div>
            <div className="content-left__info">
              <h3>Great</h3>
              <p>You scored higger than 65% of the people who have taken these tests.</p>
            </div>
          </div>
          <div className="content-right">
            <h3 className="content__title">Summary</h3>
            <div className="info">
              {data.map((item,index) =>
                <div key={index} className="info-card">
                  <div>
                    <img src={item.icon} alt={item.category} />
                    <p>{item.category}</p>
                  </div>
                  <div className="info-card-score">
                    <p>{item.score } <span> / 100</span> </p>
                  </div>
                </div>
              )}
            </div>
            <button type="button" className="btn btn-primary">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
