import React from "react"

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.navbarLinks = ["Blog",
            "About",
            "Home",
            "Projects",
            "Coding Memes"]
    }

    render() {
        const navLinksinHTML = this.navbarLinks.map((link, index) => {
            return (
                <a
                    onClick={() => this.props.updatePage(link)}
                    className="pl-2"
                    href="#"
                    key={index}
                >
                    {link}
                </a>
            )
        })
        return (
            <h1>
                {navLinksinHTML}
            </h1>
        )
    }
}

export default Navbar