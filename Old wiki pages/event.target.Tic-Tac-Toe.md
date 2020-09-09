### Description

Create a webpage that recreates the childhood classic game, tic-tac-toe, in JavaScript.

See [https://en.wikipedia.org/wiki/Tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe) for more information.

For this project we will be using JavaScript to dynamically render elements, keep track of board status, and display win conditions and state

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

By default, the app should do the following

1. Use the symbols X and O.
2. On each players turn, that player places one of their symbols on an
   unoccupied space by clicking.
3. The game continues until one player places three symbols in a
   straight line (horizontal, vertical, or diagonal) and wins or there are no
   remaining available spaces and it is a draw.

#### Wireframe

![wireframe-js-tic-tac-toe.png](https://raw.githubusercontent.com/bootcamp-students/Resources/master/images/wireframes/tic-tac-toe.png)

#### Tech Stack

1. HTML
2. CSS
3. Bootstrap
4. JS

### Process

#### Setup

1. Plan out and pseudocode your project - see [example kanban](https://GitHub.com/bootcamp-students/Resources/projects/1)
2. [Create GitHub repo (either online or locally)](https://GitHub.com/bootcamp-students/Resources/wiki/Git-Instructions), for example: `my-app`
3. Create necessary files for application and view in VS Code
4. Import and route necessary css/js files (E.g. Bootstrap)
5. Save all and create your first commit to `master`, **then** switch to a `dev` branch

#### Application File Structure

```raw
repo/
    index.html - main page
    css/ - folder to contain CSS files
        style.css - main stylesheet
    img/ - folder to contain any images
    js/ - folder to contain JavaScript files
        main.js - main JavaScript file
    README.md - any important information
    .gitignore - file that omits any directory/file from being tracked
```

Additional pages will be relative to the index.html file.

It is okay if your project has more files and directories, but you at least need the ones listed above.

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
4. Post a link to your GitHub Pages Site to the Projects Slack channel

---

### Requirements

To complete the assignment, you must complete the following:

1. The board should be dynamically rendered
2. Render as much HTML in the JS, (try to codegolf the HTML file)
3. The game should let the players know who's turn it is
4. Game tiles should only be clickable once
5. The game should display who wins the game if someone wins, otherwise say that the game resulted in a tie
6. Include a Restart Game button that does not refresh the page, only reset the game

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Create a pain and gain list for a potential MVP
- Allow players to enter their names.
- Keep track of number of games won by X and O.
- Add a link to rules, display in a modal.
- [Create an AI that can "learn" how to play to win](https://www.youtube.com/watch?v=R9c-_neaxeU)
- Recreate Chess.

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)
- [W3 Schools - Learn JS](https://www.w3schools.com/js/)

For more information about games and code, see these articles:

- [AlphaGo - Netflix](https://www.netflix.com/title/80190844?s=i&trkid=13747225)
- [Are Computers Playing Games With Us?](https://www.huffpost.com/entry/computer-game-intelligence_b_1396377)
