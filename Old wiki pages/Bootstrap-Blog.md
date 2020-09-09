### Description

Create a bootstrapped version of your blog.

For this project we will be learning how to refactor a website style correctly.

This blog will have the same content as your original blog, which is documenting your journey to becoming a Full Stack Web Developer every week. 
If you run out of ideas, you can find weekly example questions on the wiki under [Blog-Questions](https://GitHub.com/bootcamp-students/Resources/wiki/Blog-Questions).

The purpose of this project is to not only let you have a way to look back on all your progress when the bootcamp finishes, but also see how different everyone decides to create their websites and work together to learn new techniques. Throughout each iteration of your blog, you will learn how to refactor your code, how to copy and paste correctly, and what to nuke and pave.

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/Bootstrap-Blog)
- [Description](#Description)
- [Table of Contents](#table-of-contents)
- [MVP (Minimum Viable Product)](#MVP)
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

By default, your blog should be able to be viewed online by others. As we progress throughout the bootcamp you will refactor this blog to use React and communicate with a PHP MySQL database via a Laravel backend. The refactored blog will be included in your final portfolio, and there is a separate project to create a final portfolio which you will connect to your blog. This Blog can be hosted on GitHub pages for now, but ultimately we will learn how to push to Firebase and host it there as well.

#### Tech Stack

1. HTML
2. CSS
3. Bootstrap
4. JS - using Bootstrap components that rely on popper.js and jQuery

### Process

#### Setup

1. Plan out and pseudocode your project
2. Create new branch on GitHub blog repo, for example: `bootstrapped-blog`
3. Create necessary files for application and view in VS Code
4. Import and route necessary css/js files (E.g. Bootstrap)
5. Save all and create your first commit to your new branch.
6. Create a Pull Request into Master when you are complete.

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

1. Continuous updates to your blog throughout the bootcamp.
2. Help others out with making their blog look good.
3. Integrate with your portfolio.
4. Continual Refactoring every time we learn a new technology - think of the blog as a sandbox

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Use JS to Dynamically render the blog
- Store the blog posts in JSON

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)

For more information about bootstrap, see these articles:

- [Getting Started with Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
- [Blog Example](https://getbootstrap.com/docs/4.4/examples/blog)
- [Adaptive vs Responsive](https://www.interaction-design.org/literature/article/adaptive-vs-responsive-design)
