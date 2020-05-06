## PROJECT TITLE:

Node Express Handlebars

## PROBLEM DESCRIPTION:

Restaurant has no means to allow user to input names of burgers they want to eat

## SOLUTION:

Develop restaurant app that lets users input the names of burgers they'd like to eat.

## USER STORY:

AS A restaurant that makes hamburgers
I WANT an interactive app with input
THAT users can input names of burgers they'd like to eat

Note: explicit operation and function of required app including directory struction is given.

## APPLICATION DESCRIPTION

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.

### a) OPERATION

Whenever a user submits a burger's name, app will display the burger on the left side of the page -- waiting to be devoured.
Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.
App will store every burger in a database, whether devoured or not.

### b) DEVELOPMENT

Technologies used web application include:
    * HTML
    * CSS
    * Bootstrap
    * JavaScript
    * jQuery
    * Handlebars
    * node
    * MySQL
    * JSON
    * Express
    * Heroku

Directory structure of this app is given below.

    ```
.
|── config
|   ├── connection.js
|   └── orm.js
| 
|── controllers
|   └── burgers_controller.js
|
|── db
|   ├── schema.sql
|   └── seeds.sql
|
|── models
|   └── burger.js
|
|── views
|    ├── index.handlebars
|    └── layouts
|        └── main.handlebars
|
|── server.js
|
|── node_modules
|
|── public
|   └── assets
|        |── css
|        │   └── burger_style.css
|       └── img
|           └── burger.png
|   
|── package-lock.json
|
|-----package.json

```

## NEW SKILLS LEARNT

Handlebars
Heroku deployment

## LICENSE

MIT License

Copyright (c) 2020 David Brown

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
