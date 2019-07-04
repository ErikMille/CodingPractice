import React, { Component } from 'react'
import './User.scss'

const User = (props) => {
    return (
    <div className="contact">
      <div className="contact__photo">
        <div className="photo">
          <img className="photo__img" src={props.user.image} alt="Homer" />
        </div>
      </div>
      <div className="contact__info">
        <p><strong>Name: </strong>{props.user.name}</p>
        <p><strong>E-mail: </strong>{props.user.email}</p>
      </div>
    </div>
    )
}

export default User;

