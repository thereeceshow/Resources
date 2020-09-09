### Description

Create a Laravel backend for your blog.

For this project we will be learning how to refactor a websites backend data correctly.

This blog will have the same content as your original blog, which is documenting your journey to becoming a Full Stack Web Developer every week. If you run out of ideas, you can find weekly example questions on the wiki under [Blog-Questions](https://GitHub.com/bootcamp-students/Resources/wiki/Blog-Questions).

The purpose of this project is to not only let you have a way to look back on all your progress when the bootcamp finishes, but also see how different everyone decides to create their websites and work together to learn new techniques. Throughout each iteration of your blog, you will learn how to refactor your code, how to copy and paste correctly, and what to nuke and pave.

### Table of Contents

<!--ts-->
- [Project/Exercise Name](https://GitHub.com/bootcamp-students/Resources/wiki/Example-Project-Instructions)
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

By default, your blog should be able to be viewed online by others. As we progress throughout the bootcamp you will refactor this blog to communicate with a PHP MySQL database via a Laravel backend. This Blog can be hosted on Firebase and the backend will be stored on Google Cloud.

#### Tech Stack

1. HTML
2. CSS
3. Bootstrap
4. JS
5. React
6. Firebase
7. PHP
8. MySQL
9. Laravel
10. Google Cloud

### Process

#### Setup

1. Plan out and pseudocode your project - see [example kanban]()
[Create a new GitHub repo for the Laravel backend](https://GitHub.com/bootcamp-students/Resources/wiki/Git-Instructions), for example: `my-api`
2. Use [laravel new](https://laravel.com/docs/6.x#installing-laravel) to make a framework specific project folder in your main project directory
3. Import and route necessary css/js files (E.g. Passport)
4. Save all and create your first commit to `master`, **then** switch to a `dev` branch
5. You will continue to use the same React Blog front end for this project, you will just be moving blog post data from that repo to this one.

#### Application File Structure

```raw
laravel-api/ - auto generated folder that contains Laravel project - made with "laravel new laravel-api" while in "main-project"
```

- See [Laravel Directory](https://laravel.com/docs/6.x/structure) to understand what files are made and where they live

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
3. Push your code from local to either GitHub Pages, Google Cloud or Google Firebase and save the hosting link in your repo description
4. Post a link to your Repo to the Projects Slack channel

---

### Requirements

To complete the assignment, you must complete the following:

1. Use MySQL to store your blog posts
2. Host your blogs frontend on Firebase
3. Host your blogs backend on Google Cloud
4. Maintain your blog after the bootcamp ends

#### Additional Requirements

- Website must be responsive
- Website must be styled
- Use the tools and technologies covered in class to complete your website. To see what we have covered, check the [Class Resources Wiki](https://GitHub.com/bootcamp-students/Resources/wiki/Resources).
- Your repo should be public so that others can see your code and comment on it.
  - _**Remember to push to GitHub!**_
  - Potential employers will view your GitHub profile, so activity is crucial!

#### Stretch Goals

- Use Vanilla PHP and MySQL to store the DB
- Use Laravel to create an email list that sends new blog posts as a newsletter to your subscribers
- Learn a new backend framework to host the data

#### If you finish early

1. Continue to add your own content, additions, and pages to your site and improve the styling.
2. Add info to your projects README.md [README.md Best Practices](https://gist.GitHub.com/PurpleBooth/109311bb0361f32d87a2)
3. Share links and resources from this week to the Resources slack channel.

### Additional Resources

- Ask questions :smile:
- Learn more about [Good GitHub Practices](https://guides.github.com)


For more information about Laravel, see these articles:

- [Laravel](https://laravel.com/docs/6.x)
