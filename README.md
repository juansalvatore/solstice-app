# Solstice App

This is my solution to <a href="https://www.solstice.com/">Solstice</a>'s 2018 coding challenge.


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

- To use the Redux developers tools uncomment *line 15* on *./client/src/store.js* 

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

## Instructions 

### Contacts List View

- The contacts should be grouped into two sections: Favorite Contacts and Other
Contacts. Within each section, they should be sorted alphabetically by name.
- Each cell should display the associated contact’s small image. Use the included
small placeholder image when appropriate.
- If a contact is a favorite, display a star emoji (⭐ ) in front of their name. The emoji
might look different depending on your platform.
- Tapping on a contact should take the user to the detail page for that contact.

### Contact Detail View

- Display the contact’s large image on this page. Use the included large placeholder
image when appropriate.
- If the contact does not have a particular piece of information, that row should not
appear on their detail page.
- In the top right corner, display a button that allows the user to favorite and unfavorite
a contact. Use the “Favorite True” and “Favorite False” assets provided.
- When the user favorites or unfavorites a contact, the home page should be updated to reflect that change.

### Other Notes

- Your app should be responsive to all screen sizes (phone, tablet, desktop). You
should support a minimum width of 320 and a maximum width of 1024.
- You do not need to persist data between sessions.
- Use of libraries and frameworks is optional, but if you decide to use a single page
application framework, we ask that you use one of the following: Angular, AngularJS,
React or Vue.
- Make sure that all dependencies are saved within the package.json file.
- When you send your project back to your Solstice recruiter, please outline the steps
necessary to build and run your project.

## License

MIT © **[`Juan Salvatore`](http://juansalvatore.com)**
