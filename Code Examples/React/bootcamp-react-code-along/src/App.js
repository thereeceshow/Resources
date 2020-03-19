import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { currentPage: "Home" }
    this.updatePage = this.updatePage.bind(this)
  }
  updatePage(newPage) {
    console.log("in the update page function", newPage)
    this.setState({ currentPage: newPage })
  }

  render() {
    return (
      <div className="App">
        <Navbar
          newNumber={95}
          updatePage={this.updatePage}
        />

        <header className="App-header">
          <img src="./images/cake.jpg" className="img-fluid" alt="logo" />
          <p>
            {this.state.currentPage}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }

}

export default App;
