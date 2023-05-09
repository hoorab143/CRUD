// import logo from './logo.svg';
// import './App.css';
// import ReactSx from 'react';
import {Home} from './components/Home';
import {EditUser} from './components/EditUser';
import {AddUser} from './components/AddUser';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <div className="App" style={{maxWidth:"30rem", margin:"4rem auto"}}>
      <GlobalProvider>
      <Router>
      {/* <h1>App</h1> */}
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/edit/:id' element={<EditUser/>} />
          <Route path='/add' element={<AddUser/>} />
        </Routes>
      </Router> 
      </GlobalProvider>
      
      {/* <Home />
      <EditUser />
      <AddUser /> */}
    </div>
  );
}

export default App;
