### Description

Create a webpage that hosts an interactive sliding puzzle

For this project we will be using react.js to dynamically parse the image, render the puzzle pieces in real time, and keep track of puzzle state

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/Example-Project-Instructions)
- [Description](#Description)
- [Table of Contents](#table-of-contents)
- [MVP (Minimum Viable Product)](#MVP)
  - [Wireframe](#Wireframe)
  - [Tech Stack](#Tech-Stack)
- [Process](#process)
  - [Setup](#Setup)
  - [Application File Structure](#Application-File-Structure)
  - [Develop](#Develop)
  - [Deploy](#Deploy)
- [Requirements](#Requirements)
  - [Additional Requirements](#Additional-Requirements)
  - [Stretch Goals](#Stretch-Goals)
- [Additional Resources](#Additional-Resources)
<!--te-->

### MVP

By default, the app should allow a user to click on a tile and it move in a direction, until the puzzle reaches a win condition.

#### Wireframe

![wireframe](https://raw.githubusercontent.com/bootcamp-students/Resources/master/images/wireframes/sliding-puzzle.jpg)

#### Tech Stack

1. HTML
2. CSS
3. Bootstrap
4. JS
5. React

### Process

#### Setup

1. Plan out and pseudocode your project - see [example kanban](https://GitHub.com/bootcamp-students/Resources/projects/6)
2. Create GitHub repo [**Locally**](https://GitHub.com/bootcamp-students/Resources/wiki/Git-Instructions) via `npx create-react-app`
3. NPM install and import/route necessary css/js libraries (E.g. Bootstrap)
4. Save all and create your first commit to `master`, **then** switch to a dev branch

#### Application File Structure

See [create-react-app.dev/folder-structure](https://create-react-app.dev/docs/folder-structure)

#### Develop

1. Create a `dev` branch to commit your code to
2. Add content and elements to your website
3. View changes and test locally
4. Save often, and commit to your development branch on GitHub when important changes happen
5. Push your commits to GitHub remote
6. For bug fixes, refactored code, and feature branches, you must create a branch off of `dev` onto a `new-feature` branch and create a Pull Request into dev branch when complete

#### Deploy

1. Create a Pull Request from `dev` into `master`
2. Confirm code is up to date and works correctly
3. Link your `username.github.io` to point to your new project or add it to an existing portfolio in settings
4. Push your code from local to either GitHub Pages or Firebase and save the hosting link in your repo description
5. Post a link to your Repo to the Projects Slack channel

---

### Requirements

To complete the assignment, you must complete the following:

1. Pass as input, any image for the puzzle app to upload to the site. This can be done with a drag and drop, or a "choose file" option, and should be able to happen at any time, not just once
2. Dynamically parse the uploaded image into a 4 x 4 equal sized square grid leaving one corner out.
3. Have a button that "shuffles" the board and that can be pressed at any time. This button should not accidentally solve the board.
4. Be able to click on any piece and if it is able to be moved into a new spot, move that piece, otherwise, do nothing.
5. If you click the final puzzle piece into place, the game should be able to display "winner" and let the user play again _and also_ allow the user to continue clicking the puzzle pieces to let the user shuffle it themselves.
6. All image parsing must be done dynamically, including the win conditions. No hard coding.
7. Picture must be different on each tile, but only ever upload one image in the [public folder](https://create-react-app.dev/docs/using-the-public-folder), not a photoshopped or cropped image

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Add personas and user stories to create an Interview with a user of your product for an MVP
- Add arrow key integration instead of clicking the tile
- Add google photos / giphy integration to let a user select an image via search within app
- Fade the board to all black tiles after 5 seconds after shuffle to work as a memory game
- Write [React Tests](https://reactjs.org/docs/testing.html) with [create-react-app](https://create-react-app.dev/docs/running-tests)
- Show css transition animation when you click the tile / shuffle the board
- Allow the [puzzle to be any dimensions based on the aspect ratio of the image (6x6, 5x4, 2x10, etc)](https://malaysia.timbangharga.com/cf/700/cdn/HTB17dx8m4PI8KJjSspfq6ACFXXaB/Tetris-worlds-Sliding-Puzzle-Colorful-Wooden-Tangram-Brain-Teaser-Puzzle-Toys-Game-for-Baby-Child-Kids.jpg)
- Allow the [tiles to be any dimension (1x2, L, etc)](https://www.michaelfogleman.com/rush/)
- Allow the [tiles to be any shape (triangle, hexagon, etc)](https://wittingen-puzzels.jimdo.com/)
- Make [2048](https://play2048.co/)
- Make a [Rubik's Cube](https://www.google.com/logos/2014/rubiks/iframe/index.html)

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)
- [W3 Schools - Learn JS](https://www.w3schools.com/js/)

For more information about **_doing something_**, see these articles:

For more information about images and state, see these articles:

- [create-react-app add image](https://create-react-app.dev/docs/adding-images-fonts-and-files)
- [Image Upload](https://www.w3schools.com/jsref/dom_obj_fileupload.asp)
- [Drag and Drop](https://css-tricks.com/drag-and-drop-file-uploading/)
- [Vanilla JS Image Crop](https://thisisabdus.dev/how-to-crop-images-using-vanilla-javascript)
- [Handling Events](https://eloquentjavascript.net/15_event.html)
