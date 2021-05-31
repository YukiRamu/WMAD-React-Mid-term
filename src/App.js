import './App.css';
import "./component/Home/Home";
import "./component/LogIn/LogIn";
import Footer from "./component/Layout/Footer"

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
        </header>
        <Footer/>
      </div>
    </>
  );
};

export default App;
