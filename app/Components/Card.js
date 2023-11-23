import React from 'react'

const Card = (props) => {
  return (
    <div>
        <img src={props.item[0].picture.large}/>
        <p>Name: {props.item[0].name.first} {props.item[0].name.last}</p>
        <p>Birthday: {props.item[0].registered.date}</p>
        <p>Email: {props.item[0].email}</p>
        <p>Adress: {props.item[0].location.street.number} {props.item[0].location.street.name}</p>
        <p>Phone: {props.item[0].cell}</p>
        <p>Password: {props.item[0].login.password}</p>
    </div>
  )
}

export default Card