# Flask Cupcakes
### REST API Backend with JS Frontend: Built JSON API, tested it using Insomnia, wrote integration tests, and built a HTML/JS frontend.

#### Part Zero: Set Up
- Made a virtual environment and installed the dependencies.
- Made Git repo.

#### Part One: Cupcake Model
- Created Cupcake model in models.py with SQL Alchemy
- Made a database called cupcakes.
- Used seed.py file to add a few sample cupcakes to database.

#### Part Two: Listing, Getting & Creating Cupcakes
- Made routes for the following:
    - GET /api/cupcakes: Got data about all cupcakes. Responded with JSON like: {cupcakes: [{id, flavor, size, rating, image}, ...]}. Values provided for each cupcake instance.
    - GET /api/cupcakes/[cupcake-id]: Get data about a single cupcake. Responded with JSON like: {cupcake: {id, flavor, size, rating, image}}. It raises a 404 if the cupcake cannot be found.
    - POST /api/cupcakes: Created a cupcake with flavor, size, rating and image data from the body of the request. Responded with JSON like: {cupcake: {id, flavor, size, rating, image}}.
- Tested these routes in Insomnia.

#### Part Three: Update & Delete Cupcakes
- Made routes for the following:
    - PATCH /api/cupcakes/[cupcake-id]: Updates a cupcake with the id passed in the URL and flavor, size, rating and image data from the body of the request. Made assumption that the entire cupcake object will be passed to the backend. This raises a 404 if the cupcake cannot be found. Responds with JSON of the newly-updated cupcake, like this: {cupcake: {id, flavor, size, rating, image}}.
    - DELETE /api/cupcakes/[cupcake-id]: This raises a 404 if the cupcake cannot be found. Deletes cupcake with the id passed in the URL. Responds with JSON like {message: "Deleted"}.
- Tested these routes in Insomnia.

#### Part Four: Write More Tests
- Added tests for the PATCH and DELETE routes.

#### Part Five: Start on the frontend
- Made this route in app.py:
    - GET /: This returns an HTML page (via render_template). This page is entirely static (the route just renders the template, without providing any information on cupcakes in the database). It shows an empty list where cupcakes should appear and a form where new cupcakes can be added.
- Wrote Javascript (using axios and jQuery) that:
    - queries the API to get the cupcakes and adds to the page
    - handles form submission to both let the API know about the new cupcake and - updates the list on the page to show it
