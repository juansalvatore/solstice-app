# Solstice App

## Tech

- [Reactjs](https://reactjs.org/) - JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - Predictable state container for JavaScript apps
- [styled-components](https://www.styled-components.com/) - Visual primitives for the component age 💅
- [Material-UI](https://material-ui.com/) - React components that implement Google's Material Design.
- [node.js](https://nodejs.org/) - JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - Web framework for Node.js
- [MongoDB](https://www.mongodb.com/) - Document database

## How to run the project locally

- Clone the repository

- Install client and server dependencies by running `cd solstice-app` and then `npm run dependencies`

- Now you should create a new file called **keys_dev.js** inside the folder **./config** 

- Inside this file paste this code:
```
module.exports = {
  mongoURI: 'mongodb://localhost:27017/solstice',
}
```
You can replace the mongoURI with your own mongodb uri.

- After that you should run `npm run dev` and it will run the react app in *localhost:3000* and the api in *localhost:5000*


## API Routes 

### Contacts

Get all contacts:
`GET api/contacts`

Get a specific contact:
`GET api/contacts/:id`

Create a contact: 
`POST api/contacts`

Toggle favorite:
`POST api/contacts/favorite/:id`
