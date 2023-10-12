1. Init project and structure

2. Setup developer environment

3. Install express and nodemon

   - configure static middleware
   - configure body parser
   - configure routers

4. Add images and css in public directory

5. Add html files in views directory

6. Install express-handlebars

   - configure view engine
   - add main layout
   - fix public styles hyperlinks
   - render homepage in hbs

7. Trim html files and convert them into hbs
   - group views into separate folders based on their functions
8. Create controller folder with home controller

9. Add database

   - install mongoose
   - connect to db

10. Prepare user functionality

    - user controller
    - add controller to routes
    - fix navigations in the nav bar(login,register etc.)
    - render login page
    - render register page

11. Add User model

    - simple validation in Schema
    - add method for register
    - create first User record in db
    - validate password mismatch
    - validate email if exists

12. Hash password

    - install bcrypt
    - hash password

13. Login

    - find user by email
    - validate password with hash

14. Generate jsonwebtoken

    - install jsonwebtoken
    - promisify jsonwebtoken
    - generate secret
    - generate token in service login

15. Return token in cookie

    - install cookie-parser
    - configure cookie-parser
    - set cookie with the token

16. Implement Logout
17. Authentication middleware

    - create middleware directory
    - add auth middleware and import it in express config below cookie-parser
    - decode the token
    - handle invalid token
    - provide authorization

18. Dynamic navigation
    - conditional options in nav
    - add user and data to res.locals for hbs template
19. Error handling
    - add 404 page
    - redirect non existing route to 404
    - add global error handler(optional)
    - add error message util
20. Show error notification
    -show in the main layout
    -pass error to render in login and register pages
21. Automatically login after register
