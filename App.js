import './App.css'; 
import React from 'react'; 
import Login from './login'; 
import Page2 from './page2';
import Directory from './directory';
import Operator from './operator';
import Progress from './progress';
import RoomiePage from './roomiePage';
import RoomieEmail from './RoomieEmail';
//react declaration 
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);

    this.state = {
      curPage: 1
    }
  }

  nextPage(numPages) {
    console.log(numPages)
    console.log(this.state.curPage)
    this.setState({curPage : this.state.curPage + numPages}, () => console.log(this.state.curPage));
  }

  previousPage(numPages) {
    this.setState({curPage : this.state.curPage - numPages});
  }

  render() {

    if (this.state.curPage === 1) {
      return (
        <div className='App'>
          <Login nextPage = {this.nextPage}/>
        </div>
      )
    } else if (this.state.curPage === 2) {
      return (
        <div className='App'>
          <Directory nextPage = {this.nextPage}/>
        </div>
      )
    }
    else if (this.state.curPage === 3) {
      return (
        <div className='App'>
          <Page2 previousPage = {this.previousPage} nextPage = {this.nextPage}/>
        </div>
      )
    }
    else if (this.state.curPage === 4) {
      return (
        <div className='App'>
          <Operator nextPage = {this.nextPage}/>
        </div>
      )
    }
    else if (this.state.curPage === 5) {
      return (
        <div className='App'>
          <Progress previousPage = {this.previousPage}/>
        </div>
      )
    }
    else if (this.state.curPage === 6) {
      return (
        <div className='App'>
          <RoomiePage nextPage = {this.nextPage}/>
        </div>
      )
    }
    else if (this.state.curPage === 7) {
      return (
        <div className='App'>
          <RoomieEmail nextPage = {this.nextPage}/>
        </div>
      )
    }
  }
  
}

export default App; 