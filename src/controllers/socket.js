function socket(io) {
  io.on("connection", (socket) => {
    console.log(`${socket.id} connected`);

    socket.on('disconnect', () => {
      console.log(`${socket.id} disconnected`);
    });

    // create room 
    socket.on('join', (roomId) => {
      console.log(`room "${roomId}" was created`)
      console.log(`joined room "${roomId}"`)
      socket.join(roomId)
    })

    socket.on('text', ({roomId, content}) => {
      io.to(roomId).emit('text', content)
    })
  });
}

module.exports = socket;