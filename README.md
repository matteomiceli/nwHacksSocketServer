# Socket IO Server for NW Hacks Submission
This is a socket server that maintains the connection between the web app client and browser extension client. 

## Text Event Trigger
Text gets sent through the server via the 'text' event which, after being triggered by the photo-taking client, emits the contents of the event to the browser extension client.
```javascript
socket.on('text', ({roomId, content}) => {
  io.to(roomId).emit('text', content)
})
```