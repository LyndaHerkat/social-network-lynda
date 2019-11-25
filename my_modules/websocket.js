function webSocketModule (io) {
    // Current User
    let currentUser;
    let disconnectedUser;
    // tableau avec tous les users connectés
    let usersConnectedArray = [];
    
    io.on('connection', (socket) => {
        console.log('Connection WebSocket OK');
        
        // Ajout d'un nouveau user connecté
        socket.on('new User', (user) => {
            currentUser = user;
            usersConnectedArray.push(user);
            console.log('TCL: webSocketModule -> usersConnectedArray', usersConnectedArray);

            // Envoi de tous les users connectes (Array)
            io.emit('all users connected', usersConnectedArray);

        });
        
        // Déconnection d'un user
        let socketDisconnect = function (user) {
            // Suppression du user disconnected de usersConnectedArray
            let index = usersConnectedArray.indexOf(user);
            console.log('TCL: socketDisconnect -> user qui se déconnecte', user);
            usersConnectedArray.splice(index, 1);
            console.log('TCL: socketDisconnect -> usersConnectedArray tata', usersConnectedArray);
            socket.broadcast.emit('all users connected', usersConnectedArray);
        }
        
        socket.on('user deconnection', (user) => {
          console.log('TCL: webSocketModule ->  socket.on(user deconnection user', user);
          disconnectedUser = user;
            // Fermeture de la socket
            socket.disconnect();
        });

        socket.on('disconnect', (user) => {
        console.log('TCL: webSocketModule -> user tutu', user);
            // Suppression du user disconnected de usersConnectedArray
            socketDisconnect(disconnectedUser);

            // Envoi de tous les users connectes (Array)
            console.log('TCL: webSocketModule -> usersConnectedArray', usersConnectedArray);
            io.emit('all users connected', usersConnectedArray);
            // socket.emit('deconnection');
        });

        // rejoindre une conversation privee
        socket.on('join', (data) => {
          socket.join(data.room);
          console.log(`${data.user.pseudo} vient de rejoindre la room ${data.room}`);
          // envoi evenement a tt le monde de la room sauf current user
          socket.broadcast.to(data.room).emit('new user joined', {user: data.user, message: ' a rejoint cette discussion'});

        });

        // quitter une conversation privee
        socket.on('leave', (data) => {
          console.log(`${data.user.pseudo} se deconnecte de la room ${data.room}`);
          // envoi evenement a tt le monde de la room sauf current user
          socket.broadcast.to(data.room).emit('user left room', {user: data.user, message: ' a quitté cette discussion'});
          socket.leave(data.room)
        });

        // Envoi de message
        socket.on('message', data => {
          io.in(data.room).emit('new message', {user: data.user, message: data.message});
        });

















    });

}

module.exports = webSocketModule;