import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const Statistic = (props) => (
  
  <>
    
  <p>
    
  {props.text}&nbsp;{props.count}
  </p>
          

  
  </>
  
  )

  const FeedbackBtn = (props) => (
  
    <>
      
   
            
    <button onClick={props.btnclick}>{props.text} </button>&nbsp;
    
    </>
    
    )
     


const Statistics = (props) => (
  
<>
  
        <Statistic text="Good" count={props.fbckGood}  />

        <Statistic text="Neutral" count={props.fbckNeutral}  />
        
        <Statistic text="Bad" count={props.fbckBad}  />

        <Statistic text="All" count={props.fbckGood + props.fbckNeutral + props.fbckBad}  />
  
        <Statistic text="Average" count={(props.fbckGood + props.fbckNeutral + props.fbckBad)/3}  />

        <Statistic text="Positive" count={props.fbckGood/(props.fbckGood + props.fbckNeutral + props.fbckBad)}  />


</>

)


const App = props => {


    const [good, addFeedbackGood] = useState(0)
    const [neutral, addFeedbackNeutral] = useState(0)
    const [bad, addFeedbackBad] = useState(0)


  const incrementFeedbackGood = newFeedback => {

    addFeedbackGood(newFeedback)

  }

  const incrementFeedbackNeutral = newFeedback => {

    addFeedbackNeutral(newFeedback)

  }

  const incrementFeedbackBad = newFeedback => {

    addFeedbackBad(newFeedback)

  }

  var statistics;
  if (good > 0 || neutral > 0 || bad > 0) {
    statistics = <Statistics fbckGood={good} fbckNeutral={neutral} fbckBad={bad} />;
  } else {
    statistics =  <p>Feedback has not been given yet</p>;
  }


  return (
    <div>
      
      <br/>
      <br/>

<h1>Give Your feedback</h1>

      <br/>
   
 

     

      <FeedbackBtn btnclick={() => incrementFeedbackGood(good+1)} text="Good" />

      <FeedbackBtn btnclick={() => incrementFeedbackNeutral(neutral+1)} text="Neutral" />

      <FeedbackBtn btnclick={() => incrementFeedbackBad(bad+1)} text="Bad" />



      <br/>
      <br/>
<h1> Feedback statistics</h1>


{statistics} 




    </div>



  )
}


ReactDOM.render(<App />, document.getElementById('root'));

