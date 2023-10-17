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

21. Automatically login after register //

-------------------------------------------------------

// TODO

22. Map pages to navigation in both Logged in and Logged Out state

23. Add creature model to mongoose

24. Implement All posts page
    - show each creature with its details
    - add details button to every creature

25. Add details page (for creatures)
    - if no creatures "There are no posts yet..."
    - if the user is the owner of the post should have Edit and Delete button
    - if the user is not logged in don't show buttons
    - if the user is not the owner show vote button

26. Vote button
    - when clicked => "Voted"
    - redirect to the details page of the current creature
    - show the email of the voted people
    - if user has already voted => "Thanks for voting" and add the email of the people voted

27. Add creature
    - on success redirect to all posts page

28. Delete creature
    - on success redirect to all posts page

29. Edit creature
    - on success redirect to current creature page

30. Routes Guards - check

31. Validations
    - Login
    - Register
    - Animals

32. Bonus => Profile
    - show my posts
    - message if there are no posts
