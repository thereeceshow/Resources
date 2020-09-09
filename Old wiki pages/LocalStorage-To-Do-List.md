### Description

Create an online to-do list app

For this project we will be using React to manage state and local storage to keep track of data

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/LocalStorage-To-Do-List)
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

By default, the app should display the items on the to-do list and list their active status

#### Wireframe

![wireframe](https://GitHub.com/bootcamp-students/Resources/blob/master/images/wireframes/to-do-list.gif)

#### Tech Stack

1. HTML
2. CSS
3. Bootstrap
4. JS
5. React

### Process

#### Setup

1. Plan out and pseudocode your project - see [example kanban](https://GitHub.com/bootcamp-students/Resources/projects/5)
2. Create GitHub repo [**Locally**](https://GitHub.com/bootcamp-students/Resources/wiki/Git-Instructions) via `npx create-react-app`
3. NPM install and import/route necessary css/js libraries (E.g. Bootstrap)
4. Save all and create your first commit to `master`, **then** switch to a `dev` branch

#### Application File Structure

See [create-react-app.dev](https://create-react-app.dev/docs/getting-started#output)

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

1. Dynamically Render the content with React using components
2. Use Local Storage to store all to-do list data in the browser
3. Display all to-do list items
4. Three "views" for the user: All, Completed, & To-Do (not completed)
5. Display Prompting text to add item
6. Cross out or check off one item as "completed"
7. See number of remaining items
8. Remove one item (soft delete / archive)
9. Check off or cross out all items in one click as a "completed all" function
10. Remove all completed items (soft delete / archive)
11. Ability to press a button and all checked off items become active again

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Import Bootstrap using [create-react-app](https://create-react-app.dev/docs/adding-bootstrap) - you will also need to install `jquery` and `popper.js`
- Create a flow diagram for the front end architecture to be used in an MVP
- Push to GitHub Pages via [create-react-app](https://create-react-app.dev/docs/deployment#GitHub-pages)
- Use MySQL
- Edit To-Do's in place
- Write [React Tests](https://reactjs.org/docs/testing.html) with [create-react-app](https://create-react-app.dev/docs/running-tests)

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)
- [Why Can't Anyone Make a Decent To-Do App?](https://www.wired.com/2016/03/best-to-do-list-app/)
- [React State](https://reactjs.org/docs/state-and-lifecycle.html)

For more information about state management, see these articles:

- [What is State Management](https://codeburst.io/state-management-in-javascript-15d0d98837e1)
- [State Management Design Pattern](https://www.dofactory.com/javascript/state-design-pattern)
- [The future of JavaScript state management is less state management...](https://medium.com/@amcdnl/the-future-of-javascript-state-management-is-less-state-management-ba1d97b99308)
