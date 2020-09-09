### Description

Create a webpage that acts as a hub for librarians to know the status of books in their library, and update books and their information

For this project we will be using Composer to generate a Laravel project, and adding an artisan preset to use React in our laravel project to create components to put onto blade.php files

You will not be able to host this site on GitHub, but you will still store GitHub versioning online, so to learn about how to properly [link a repo created on the command line with an existing repo you created on the GitHub website, click here](https://help.GitHub.com/en/articles/adding-an-existing-project-to-GitHub-using-the-command-line)

For site hosting, we will be using local host

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/Laravel-Library)
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

By default, the app should let a Librarian maintain a simulated library via a web interface.

#### Wireframe

[Library Wireframes](https://GitHub.com/bootcamp-students/Resources/tree/master/images/wireframes/library) - you do not need to copy these exactly, it's just one of many ideas.
Remember, this is a back end project; it does not need to look pretty, it needs to work.

#### Tech Stack

1. HTML
2. CSS
3. JS
4. MySQL
5. PHP
6. Laravel
7. Localhost

### Process

#### Setup

1. Plan out and pseudocode your project - see [example kanban](https://GitHub.com/bootcamp-students/Resources/projects/8)
2. Create GitHub repo [**Locally**](https://GitHub.com/bootcamp-students/Resources/wiki/Git-Instructions) via `laravel new my-app` - see [installing Laravel](https://laravel.com/docs/6.x#installing-laravel)
3. NPM/Composer install and import/route necessary css/js/php libraries (E.g. Bootstrap, Passport)
4. Save all and create your first commit to `master`, **then** switch to a dev branch

#### Application File Structure

See [Laravel Directory](https://laravel.com/docs/7.x/structure) to understand what files are created and where they live

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

*Do not begin using React until you have successfully completed the project. This is a back end project; it does not need to look pretty, it needs to work.*

To complete the assignment, you must complete the following:

1. Create object relationship diagram (database tables with relationships)
2. Store a table of library card holders as `users` in your local MySQL database.
3. Store a table of books to checkout.  
4. Store a table of checked out books and meta data such as date and number of times checked out as `checkouts` in your local MySQL database.
5. Implement full CRUD operations (create books and checkouts, read books and checked out books, update books, delete checkouts)
6. Implement foreign key relations to correctly store data using Eloquent
7. Users do not *need* to sign up or be real people, you can simulate this by creating a "new user" with Tinker.
8. Show all user and book statistics that are saved in database (for example: There are 3 users registered with the library, user "jim" has 2 books checked out: "Algorithms", and "Design Patterns", user "phil" has 0 books checked out, and user "sally" has 1 book checked out: "The Pragmatic Programmer", there are 5 books in the library total, three are checked out, etc.) you can format this data however you'd like, we suggest a html table with multiple tabs
9. Be able to click any user or book and view the info as well as perform full CRUD where applicable.(librarian superuser can perform any action and view any page, but basic card holder user can only view a subset of pages and perform limited actions)

**Do not begin using React until you have successfully completed the project. This is a back end project; it does not need to look pretty, it needs to work.**

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Use all critical path built in Laravel features
- Create a search bar for querying books from the Google Books API
- Implement Laravel Auth using composer to create many "Librarians"
- Add a 'due by date' that keeps track of how long a book has been checked out
- Add a 'late fee' for books that have been checked out too long that can be modified by the librarian
- Add a way for a user to 'renew' their checked out book
- Add a way for users to put a book on hold if someone else has it currently checked out
- Add a history for the librarians to see a list of all people who checked out a particular book
- Add any other data to the scheme as long as it is NOT redundant
- [Use React as a frontend that communicates with the Laravel library as a REST API](https://restfulapi.net/)
- Write [Laravel Tests](https://laravel.com/docs/6.x/testing)

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)

For more information about CRUD, see these articles:

- [What is CRUD?](https://www.codecademy.com/articles/what-is-crud)
- [Why is CRUD so Important?](http://trendintech.com/2018/01/19/why-is-crud-so-important-in-computer-programming/)
