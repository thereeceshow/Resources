// Create Container for the posts
// Use React Class Component
// show something on the page first
// Render Blog Posts
//   	use bootstrap
// convert the date to something readable
// Use lifecycle methods
//     showing the date when the post was created

import React, { Component } from 'react'
import journalData from "../data/journal.json"


class Blog extends Component {
	constructor(props) {
		super(props)
		this.state = { currentTime: null }
	}

	componentDidMount() {
		console.log("the component did mount")
		this.setState({
			currentTime: new Date()
		})

		window.localStorage.setItem('myCat', 'Tom');
		const name = window.localStorage.getItem('name');

		const storage = window.localStorage

		console.log("localstorage is:", storage, name)

		window.localStorage.removeItem('myCat');
		window.localStorage.clear();
		window.localStorage.setItem('state', JSON.stringify(this.state));
	}

	render() {
		console.log("the date is:", this.state.currentTime)
		console.log(journalData)

		function mappedPTags(input) {
			return input.map((item, index) => {
				return <p key={index}>{item}</p>
			})
		}

		const blogPosts = journalData
			.sort((a, b) => {
				a = new Date(a.date);
				b = new Date(b.date);
				return a > b ? -1 : a < b ? 1 : 0;
			})
			.map((item, index) => {
				const prettyDate = new Date(item.date)
				const difference = Math.floor(((this.state.currentTime - prettyDate) / 1000 / 60 / 60 / 24) << 0);
				console.log(difference)

				return (
					<div key={index} className="border mb-5 p-4">
						<h1>{item.title}</h1>
						<h5>{difference} day{difference === 1 ? "" : `s`} ago</h5>
						<hr />
						{mappedPTags(item.paragraphs)}
					</div>
				)
			})
		return (
			<div className="text-left mx-5 mt-5">
				{blogPosts}
			</div>
		)
	}
}

export default Blog