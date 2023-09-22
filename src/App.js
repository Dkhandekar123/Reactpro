// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Sidebar from './components/Sidebar';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>  
    <div>
    <Sidebar></Sidebar>
    </div>
      
     <Navbar title="TextUtils" home="Home" />
     <div className="container my-3">
     <TextForm heading="Enter The Text To Analyze.."/>
     </div>
    </>
  );
}

export default App;
