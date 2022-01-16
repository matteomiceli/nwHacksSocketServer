// implement propper logging in place of console logs

function socket(io) {
  io.on("connection", (socket) => {
    //console.log(`${socket.id} connected`);

    socket.on('disconnect', () => {
      //console.log(`${socket.id} disconnected`);
    });

    // create room 
    socket.on('join', (roomId) => {
      //console.log(`room "${roomId}" was created`)
      //console.log(`joined room "${roomId}"`)
      socket.join(roomId)
    })

    // leave room
    socket.on('leave', (roomId) => {
      socket.leave(roomId)
      //console.log(`left room`)
    })

    // logic for receiveing and sending text from vision api
    socket.on('text', ({roomId, content}) => {
      io.to(roomId).emit('text', content)
    })
  });
}

module.exports = socket;