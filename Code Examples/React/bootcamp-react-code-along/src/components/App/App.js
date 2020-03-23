import React from 'react';
import './App.css';
import Navbar from "../Navbar"
import ImageGallery from '../ImageGallery';
import Blog from '../Blog';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { currentPage: "Blog" }
		this.updatePage = this.updatePage.bind(this)
	}
	async updatePage(newPage) {
		// console.log("in the update page function", newPage)
		// this.setState({ currentPage: newPage })
		// this.setState(function someFunction(param){
		// 	return { currentPage: newPage }
		// })
		await this.setState((prevState) => {
			// console.log(`in the set state method, 
			// this is what the previous state is:`, prevState)
			return { currentPage: newPage }
		})
		// console.log("after set state:", this.state)
	}
	render() {
		return (
			<div className="App">
				<Navbar
					newNumber={95}
					updatePage={this.updatePage}
				/>
				<header className="App-header">
					<p className={
						`${this.state.currentPage === "Home" ? "display-4" : "fancyStyle"}
						 class1 class 4 class73`
					}
					>
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