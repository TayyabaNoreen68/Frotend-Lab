import './App.css';
//import About from './components/About';

import Navbar from './components/Navbar';
import React,{ useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route

// }from "react-router-dom";






function App(){
  const[mode,setMode]=useState('light');//weather dark mode is enable or not 
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
 setAlert({
  msg:message,
  type:type
 })
 setTimeout(()=>
 {
setAlert(null);
 },1500);
  }
  const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = '#030d34';
showAlert("Dark mode has bee enable","success")
document.title ='TextUtils-DarkMode';
//setInterval (() =>{
//document.title ='TextUtils is a Amazing Mode';
//}, 2000);
   
 // setInterval (() =>{
//document.title ='Install TextUtils Now';
//}, 1500);
  
}
  else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("light mode has bee enable","success");
    document.title ='TextUtils-LightMode';
  }
}
  return (
    <>
   {/*<Navbar title="TextUtils" aboutText="About TextUtils"/>*/}
   {/*<Navbar/>*/}
    {/*<Router>*/}
 <Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode} />  
 <Alert alert={alert}/>
  <div className="container my-3"> 
 {/*</Switch>*/}
  {/*<Route exact path="/about"> 
  <About/> 
  </Route>
   <Route exact path="/"> */ }
   <TextForm showAlert={showAlert} heading="Enter the text to analyze below"mode={mode}/>
  { /*</Route>
   
    </Switch>*/}
    </div>
 {/*<Router/>
    <About/>*/}
   </>
  );
}

export default App;  