/* global fetch */
const fetchingUsers = () => {
  return {
    type: 'FETCHING_USER',
    payload: {}
  }
}
const fetchedUsers = users => {
  return {
    type: 'FETCHED_USER',
    payload: users
  }
}
const fetchUserError = err => {
  return {
    type: 'FETCH_USER_ERROR',
    payload: err
  }
}
const fetchUsers = (dispatch) => () => {
  dispatch(fetchingUsers())
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    return response.json()
  })
  .then(users => {
    dispatch(fetchedUsers(users))
  })
  .catch(err => {
    dispatch(fetchUserError(err))
  })
}
export {
  fetchingUsers,
  fetchedUsers,
  fetchUserError,
  fetchUsers
}
