### Description

Create a webpage that houses all your projects formatted as a mobile or desktop layout with app and widget buttons

For this project we will be using react to refactor all our vanilla JavaScript projects, and laravel as a back end

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/Final-Portfolio)
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

By default, the app should show off your projects in a clean and concise format, and be able to be re-arranged in the code to create different layouts. This one webpage should house all your projects, including your blog and any other projects you wish to show off not explicitly listed here.

#### Wireframe

Feel free to design this project however you see fit. This is a showcase of your skills, so be creative! Here are some options on what a final portfolio could look like. Also see the [bottom of the page](#Portfolio-Examples)

- [Option 1](https://GitHub.com/bootcamp-students/Resources/blob/master/images/wireframes/mobile-widgets.png)
- [Option 2](https://GitHub.com/bootcamp-students/Resources/blob/master/images/wireframes/desktop-widgets.png)
- [Option 3](https://getbootstrap.com/docs/4.4/examples/album/)

#### Tech Stack

1. HTML
2. CSS
3. Bootstrap
4. JS
5. React
6. Firebase
7. MySQL
8. PHP
9. Laravel
10. Google Cloud

### Process

#### Setup

1. Plan out and pseudocode your projects using the methods we have learned in class, it may be helpful to create a kanban board
2. Create two GitHub repos [**Locally**](https://GitHub.com/bootcamp-students/Resources/wiki/Git-Instructions) via `laravel new my-api` and `npx create-react-app my-ui` to make two framework specific project folders in your main project directory
3. NPM/Composer install and import/route necessary css/js/php libraries (E.g. Bootstrap, Passport)
4. Save all and create your first commit to `master`, **then** switch to a dev branch

#### Application File Structure

- See [create-react-app.dev](https://create-react-app.dev/docs/folder-structure)
- See [Laravel Directory](https://laravel.com/docs/6.x/structure)

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

1. Keep the original projects in their repos, you can use them as reference, but since you will be creating all of these in react, you will not need to copy old code over, but rather create a new version from scratch that lives in this repo instead.
2. Refactor each of the following vanilla JS project with the following additional requirements:
   - Clock and Countdown Timer will become one component with a prop that defines which view to display, and a prop that defines the start button for the countdown timer
   - Weather app can be minified to show just an icon version of the weather. When you click on the button, it should show the full weather app
   - CRUD Component Clone lets you perform an action without specifically loading the app (think iOS long press)
   - Calculator and To-Do List retains state and data in case someone exits app and re opens it (prop to force quit/hard refresh)
   - Mind Reader, sliding puzzle, and Tic-Tac-Toe act as a combined game center app that lets the user select which game to play (also maintains state so a player can come back and pick up where they left off)
3. The following apps do not need to be added into the refactored portfolio, but you should put them in a dedicated section with descriptions of each that links to their respective GitHub repos, as they are standalone WebApps/Sites:
   - Campaign Website
   - projects created through Mozilla or GitHub Learning Lab
4. Integrate your Blog to be a part of the final portfolio
5. Use the entire tech stack to complete the project including
   1. React Hooks
   2. React Context
   3. All critical path built in Laravel features

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Use [SASS](https://sass-lang.com/guide) with [create-react-app](https://create-react-app.dev/docs/adding-a-sass-stylesheet)
- Write [Laravel Tests](https://laravel.com/docs/6.x/testing)
- Write [React Tests](https://reactjs.org/docs/testing.html) with [create-react-app](https://create-react-app.dev/docs/running-tests)
- Choose and learn new [Laravel Packages](https://laravel.com/docs/6.x/billing)
- Choose and learn new [NPM Packages](https://www.npmjs.com/search?q=react&ranking=popularity)
- Choose and learn new [Frameworks](https://GitHub.com/topics/framework)
- Create a [CRA Template](https://create-react-app.dev/docs/custom-templates)

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)

For more information about portfolios, see these articles:

- [What to put in a CS portfolio](https://www.bestcomputerscienceschools.net/how-to-create-a-portfolio-for-tech-jobs/)
- [Google](https://www.google.com/search?q=developer+portfolio&oq=developer+portfolio&aqs=chrome..69i57j0l5.3263j1j7&sourceid=chrome&ie=UTF-8)
- [GitHub article](https://techbeacon.com/app-dev-testing/what-do-job-seeking-developers-need-their-GitHub)
- [LinkedIn](https://medium.com/@samanthaming/tips-to-optimize-your-linkedin-profile-for-developers-77777c1e2c2e)
- [Putting React into Laravel](https://laravel.com/docs/6.x/frontend#using-react)

## Portfolio Examples

- [Example 1](https://www.freecodecamp.org/news/15-web-developer-portfolios-to-inspire-you-137fb1743cae/)
- [Example 2](https://www.mockplus.com/blog/post/web-developer-portfolio)
- [Example 3](https://skillcrush.com/2019/04/18/web-developer-portfolios/)
- [Example 4](https://hackernoon.com/top-12-web-developer-portfolios-to-get-inspirations-b1a54247329e)
- [Example 5](https://ianlunn.co.uk/)
- [Example 6](https://wpamelia.com/portfolio-websites/)
- [Example 7](https://gskinner.com/)
- [Example 8](https://threejs.org/)
- [Example 9](https://www.google.com/search?q=front+end+developer+portfolio&oq=front+end+developer+&aqs=chrome.1.69i57j0l7.4791j0j4&sourceid=chrome&ie=UTF-8)
