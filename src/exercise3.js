import React from 'react';
import EngineeringTopics from './Engineeringtopics'; // Import the EngineeringTopics component
import './App.css';

function exercise3() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Engineering Topics</h1>
        <EngineeringTopics /> {/* Render the EngineeringTopics component */}
      </header>
    </div>
  );
}

export default exercise3;
