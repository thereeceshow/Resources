import React from 'react';
import './App.css';
import Navbar from "./Navbar"
import ImageGallery from './ImageGallery';

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
					<p>
						{this.state.currentPage}
					</p>
				</header>
				<div className="container">
					{
						this.state.currentPage === "Memes" ?
							<ImageGallery /> :
							null
					}
				</div>

			</div>
		)
	}
}

export default App;