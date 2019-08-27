# lookup-ws
How many times we have planned for a trip or discussed in group chat, wherein a busybee friend missed all the fun and asking someone to summarize it. "lookup" is a group of nodejs/reactjs application which is an online discussion board. "lookup-ws" handles the web socket part of it for two-way communication between client and server.

# Tools/Technologies Used
- Nodejs
- MongoDB
- Websockets
- [express-ws] (https://www.npmjs.com/package/express-ws)

# Features
With lookup-ws users can:
- create a new board
- join a previously created board with boardID
- Add sections to a board
- Post likes/dislikes a section
- Add cards on to sections
- Post comments/replies on cards
- Post claps/disagree on cards/comments/replies

# How to run the application
You need nodejs and npm installed
```
git clone <repo>
npm install
node index.js
```
# Scope for improvement 
- Endpoints are not protected as of now. Need to implement authentication.
- Right now the design is like whenever a client is joining the board, the web socket connection object is added to an array which in turn is put to a map where board id is the key. Whenever an event is triggered on board, notification is sent to all clients connected to it. Need to develop a feature to effectively remove the client from map upon disconnect.

# Can I contribute
Yes. You are welcome. via pull request.

# Model / Schema
TBD

# Input Format
TBD
