import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date()
  let currentYear = date.getFullYear()
  let isLoggedIn = true;

  function checkLogin(isLoggedIn){
    return isLoggedIn ? <p>Welcome back!</p> : <p>Please log in.</p>;
  }

  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      {checkLogin(isLoggedIn)}
    </div>
  );
}

export default App;
