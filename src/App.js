import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import JobBoardComponent from './components/JobBoardComponent';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import JobPost from './components/JobPost';
import CreatePost from './components/CreatePost';
import Home from './components/Home';


function App() {

  return (
    // <div className='App  w-full h-full'>
    <BrowserRouter>
      <div className="App">
        <div className="sticky top-0 ..." >
          <Navbar />
        </div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/home' component={Home}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup'  component={SignUp}/>
          <Route path='/jobPost' component={JobPost}/>
          <Route path='/createPost' component={CreatePost}/>
        </Switch>
      </div>  
     </BrowserRouter>); 
  
}
export default App;