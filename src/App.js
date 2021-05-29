import './App.css';
import "./component/Home/Home";
import "./component/LogIn/LogIn";
import FetchAPI from './component/API/FetchAPI';
import CheckOut from './component/CheckOut/CheckOut';

const App = () => {
  return (
    <>
      <div>
        <nav>
          {/* React Router for the navigation bar will be added here */}
        </nav>
      </div>


      <div className="App">
        <header className="App-header">
          <h1>React Mid Term</h1>
          <FetchAPI/>
          {/* <CheckOut/> */}
        </header>
      </div>
    </>
  );
};

export default App;
