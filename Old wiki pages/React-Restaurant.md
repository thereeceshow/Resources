### Description

You've been asked to design a menu website for a new restaurant opening at 348 E Main St, Lexington, KY. The owners are busy working on their recipes and haven't picked a name yet, so they've asked you to suggest one and use it in your design.

The owners are still working on their recipes. They've populated an API with possible choices. You are to use the API to generate a sample menu to add to your website. The API URL is: [https://entree-f18.herokuapp.com/](https://entree-f18.herokuapp.com/).

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/React-Restaurant)
- [Description](#description)
- [Table of contents](#table-of-contents)
- [MVP](#mvp)
  - [Wireframes](#wireframes)
  - [Tech Stack](#tech-stack)
- [Process](#process)
  - [Setup](#setup)
  - [Application File Structure](#Application-File-Structure)
  - [Develop](#develop)
  - [Deploy](#deploy)
- [Requirements](#requirements)
  - [Additional Requirements](#additional-requirements)
  - [Stretch Goals](#stretch-goals)
  - [Recommended NPM Installs](#recommended-npm-installs)
  - [If you finish early](#if-you-finish-early)
- [Additional Resources](#additional-resources)
<!--te-->

### MVP

A single page web app that serves as a restaurant splash page with menu

#### Wireframes

- [Alfalfa](https://www.alfalfarestaurant.com/menu-1)
- [Gus's Website](http://gusfriedchicken.com/lexington-kentucky-location/#menu)
- [Carson's Website](https://www.carsonsfoodanddrink.com/our-menu/)

#### Tech Stack

1. HTML
2. CSS
3. Bootstrap
4. JS
5. React

### Process

#### Setup

1. Plan out and pseudocode your project - see [example kanban](https://GitHub.com/bootcamp-students/Resources/projects/7)
2. Create GitHub repo [**Locally**](https://GitHub.com/bootcamp-students/Resources/wiki/Git-Instructions) via `npx create-react-app`
3. NPM install and import/route necessary css/js libraries (E.g. Bootstrap)
4. Save all and create your first commit to `master`, **then** switch to a dev branch

#### Application File Structure

See [create-react-app.dev](https://create-react-app.dev/docs/getting-started#output)

#### Develop

1. Create a `dev` branch to commit your code to
2. Add content and elements to your website
3. View changes and test locally via hot reload
4. Save often, and commit to your development branch on GitHub when important changes happen
5. Push your commits to GitHub remote
6. For bug fixes, refactored code, and feature branches, you must create a branch off of `dev` onto a `new-feature` branch and create a Pull Request into dev when complete

#### Deploy

1. Create a Pull Request from `dev` into `master`
2. Confirm code is up to date and works correctly
3. Link your `username.github.io` to point to your new project or add it to an existing portfolio in settings
4. Push your code from local to either GitHub Pages or Firebase and save the hosting link in your repo description
5. Post a link to your Repo to the Projects Slack channel

---

### Requirements

To complete the assignment, you must complete the following:

1. Generate the following information:
   - The restaurant's name (give it a good one!)
   - The restaurant's address
   - The restaurant's hours of operation

2. Access the [API](https://entree-f18.herokuapp.com/) using [Axios](https://www.npmjs.com/package/axios). [Learn more](https://create-react-app.dev/docs/fetching-data-with-ajax-requests)
3. Create a dynamic restaurant menu
   - Must include _at least five_ sections for unique meal type (appetizers, lunch, main course, sides, dessert, etc) with unique food items
   - One meal section must have at least 15 unique items, and 3 other different meal sections must have at least 8 unique items each. (think 15 main courses, 10 appetizers, 1 special, 8 sides, etc)
   - Since the api generates random foods, you do not need to sort the foods, as long as you are display them in their unique sections (imagine this restaurant exists in a parallel universe where people eat whatever, whenever)
   - A price for the food item
   - Each Menu Section must be viewable separately in an [organism](https://patternlab.io) (for example, a bootstrap [accordion](https://getbootstrap.com/docs/4.0/components/collapse/#accordion-example) or [nav tabs](https://getbootstrap.com/docs/4.0/components/navs/#javascript-behavior))
   - Each menu item must be an [molecule](https://patternlab.io) (for example, using a bootstrap card with a picture of the meal, as well as the name, and the price, etc)
4. Manage the React Component State
5. Each time you access the API, you get a different menu. Use [React Lifecycle Methods](https://reactjs.org/docs/state-and-lifecycle.html) to save the results in local storage so that every time your website is accessed, the user gets the same menu (Different users will see different menus; that's okay). Make sure if you delete local storage, you retrieve a new menu from the API

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Repo](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Create an MVP assigning points to user stories using the fibonacci method
- Use React-Bootstrap or reactstrap for styling. [See Recommended NPM Installs](#Recommended-NPM-Installs)
- Modify your Title and Meta Tags using [create-react-app](https://create-react-app.dev/docs/title-and-meta-tags)
- Use NPM to embed a Google Map component showing the location of the restaurant.
- Include a different 'specials' menu for each day of the week that the restaurant is open and show that menu based on the current day (should prove to work throughout the week) as well as what was on the specials menu yesterday/ what will be on the specials menu tomorrow
- Use [React Context](https://reactjs.org/docs/context.html)
- Make each menu type (appetizers, main course, etc ) be the correct foods instead of random using filtering and natural language parsing
- Parse the results of the API call to show a list of sides available for substitution (either in addition to or instead of listing sides with each entree).
- Implement DoorDash style online ordering with parent-child component state management and a 'shopping cart' to save data for purchase
- Write [React Tests](https://reactjs.org/docs/testing.html) with [create-react-app](https://create-react-app.dev/docs/running-tests)
- Use Redux state
- Push to Firebase

#### Recommended NPM Installs

- [React-Bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [reactstrap](https://www.npmjs.com/package/reactstrap)
- [Redux](https://www.npmjs.com/package/react-redux)
- [React Virtualized](https://www.npmjs.com/package/react-virtualized)
- [React Router](https://www.npmjs.com/package/react-router)
- [DayJS](https://www.npmjs.com/package/dayjs)
- [another instructor approved packaged from NPM](https://www.npmjs.com/)

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)
- [Learn React](https://reactjs.org)

For more information about OOP, see these articles:

- [Object Oriented Programming wiki](https://en.wikipedia.org/wiki/Object-oriented_programming)
- [OOP vanilla JS](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)
- [SOLID OOP principles with React](https://www.innofied.com/solid-object-oriented-principles-in-react-native-architecture/)
- [React as a functional language](https://medium.com/@andrea.chiarelli/the-functional-side-of-react-229bdb26d9a6#targetText=A%20Higher%2DOrder%20component%20is,new%20component%20as%20its%20output.)

For more information about API Calls, see these articles:

- [Axios](https://www.npmjs.com/package/axios)
- [API call / timeout visualization](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)
