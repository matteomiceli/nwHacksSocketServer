function socket(io) {
  io.on("connection", (socket) => {
    console.log("a client connected");

    socket.on('disconnect', () => {
      console.log('client disconnected');
    });

    // create room 
    socket.on('join', (roomId) => {
      console.log(`room ${roomId} was created`)
      console.log(`joined room ${roomId}`)
      socket.join(roomId)
      io.to(roomId).emit('welcome', `welcome ${socket.id}`)
    })

  });
}

module.exports = socket;