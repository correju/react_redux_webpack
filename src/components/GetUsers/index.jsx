import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchUsers } from '../../actions/usersActions'

const GetUsers = function (props) {
  const clickHandler = (ev) => {
    props.fetch_users()
  }
  return (
    <button onClick={clickHandler} >Click to get Users</button>
  )
}
GetUsers.propTypes = {
  fetch_users: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
})
const mapDispatchToProps = (dispatch) => {
  return {
    fetch_users: fetchUsers(dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GetUsers)
