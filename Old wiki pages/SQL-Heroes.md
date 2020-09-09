### Description

Create Facebook for Superheroes: a website that helps superheroes stay in touch with their friends and keep track of supervillains.

For this project we will be using PHP and MySQL.

This project does not focus on styling, it is ok if your app does not look polished; we are focusing on functionality.

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/SQL-Heros)
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

By default, the app should perform full CRUD operations on the supplied [SQL Database file](https://GitHub.com/bootcamp-students/Resources/blob/master/Code%20Examples/SQL/superheroes.sql)

#### Wireframe

See these [Facebook wireframes](https://www.google.com/search?q=facebook+wireframe&sxsrf=ACYBGNTfTWy_uOHR8WET-yL9pL2QNSP-Nw:1578497175826&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi9r8abqPTmAhUSGc0KHQIbDBcQ_AUoAXoECA4QAw&cshid=1578497283290552&biw=1920&bih=946)

#### Tech Stack

1. PHP
2. MySQL

### Process

#### Setup

1. Plan out and pseudocode your project - see [example kanban](https://GitHub.com/bootcamp-students/Resources/projects/12)
2. [Create GitHub repo (either online or locally)](https://GitHub.com/bootcamp-students/Resources/wiki/Git-Instructions), for example: `my-app`
3. Create necessary files for application and view in VS Code
4. Import and route necessary files
5. Save all and create your first commit to `master`, **then** switch to a `dev` branch

#### Application File Structure

```raw
repo/
    index.php - main php file
    superheroes.sql - supplied SQL Database file
    README.md - any important information
    .gitignore - file that omits any directory/file from being tracked
```

Additional pages will be relative to the index.php file.

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
3. PHP files do not work on GitHub Pages, so you will present your finished work locally

---

### Requirements

This project does not focus on styling, it is ok if your app does not look polished; we are focusing on functionality.

To complete the assignment, you must complete the following:

1. Create a Connection to a local Database using PHP and view the database via MAMP
2. The supplied [superheroes.sql Database file](https://GitHub.com/bootcamp-students/Resources/blob/master/Code%20Examples/SQL/superheroes.sql) contains create table and insert statements to get you started. You will need to customize the data a little, since image links were not provided. You can make other changes using php if you wish.
3. Decide on a minimum of four CRUD operations you wish to implement, at least one per each letter (at least one operation for Create, Read, Update, & Delete) - document this in your README.md
4. In addition to your chosen CRUD operations, you should also do the following:
   1. Display all superheroes as a list showing their Name, Thumbnail profile image, & About Me info
   2. Each Super Hero Profile is a link that opens to their profile page.
   3. Profile Pages should display Name, Large Profile Image, About Me Info Biography, Link to return back to main superhero list
   

#### Additional Requirements

- Website must be responsive
- Website must be styled - does not need to look pretty
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Show mutual friends
- Be able to add new friends
- Show mutual enemies
- Be able to add new enemies
- Add likes
- Add dislikes
- List hero abilities
- Extend the database with your own tables
- Create a React Frontend to view the data via Axios

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)
- [php.net](php.net)

For more information about SQL and PHP, see these articles:

- [W3 PHP](https://www.w3schools.com/php/)
- [W3 SQL](https://www.w3schools.com/php/php_mysql_intro.asp)
