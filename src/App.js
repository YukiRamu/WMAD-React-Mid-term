import './App.css';
import "./component/Home/Home";
import "./component/LogIn/LogIn";
import FetchAPI from './component/API/FetchAPI'

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
        </header>
      </div>
    </>
  );
};

export default App;
