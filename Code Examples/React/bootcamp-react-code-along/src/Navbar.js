import React from "react"

class Navbar extends React.Component {
	constructor(props) {
		super(props)
		this.navbarLinks = [
			"Blog",
			"About",
			"Home",
			"Projects",
			"Memes"]
	}

	render() {
		const navLinksinHTML = this.navbarLinks.map((link, index) => {
			return (
				<React.Fragment key={index}>
					<a
						onClick={() => this.props.updatePage(link)}
						className="pl-2"
						href="#"

					>
						{link}
					</a>
					{this.navbarLinks.length-1 === index ? null : (<p>-</p>)}
				</React.Fragment>
			)
		})
		return (
			<h2 className="d-inline-flex">
				{navLinksinHTML}
			</h2>
		)
	}
}

export default Navbar