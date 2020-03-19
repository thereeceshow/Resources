import React from 'react'

function Image(props) {
	console.log(props)
	return (
		<img
			onClick={() => {
				console.log(props.index)
				props.clicker(props.index)
			}}
			className="img-fluid"
			src={props.source}
			alt={props.alt}
		/>
	)
}

class ImageGallery extends React.Component {
	constructor(props) {
		super(props)
		this.state = { current_index: 0 }
		this.img_arr = [
			"galaxy_brain.jpg",
			"git_push.jpg",
			"node_meme.jpg",
			"regex.jpg",
			"stack_overflow.jpg"
		]
		this.updateImageIndex = this.updateImageIndex.bind(this)
	}

	updateImageIndex(newIndex) {
		this.setState({ current_index: newIndex })
	}

	render() {

		const mappedImages = this.img_arr.map((image, index) => {
			return (
				<div className="col-2" key={index}>
					<Image
						clicker={this.updateImageIndex}
						index={index}
						source={`./images/${image}`}
						alt={image}
					/>
				</div>
			)
		})

		return (
			<>
				<div className="row">
					<div className="col-8 offset-2">
						<Image
							source={`./images/${this.img_arr[this.state.current_index]}`}
							alt="big image"
						/>
					</div>
				</div>
				<div className="row">
					{mappedImages}
				</div>
			</>
		)
	}
}


// function ImageGallery() {
// 	const img_arr = [
// 		"galaxy_brain.jpg",
// 		"git_push.jpg",
// 		"node_meme.jpg",
// 		"regex.jpg",
// 		"stack_overflow.jpg"
// 	]

// 	const mappedImages = img_arr.map((image, index) => {
// 		return (
// 			<div className="col-2" key={index}>
// 				<Image
// 					source={`./images/${image}`}
// 					alt={image}
// 				/>
// 			</div>
// 		)
// 	})

// 	return (
// 		<>
// 			<div className="row">
// 				<div className="col-8 offset-2">
// 					<Image
// 						source={`./images/${img_arr[0]}`}
// 						alt="big image"
// 					/>
// 				</div>
// 			</div>
// 			<div className="row">
// 				{mappedImages}
// 			</div>
// 		</>
// 	)
// }


export default ImageGallery