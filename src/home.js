import './home.css';
import DashboardButton from './components/dashboardbutton/dbButton';
import React, { useState } from 'react';

function Home() {
  
  const [state, currState] = useState(0);

  const changeState = () => {
    if(state === 0) {
      currState(1);
      return;
    }
    currState(0);
  }

  if (state === 1) {
    return (
      <div>
        <div>
          This is another page
        </div>
      </div>
    )
  }
  return (
    <div className="Home">
      <div className="FrontMessage">
        Lets Get Coding!
      </div>
      <DashboardButton clickHandler={changeState}/>
    </div>
  );



}



export default Home;
