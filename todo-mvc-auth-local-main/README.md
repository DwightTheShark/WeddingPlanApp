# Wedding Plan App
An application for a day that takes a team to tackle! A wedding day! This application allows users to create tasks, assign due dates, assign cateogories, and share them with other users. 

**Link to project:**
View the live app here: https://cruising-wedding-planner.herokuapp.com/
---

> Be sure to add that lovely star 😀 and fork it for your own copy
![wedding-planner-gif](https://user-images.githubusercontent.com/101226771/188735466-ef77d210-0fae-48be-a36e-e9776164827f.gif)

## How It's Made:


**Tech used:** 

* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![Javascript][Javascript-shield]][Javascript-url]
* [![Express][Express-shield]][Express-url]
* [![MongoDB][MongoDB-shield]][MongoDB-url]

This application was modelled with the MVC architecture. The API was built using Node.js, and Express as a framework. MongoDB and Mongoose ODM were used as well to roundout the backend. THe frontend was built with EJS as a templating language for the views, and styled using Bootstrap.

The only deviation this application has taken from the traditional MVC architecture was the separation of the router and controller, to allow for a more modular and object-oriented build.

**Packages/Dependencies used:**

```
bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator
```
**Initializing the project:**

Clone this repository to a clean local directory.

Install all the dependencies or node packages used for development via Terminal.
```
npm install
```

Next step:

- Create a `.env` file and add the following as `key = value` 
  - PORT = 2121 (can be any port example: 3000) 
  - DB_STRING = `your database URI` 
 ---
## Optimizations

Views: 
1. Error page routing will need to be added, along with more thorough testing of edge cases to prevent errors before they happen. 
2. Develop and implement application branding (logo, color scheme, typography, etc.)

Features:
1. Build 'friend' system that will link user accounts to improve on current sharing functionality and allow for more customization
2. Implement 'grouping' feature addition to current share feature, to allow for quick switch task assignments


## Lessons Learned:

Preparation and Planning: There's no real substitute for proper planning and design. Working from start to end to design the UX and match that to functionality, you learn very quickly how every piece needs to fit together. You also learn just how important OOP is.

Modules and Middleware: Method-override is an incredible middleware that allows you to bridge the gap between the power of HTML and your API. The ability to perform all CRUD operations with a simple form is very, very powerful.

Backend: Mongoose is an incredibly powerful ODM that makes working with MongoDB even easier. The ability to aggregate data and cross-reference different documents is going to prove to be an invaluable skill going forward. Working with this data, and the desired end-result in terms of functionality, really cements just how important it is to think through your database structure and design. 

## Contributors:
The main contributors to this project are:

- **DwightTheShark:** https://github.com/DwightTheShark
- **hanzlasaadi:** https://github.com/hanzlasaadi
- **mdcam:** https://github.com/mdcam
- **nshoemake:** https://github.com/nshoemake/
- **policeage:** https://github.com/policeage

[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[Express-shield]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com
[MongoDB-shield]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://mongodb.com
[Javascript-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[Javascript-shield]: https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E
