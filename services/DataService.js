
function getUser(userId) {
  //search user in DB by Id
  return {
    userName: 'Yan',
  }
}

function getAllUsers() {
  return [
    { userName: 'Stefan' },
    { userName: 'Petya' },
    { userName: 'Igor' },
  ]
}

export {
  getUser,
  getAllUsers,
}
