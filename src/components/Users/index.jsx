import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import User from '../User/index.jsx'

const Users = function (props) {
  console.log(props.users)
  return (
    <div className="user-wrapper">
      {
        props.users.map((e, i) => {
          let key = `id-${i}`
          return (
            <User key={key} user={e} />
          )
        })
      }
    </div>
  )
}
Users.propTypes = {
  users: PropTypes.array
}

Users.defaultProps = {
  users: []
}

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps)(Users)
