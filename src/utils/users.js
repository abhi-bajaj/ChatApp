const users = []

const addUser = ({ id, username, room }) => {
  //clean the data
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()

  // validate the data

  if (!username || !room) {
    return {
      error: 'Username and room are required!',
    }
  }

  // Check for existing users
  const existingUser = users.find(user => {
    return user.room === room && user.username === username
  })

  // Validate username
  if (existingUser) {
    return {
      error: 'Username is in use!',
    }
  }

  // Store user
  const user = { id, username, room }
  users.push(user)
  return { user }
}

const removeUser = id => {
  const index = users.findIndex(user => {
    return user.id === id
  })

  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}

const getUser = id => {
  const existingUser = users.find(user => {
    return user.id === id
  })
  return existingUser
}

const getUsersInRoom = room => {
  const usersInRoom = users.filter(user => user.room === room)
  return usersInRoom
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom }
