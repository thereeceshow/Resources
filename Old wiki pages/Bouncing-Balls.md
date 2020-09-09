### Description

Create a webpage that simulates bouncing balls on an HTML canvas using physics, math, and JavaScript Objects and Classes

For this project we will be using MDN's [Bouncing Ball Tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_building_practice) and expanding from their baseline project

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

By default, the app should let a user control an evil circle and visually see changes to the bouncing balls

#### Wireframe

![wireframe](https://mdn.mozillademos.org/files/13875/bouncing-evil-circle.png)

This is what the final product should look like [in motion](https://mdn.GitHub.io/learning-area/javascript/oojs/assessment/)

#### Tech Stack

1. HTML
2. CSS
3. JS

### Process

#### Setup

1. Plan out and pseudocode your project
2. [Create GitHub repo (either online or locally)](https://GitHub.com/bootcamp-students/Resources/wiki/Git-Instructions), for example: `my-app`
3. Create necessary files for application and view in VS Code
4. Import and route necessary css/js files
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

1. Complete all eight (8) steps from the MDN [instructions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)
   1. It is easy to just copy their example code, try as hard as you can to type everything on your own, it will benefit you in the long run.
2. Complete as many [stretch goals](#stretch-goals) as you can; they are not in any particular order.

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Change the colors for each item type so it's easier to look and see what everything is instead of just random colors
- Instead of changing the color, try changing the size when 2 balls touch each other
- Instead of changing the color, try showing a counter of how many times a specific ball has touched another ball when 2 balls touch each other
- Instead of circles, try using a different shape or image/icon/emoji you like
- Remove the boarders so when a ball passes the top of the screen going up, it shows up at the bottom of the screen going the same direction, like [asteroids](http://www.kevs3d.co.uk/dev/asteroids/index-debug.html)
- Convert from a function prototype to a [Class based prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- Multi key press, which allows players to move each evil circle at the same time pressing different keys and in a diagonal path (for example, pressing up + left at the same time)
- 2 players mode (red and green evil circle), WASD and Arrow Keys for 2 players at once
- Keep track of both players score

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)

For more information about objects and classes, see these articles:

- [W3 Objects](https://www.w3schools.com/js/js_objects.asp)
- [W3 Classes](https://www.w3schools.com/js/js_classes.asp)
- [W3 ES6](https://www.w3schools.com/js/js_es6.asp)
