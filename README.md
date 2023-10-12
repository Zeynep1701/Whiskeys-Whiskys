# Whiskeys & Whiskys

## Description 
The page is an online platform that offers a carefully curated selection of whiskeys for sale. 
As the name entails, we have a selection of whiskeys and whiskys from all over the world.
Whether customers are seasoned whiskey enthusiasts or newcomers, the page aims to provide an elevated shopping experience where they can discover and purchase exceptional bottles.


## User Stories:
 - 404 - As a user, I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
 - Homepage - As a user, I want to be able to access the homepage so that I see what the app is about.
 - Request a whiskey: As a user, I want to be able to request a whiskey when it's not available.  
 - Read the whiskey details: As a user, I want to be able to read the details of a sepicif whiskey, e.g. the origin, age and the notes.
 - Update whiskey notes: As a user, I want to be able to add my notes to a whiskey.
 - Edit whiskey notes: As a user, I want to be able to edit my added notes to a whiskey.
 - Put whiskeys into my cart: As a user, I want to be able to add whiskey into my shopping cart in order to buy them. 
 - Change the quantity of a whiskey in my shopping cart: As a user, I want to be able to change the quantity of whiskeys in my shopping cart.
 - Delete the whiskey if I don't want to purchase it: As a user, I want to be able to delete the whiskey if I don't want it anymore.

## Backlog Functionalities
 - Search bar
 - Filter list by name/origin/age

## API Endpoints & Methods
 - Fetch all whiskeys:
    * Endpoint: /whiskeys
    * Method: GET

 - Add whiskey to cart:
    * Endpoint: /cart
    * Method: POST

 - Add user notes for a whiskey:
    * Endpoint: /userNotes
    * Method: POST

 - Request a new whiskey:
    * Endpoint: /whiskeys/new
    * Method: POST

 - Fetch all items in the cart:
    * Endpoint: /cart
    * Method: GET

 - Delete a whiskey from the cart:
    * Endpoint: /cart/:whiskeyId
    * Method: DELETE

 - Fetch details of a whiskey with embedded notes:
    * Endpoint: /whiskeys/:whiskeyId?_embed=notes
    * Method: GET

 - Fetch details of a whiskey with embedded user notes:
    * Endpoint: /whiskeys/:whiskeyId?_embed=userNotes
    * Method: GET

 - Update a user note:
    * Endpoint: /userNotes/:noteId
    * Method: PATCH

## Models & Schemas:
- Whiskey Model
    * Represents individual whiskeys.
    * Fields:
        + id
        + name 
        + origin
        + age
        + price
        + description
        + image

- Notes Model
    * Represents predefined tasting notes for specific whiskeys.
    * Fields:
        + id
        + whiskeyId
        + userName
        + nose
        + taste
        + finish

- UserNotes Model
    * Represents custom reviews/notes by users about specific whiskeys.
    * Fields: 
        + id
        + whiskeyId
        + userName
        + nose
        + taste
        + finish


- WhiskeyRequest Model
    * Represents user requests for new whiskeys to be added. 
    * Fields:
        + userName
        + email
        + name
        + age

- Cart Model
    * Represents the items added to the cart.
    * Fields:
        + id
        + name
        + origin
        + age
        + price
        + description
        + image

## Links
- Git:
    * Repository link: https://github.com/Zeynep1701/Whiskeys-Whiskys
    * Repository link (Backend): https://github.com/escobarnad/json-server-backend
    * Deploy link: https://whiskeys-whiskys.netlify.app
    * Deploy link (Backend): https://whiskeysandwhiskys.adaptable.app 

    

## Collaborators
- Nadia Escobar
- Zeynep Ünal

