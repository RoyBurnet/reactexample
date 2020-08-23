import React from 'react';

function App() {
  const handleClick = () => alert('clicked');

  return (
    <div className="App">
      <Person handleClick={handleClick} name="Randy" occupation="Developer" />
    </div>
  );
}

const Person = (props) => {
  const { handleClick, name, occupation } = props;
  
  return (
    <div>
      <h1>{name}</h1>
      <h2>{occupation}</h2>
      <p onClick={handleClick}>Click me</p>
    </div>
  );
};

export default App;
