import React from 'react';
import NavButton from './NavBarButton';
import styles from './NavBar.module.css';

const NavBar = ( { changeDisplay, changeRover }) => {
  //Header Bar to select Rover, Browse page, Liked Page

  let handleViewClick = (e) => {
    console.log('clicked a button', e.target.value);
    changeDisplay(e.target.value);
  };

  let handleRoverClick = (e) => {
    console.log('clicked a button', e.target.value);
    changeRover(e.target.value);
  };

  return (
    <div className='header'>
      <h1>Mars Rover Feed</h1>

      <div className={styles.butt}>
        <h4>Browse</h4>
        <button value='browse' onClick={handleViewClick} className="navButton">New Photos</button>
        <button value='liked' onClick={handleViewClick} className="navButton">Liked Images</button>
      </div>

      <div className='butt'>
        <h4>Choose a Rover</h4>
        <button value='curiosity' onClick={handleRoverClick} className="navButton">Curiosity</button>
        <button value='opportunity' onClick={handleRoverClick} className="navButton">Opportunity</button>
        <button value='spirit' onClick={handleRoverClick} className="navButton">Spirit</button>
      </div >
    </div>
  );
};

export default NavBar;




