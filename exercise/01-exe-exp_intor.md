# Express - Intro

### Remember: Reading the documentation must become a habit to be a developer

- Continue using the same app we are doing in class
- Create a package.json file using `npm init --y` if you're creating a brand new express app else ignore this step
- Add these routes (or continue using the app.js file as we did in class)

Use the .sendFile() method

1. Create a route such that
   Visiting '/hobbies' should print a list of links to other routes in the server where you will dispaly your favourite hobbies

2. Create a route for each hobby
   i.e visiting '/hobbies/crochet/' should send teh user an .html page with some info about your passion for crocheting

3. If the user visits any other route that does not exist, print:
   "Sorry, page not found...Blame our developer"
   You might need to search this in the class material :)
