import React from 'react';
import './App.css';
import Navbar from "../Navbar"
import ImageGallery from '../ImageGallery';
import Blog from '../Blog';

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

				{
					this.state.currentPage === "Blog" ?
						<Blog />
						:
						null
				}
				{
					this.state.currentPage === "Memes" ?
						<div className="container" id="meme-image-gallery-view">
							<ImageGallery />
						</div>
						:
						null
				}
			</div>
		)
	}
}

export default App;