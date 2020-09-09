### Description

You've been asked to help design a local bait and tackle online store. They are currently the largest supplier of bluegrass fishing equipment and they are super excited to bring their business to the world wide web in hopes they become a fishing phenomenon!

The store owners want to use the newest technologies available but they only want to pay for one sprint. Your job will require you to use React Hooks so that way their online store can stay current for a long time and require less maintenance since the code footprint will be much smaller, thus, less lines of code to write, if done correctly.

For this project we will be using [React Hooks](https://reactjs.org/docs/hooks-intro.html) to create a responsive and reactive order form with a smart navigation.

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/Fishing-Hooks)
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

By default, the app should display fishing store purchase item options. A running subtotal, tax, and grand total should be in display. The page should display what step of the order process you are currently on.

#### Wireframe

- [Wireframes](https://GitHub.com/bootcamp-students/Resources/tree/master/images/wireframes/fishing)
- [Bootstrap Idea](https://getbootstrap.com/docs/4.4/examples/checkout/)

#### Tech Stack

1. HTML
2. CSS
3. Bootstrap
4. JS
5. React

### Process

#### Setup

1. Plan out and pseudocode your project - see [example kanban](https://GitHub.com/bootcamp-students/Resources/projects/9)
2. Create GitHub repo [**Locally**](https://GitHub.com/bootcamp-students/Resources/wiki/Git-Instructions) via `npx create-react-app`
3. NPM install and import/route necessary css/js libraries (E.g. Bootstrap)
4. Save all and create your first commit to `master`, **then** switch to a dev branch

#### Application File Structure

See [create-react-app](https://create-react-app.dev/docs/folder-structure)

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

1. Use React Hooks to handle state management and lifecycle
2. Keep track of what "page" you are currently on (`nav-tabs active` for example)
3. Block access to "submit" page until shipping info filled out.
4. Keep running total and update as user changes their order form (Initially, the total should be 0.)
5. When the user clicks a service, highlight that service and add its cost to the total.
6. Calculate sales tax.

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Use [React Context](https://reactjs.org/docs/context.html)
- Use [React Refs](https://reactjs.org/docs/refs-and-the-dom.html)
- Write [React Tests](https://reactjs.org/docs/testing.html) with [create-react-app](https://create-react-app.dev/docs/running-tests)
- Use [React Router](https://create-react-app.dev/docs/adding-a-router/)
- Use [next.js](https://nextjs.org/docs/api-reference/next/link)

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)

To learn more about stuff

- [window.location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [KY Sales tax](https://www.google.com/search?q=kentucky+sales+tax&oq=kentu&aqs=chrome.0.69i59j0l6j69i59.1841j0j7&sourceid=chrome&ie=UTF-8)
