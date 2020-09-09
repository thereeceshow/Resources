### Description

Create an in-browser calculator

For this project we will be using [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/Classic-Calculator)
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

By default, the app be a working responsive calculator that can perform the basic operations described in the requirements. The calculator must be Object Oriented

#### Wireframe

![wireframe](https://raw.githubusercontent.com/bootcamp-students/Resources/master/images/wireframes/calculator.png)

#### Tech Stack

1. HTML
2. CSS
3. Bootstrap
4. JS

### Process

#### Setup

1. Plan out and pseudocode your project - see [example kanban](https://GitHub.com/bootcamp-students/Resources/projects/4)
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

1. You must not use eval()
2. The calculator must be Object Oriented, utilizing `Class`, not Object.prototype
3. The app should be completely rendered via JS, no HTML besides a `<div id="app">`
4. The calculator should have a display area at the top.
5. The display should show `0` by default.
6. The calculator should have 6 function buttons:
   - Division `/`
   - Multiplication `*`
   - Subtraction `-`
   - Addition `+`
   - Calculate `=`
   - Clear `c`
7. The calculator should have 10 number buttons, `0-9`.
8. The calculator should have a decimal button `.`
9. The display area should update as a user presses buttons.
10. When the user clicks a function button after the first and second values are entered (instead of `=`), the result of the calculation should be saved and the calculator should allow for a new number input (for example: `1` then `+` then `3` then `-`, etc.)
11. When the calculate button `=` is pressed, the calculator should apply the operation to the two stored numbers in the appropriate order (important for subtraction and division) and update the display.
12. When the clear button `c` is pressed, all stored data should be erased and the display should show `0` again.

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Create a list of Stories to be used in a potential MVP
- Show a history of buttons that were pressed until `c` in the display area.
- Accept keyboard input
- Undo button
- Button that holds a value or function of choice (for example: button that automatically calculates the tip or tax)
- Use recursion to calculate the results
- Use Bitwise operators to calculate the results
- Turn it into a graphing calculator

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)
- [W3 Schools - Learn JS](https://www.w3schools.com/js/)

For more information about computer math, see these articles:

- [eval() is Evil](https://stackoverflow.com/questions/86513/why-is-using-the-javascript-eval-function-a-bad-idea)
- [Computer math article](https://medium.com/swlh/how-computers-do-math-11af23139db)
- [Computer math examples](https://www.w3schools.com/js/js_numbers.asp)
- [Computer math common problem example](https://0.30000000000000004.com/)
- [Why do computers suck at math](https://blog.codinghorror.com/why-do-computers-suck-at-math/)
- [Terrible user input examples](https://www.boredpanda.com/funny-worst-input-fields/)
