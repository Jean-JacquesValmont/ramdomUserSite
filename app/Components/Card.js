import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Card = (props) => {

  return (
    <div className="flex flex-col text-center justify-center">
        <img src={props.item.picture.large} alt=""/>
        <div className="flex justify-between">
        <FaUserAlt />
        <FaBirthdayCake />
        <MdEmail />
        <FaMapMarkerAlt />
        <FaPhoneAlt />
        <FaLock />
        </div>
        <p>Name: {props.item.name.first} {props.item.name.last}</p>
        <p>Birthday: {props.item.registered.date.substring(0, 10)}</p>
        <p>Email: {props.item.email}</p>
        <p>Adress: {props.item.location.street.number} {props.item.location.street.name}</p>
        <p>Phone: {props.item.cell}</p>
        <p>Password: {props.item.login.password}</p>
    </div>
  )
}

export default Card