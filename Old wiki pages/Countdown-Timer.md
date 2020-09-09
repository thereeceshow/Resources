### Description

Create a webpage that displays a countdown, in digital clock format

For this project we will be using the Date object and setInterval / setTimeout

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/Countdown-Timer)
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

By default, the app should display a working countdown timer.

#### Wireframe

![countdown-timer.png](https://raw.githubusercontent.com/bootcamp-students/Resources/master/images/wireframes/countdown-timer.png)

#### Tech Stack

1. HTML
2. CSS
3. JS

### Process

#### Setup

1. Plan out and pseudocode your project
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

1. Display the time in a digital clock format
2. The only time related data that should display is: (Hour:Minute:Second) (counting down to something within the same day) and (Day-Month-Year) if applicable (counting down to something in the far future)
3. Make sure it updates every second without refreshing the page
4. Stop the timer when countdown reaches 0

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Change the font for the display; a mono-spaced font would look more like a digital clock, and it wouldn't jar your eyes as the variable-width string is re-centered every second.
- Accept user input for length of timer.
- Play an audible alert when countdown reaches 0
- Play the song!
- Make it look like an analog countdown timer

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)
- [W3 Schools - Learn JS](https://www.w3schools.com/js/)

For more information about JavaScript, see these articles:

- [How JS works](https://fireship.io/courses/javascript/intro-how-js-works/)
- [Mozilla - What is JS?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
