// Create Container for the posts
// Use React Class Component
// show something on the page first
// Render Blog Posts
//   	use bootstrap
// convert the date to something readable
// Use lifecycle methods
//     showing the date when the post was created

import React from 'react'
import journalData from "../data/journal.json"

class Blog extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentTime: null,
			blogPosts: null,
			title: "",
			content: ""
		}
		this.onSubmit = this.onSubmit.bind(this)
		this.onChange = this.onChange.bind(this)
	}

	async componentDidMount() {
		console.log("the component did mount")
		await this.setState({
			currentTime: new Date(),
			blogPosts: journalData
		})
		console.log("the component set the blog state:", this.state)

		// window.localStorage.setItem('myCat', 'Tom');
		// const name = window.localStorage.getItem('name');

		// const storage = window.localStorage

		// console.log("localstorage is:", storage, name)

		// window.localStorage.removeItem('myCat');
		// window.localStorage.clear();
		// window.localStorage.setItem('state', JSON.stringify(this.state));
	}
	onSubmit(e) {
		e.preventDefault()

		//update the blog posts to contain this new entry
		const newBlogPost = {
			date: new Date().toISOString(),
			title: this.state.title,
			paragraphs: [this.state.content]
		}
		console.log("in the submit button:", newBlogPost)

		this.setState((prevState) => {
			console.log("prevstate:", prevState.blogPosts)
			console.log("destructured prevstate:", ...prevState.blogPosts)
			console.log("restructured destructured prevstate:", [...prevState.blogPosts])

			return { blogPosts: [...prevState.blogPosts, newBlogPost] }
		})


	}
	onChange(e) {
		e.preventDefault()
		// console.log("in the on change function", e.target.id)
		//update the state to keep track of the title and content

		if (e.target.id === "title") {
			this.setState({ title: e.target.value })
		}
		else if (e.target.id === "content") {
			this.setState({ content: e.target.value })
		}

	}



	render() {
		// console.log("the date is:", this.state.currentTime)
		// console.log(journalData)

		function mappedPTags(input) {
			return input.map((item, index) => {
				return <p key={index}>{item}</p>
			})
		}
		var blogPosts = ""
		if (this.state.blogPosts) {
			blogPosts = this.state.blogPosts
				.sort((a, b) => {
					a = new Date(a.date);
					b = new Date(b.date);
					return a > b ? -1 : a < b ? 1 : 0;
				})
				.map((item, index) => {
					const prettyDate = new Date(item.date)
					const difference = Math.floor(((this.state.currentTime - prettyDate) / 1000 / 60 / 60 / 24) << 0);

					return (
						<div key={index} className="border mb-5 p-4">
							<h1>{item.title}</h1>
							<h5>{difference} day{difference === 1 ? "" : `s`} ago</h5>
							<hr />
							{mappedPTags(item.paragraphs)}
						</div>
					)
				})
		}
		return (
			<React.Fragment>
				<div className="form-entry-field">
					<form onClick={this.onSubmit}>
						<label>Title</label>
						<input type="text" id="title" onChange={this.onChange}></input>
						<label>Content</label>
						<input type="text" id="content" onChange={this.onChange}></input>
						<input type="submit" value="Submit" />
					</form>
				</div>
				<div className="text-left mx-5 mt-5">
					{blogPosts}
				</div>
			</React.Fragment>
		)
	}
}

export default Blog