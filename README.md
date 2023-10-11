# Whiskeys & Whiskys

## Description 
Buy and request various whiskeys.

## User Stories:
> - 404 - As a user, I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault.
> - Homepage - As a user, I want to be able to access the homepage so that I see what the app is about.
> - Request a whiskey: As a user, I want to be able to request a whiskey when it's not available.  
> - Read the whiskey details: As a user, I want to be able to read the details of a sepicif whiskey, e.g. the origin, age and the notes.
> - Update whiskey notes: As a user, I want to be able to add my notes to a whiskey.
> - Edit whiskey notes: As a user, I want to be able to edit my added notes to a whiskey.
> - Put whiskeys into my cart: As a user, I want to be able to add whiskey into my shopping cart in order to buy them. 
> - Change the quantity of a whiskey in my shopping cart: As a user, I want to be able to change the quantity of whiskeys in my shopping cart.

## Backlog Functionalities
> - Search bar
> - Filter list by name/origin/age

## Routes
- GET /

    * Renders the homepage

- GET /
    * Retrieves a list of all available whiskeys

- POST / 
    * Adds a specified whiskey to the cart

- 

POST /auth/signup

redirects to / if user logged in
body:
username
email
password
GET /auth/login

redirects to / if user logged in
renders the login form (with flash msg)
POST /auth/login

redirects to / if user logged in
body:
username
password
GET /events

renders the event list + the create form
POST /events/create

redirects to / if user is anonymous
body:
name
date
location
description
