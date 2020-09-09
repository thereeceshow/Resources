### Description

Create a website that clones an already existing app

For this project we will be using React to create components on the front end, and Laravel to create a RESTful API to store data and facilitate pretty url handling.

This project is testing your ability to take a vertical slice of a project, as well as your knowledge of Atomic Design. Deconstructing a website will be the majority the deliverables for the project. Breaking down the atomic design elements, identifying the roles and responsibility of each layer in the tech stack, planning what is and is not within the scope of this project will be the majority of the tasks for the project.

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/Attack-of-the-Clones)
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

By default, the clone app should replicate the design and functionality of the real app front end as closely as possible. The back end is required to pull from the mySQL server as an API and generate/store data and maintain users, data, and state.  [Example](https://docs.google.com/document/d/1NYYni6fRuW_X9YHTg1qKVS4hlL6_jNUunbOY2rs8FOc/edit?usp=sharing)

It *is* possible to [put React directly on a blade](https://dev.to/lvtdeveloper/using-react-in-a-laravel-application-8fp), but this type of architecture is known as [RESTless, or SOAP](https://pediaa.com/what-is-the-difference-between-restful-and-restless-web-service/#:~:targetText=The%20main%20difference%20between%20RESTful,does%20not%20follow%20RESTful%20principles.&targetText=Moreover%2C%20a%20web%20service%20is%20platform%20independent.), which is more resource intensive and would now be considered a poor practice in comparison. You can experiment with a RESTless web server in the [Laravel Library](https://GitHub.com/bootcamp-students/Projects-Exercises/blob/master/docs/projects/laravel-library.md) on your own time

#### Wireframe

- [Twitter wireframe](https://twitter.com/awesome_inc)
- [Gmail wireframe](https://mail.google.com/mail/u/0/)
- [Trello wireframe](https://trello.com/b/8zwX1u4o/bootcamp-s20)
- [Slack/Discord wireframe](https://bootcamp-s20.slack.com/)
- Or choose your own! (must be approved by us first)

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

1. Plan out and pseudocode your project and create your own GitHub Projects Kanban Board - see [example kanban](https://GitHub.com/bootcamp-students/Resources/projects/11)
2. [Create 2 GitHub repos online](https://GitHub.com/bootcamp-students/Resources/wiki/Git-Instructions), for example: `my-ui` and `my-api`
3. Create Project Folder to store both GitHub repos
4. Create necessary files for application and view in VS Code via [create-react-app](https://create-react-app.dev/docs/getting-started#quick-start) and [laravel new](https://laravel.com/docs/6.x#installing-laravel) to make two framework specific project folders in your main project directory
5. Import and route necessary css/js files (E.g. Bootstrap, Axios, Passport)
6. Save all and create your first commit to `master`, **then** switch to a `dev` branch

#### Application File Structure

```raw
main-project-folder/
    react-ui/ - auto generated folder that contains React project - made with "npx create-react-app react-ui" while in "main-project"
    laravel-api/ - auto generated folder that contains Laravel project - made with "laravel new laravel-api" while in "main-project"
```

- See [Laravel Directory](https://laravel.com/docs/6.x/structure) to understand what files are made and where they live
- See [create-react-app.dev](https://create-react-app.dev/docs/folder-structure)

Your directory structure must look like this, and each framework specific project should point to its own GitHub Repo online

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

1. Deconstruct the web app you plan to clone (do not worry about matching fonts or images/colors, we are only concerned with design layout and components/functional features) - create an MVP, MoSCoW, and Stories.
2. Follow atomic design principles for deconstructing the original web app look
   - Atoms -> Molecules -> Organism (component)
3. Use GitHub Projects for kanban board story management
4. Follow the vertical slice method and **Create the backend first** using Laravel for API CRUD calls and to store data
5. Continue with the vertical slice method and **Create the frontend second** using React for creating components and connecting to the API via Axios
6. Have full CRUD functionality (besides the user auth) for at least one aspect of the site (does not need to be complicated)
7. Utilize eloquent for one to many, many to one, one to one, many to many, connection tables, joins, and indexes for ease of use.
8. Create automated functions to generate dummy data to display on the React UI by utilizing the factory design pattern and seeders
9. Add this project to your portfolio as a link

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Use all critical path built in Laravel features
- Write [Laravel Tests](https://laravel.com/docs/6.x/testing)
- Push your app to Firebase and/or Google Cloud following the [create-react-app](https://create-react-app.dev/docs/deployment#firebase) deployment guide
- Show that multiple people are be able to log in and use it at the same time (gmail clone users can email each other, twitter clone users can @ and follow each other, etc)

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)
- [Atomic Design Principles - book](http://atomicdesign.bradfrost.com/)
- [How to Deconstruct a Website (2010)](https://www.smashingmagazine.com/2010/05/case-study-deconstructing-popular-websites-opinion-column/)
- [How to Deconstruct a Website (2017)](https://GitHub.com/dsinecos/notes/wiki/How-to-deconstruct-a-website's-front-end-for-learning%3F)

For more information about Clones, see these articles:

- [What is an app clone?](https://www.quora.com/What-is-an-app-Clone)
- [How much does Uber cost?](https://thinkmobiles.com/blog/how-much-cost-make-app-like-uber/)
- [When You Can’t Innovate, Copy](https://hbr.org/2012/05/when-you-cant-innovate-copy)
- [The Copycats Of Silicon Valley](https://www.inc.com/yazin-akkawi/why-are-silicon-valley-companies-copying-each-other.html)
- [Self Retweeting Tweet](https://www.youtube.com/watch?v=zv0kZKC6GAM)
