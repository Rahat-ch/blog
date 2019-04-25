---
title: LitLab
date: '2019-02-15'
---

This post is going to be about a recent project I worked on with a few other developers. A little background: I am currently enrolled in a Web Development Bootcamp at Columbia University. Part of the curriculum is to complete three group projects, we just finished our second project. I'd like to take a second and link to the other developers I worked with, you can check out all of our GitHub's below:

- <a href = https://github.com/Rahat-ch target="_blank">Rahat</a>
- <a href = https://github.com/infernoarchon target="_blank">Alan</a>
- <a href = https://github.com/sfattal target="_blank">Sherif</a>
- <a href = https://github.com/ANRAx target="_blank">Ram</a>

So our Project 1 was overall a front-end project however, for this one we went the full stack route. Our idea was to build out a real time writing collaboration tool. Think Google Docs with an Instagram flavor and you have our app, LitLab. We're very proud of the MVP (minimal viable product) we were able to produce in a little under two weeks and 161 commits.

I worked mainly on the back end on this project but our full list of technologies is listed below:

- Handlebars
- CSS/Bootstrap
- JavaScript
- Jquery
- Particles JS
- Sequelize
- MySQL
- Passport JS
- Socket.io

My contributions to the project were centered around Passport JS and Socket.io. So what are these two technologies? Well, Passport is what helped us set up our app with authentication. I implemented a simple version of authentication that only requires an email and password to log into our website. Once a user creates an account their information would then be stored in a user table in our MySQL database with passwords being encrypted with the bcrypt middleware to protect password information. Passport also helped us in passing data about the user that is logged in over to the front end of the project, which allowed the site to display the username of whomever is logged in by rendering the user information into our Handlebars template. The majority of our website is hidden to the average person unless they are actually logged in.

The next and much bigger part of my duties on this project were getting a real time chat system and editor to work. To achieve this I had to learn about Web Sockets. So what are those? Web Sockets allow for a client and server to be in constant communication back and forth. This allows for real time updates and changes on a web page without the need to refresh. As I mentioned the library used here was Socket.io.

Now Socket.io is a library that allows you to implement web sockets into your code. In my case it allowed me to get a real time chat feature set up so that anyone can head into our site and start chatting away with other writers to get the creativity flowing. The way this works is whenever a chat message is submitted it will post as a list item on our chat box while also being sent to the server. The server will then send that message to every other person connected to that server and add that same list item to each connected person's chat box. All of that happens way faster than I just explained it. The same logic applies to our real time text editor except every time a key on the keyboard goes up, that specific is character is updated in the text area and also transmitted through the server and to all connected users to display on their own individual text areas as well.

Our MVP currently supports creating news story posts and saves the title and description for you to our main feed. You can click on any item on the feed and you will be taken to our real time editor to write brand new stories with others. New versions that we hope to work on in the future will include the ability to save and post full stories, poems, and song lyrics as well.

If you would like to view and try out the LitLab MVP you can check out our repo below which has instructions and sample user logins for you to jump right in and try it out without creating your own account:

<a href = https://github.com/Rahat-ch/LitLab target="_blank">LitLab Github Repo</a>

Thanks for reading! Please share this with this blog with others starting out in web development. The next blog post will be all about closure!
