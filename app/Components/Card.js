import React from 'react'

const Card = (props) => {
  return (
    <div>
        <img src={props.item.picture.large}/>
        <p>Name: {props.item.name.first} {props.item.name.last}</p>
        <p>Birthday: {props.item.registered.date}</p>
        <p>Email: {props.item.email}</p>
        <p>Adress: {props.item.location.street.number} {props.item.location.street.name}</p>
        <p>Phone: {props.item.cell}</p>
        <p>Password: {props.item.login.password}</p>
    </div>
  )
}

export default Card