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
import Landing from './components/LandingPage';
import LandingPage from './components/LandingPage';
import MyPosts from './components/MyPosts';
import EditPost from './components/EditPost';
import Profile from './components/Profile';
import AppSettings from './components/AppSettings';
import Partners from './components/Partners';
import AddCompany from './components/AddCompany';
import EditCompany from './components/EditCompany';
import RecoverPassword from './components/RecoverPassord';

function App() {

  return (
    // <div className='App  w-full h-full'>
    <BrowserRouter>
      <div className="App">
        <header className="sticky top-0 ... z-50" >
          <Navbar />
        </header>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup'  component={SignUp}/>
          <Route path='/myPosts' component={MyPosts}/>
          <Route path='/editPost' component={EditPost}/>
          <Route path='/profile' component={Profile} />
          <Route path='/post/:id' component={JobPost}/>
          <Route path='/createPost' component={CreatePost}/>
          <Route path='/settings' component={AppSettings}/>
          <Route path='/partners' component={Partners}/>
          <Route path='/addCompany' component={AddCompany}/>
          <Route path='/editCompany' component={EditCompany}/>
          <Route path='/recoverPassword' component={RecoverPassword}/>
        </Switch>
      </div>  
     </BrowserRouter>); 
  
}
export default App;