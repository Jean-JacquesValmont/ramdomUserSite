import React, {useState} from 'react'
import { FaUserAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaBirthdayCake } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaLock } from "react-icons/fa"

const Card = (props) => {
    const [isNameHovered, setNameHovered] = useState(true)
    const [isBirthdayHovered, setBirthdayHovered] = useState(false)
    const [isEmailHovered, setEmailHovered] = useState(false)
    const [isAddressHovered, setAddressHovered] = useState(false)
    const [isPhoneHovered, setPhoneHovered] = useState(false)
    const [isPasswordHovered, setPasswordHovered] = useState(false)

    const handleMouseEnter = (key) => {

            setNameHovered(false)
            setBirthdayHovered(false)
            setEmailHovered(false)
            setAddressHovered(false)
            setPhoneHovered(false)
            setPasswordHovered(false)

        if (key == "name"){
            setNameHovered(true)
        }
        else if (key == "birthday"){
            setBirthdayHovered(true)
        }
        else if (key == "email"){
            setEmailHovered(true)
        }
        else if (key == "address"){
            setAddressHovered(true)
        }
        else if (key == "phone"){
            setPhoneHovered(true)
        }
        else if (key == "password"){
            setPasswordHovered(true)
        }
    };

    const handleMouseEnterName = () => handleMouseEnter('name')
    const handleMouseEnterBirthday = () => handleMouseEnter('birthday')
    const handleMouseEnterEmail = () => handleMouseEnter('email')
    const handleMouseEnterAddress = () => handleMouseEnter('address')
    const handleMouseEnterPhone = () => handleMouseEnter('phone')
    const handleMouseEnterPassword = () => handleMouseEnter('password')

  return (
    <div className="flex flex-col text-center justify-center border-4 border-black rounded-lg">
        <img src={props.item.picture.large} alt=""/>
        <div className="flex justify-between">
            {isNameHovered ? <FaUserAlt size={32} className="text-red-500"/> : <FaUserAlt size={16} onMouseEnter={handleMouseEnterName}/>}
            {isBirthdayHovered ? <FaBirthdayCake size={32} className="text-red-500"/> : <FaBirthdayCake size={16} onMouseEnter={handleMouseEnterBirthday}/>}
            {isEmailHovered ? <MdEmail size={32} className="text-red-500"/> : <MdEmail size={16} onMouseEnter={handleMouseEnterEmail}/>}
            {isAddressHovered ? <FaMapMarkerAlt size={32} className="text-red-500"/> : <FaMapMarkerAlt size={16} onMouseEnter={handleMouseEnterAddress}/>}
            {isPhoneHovered ? <FaPhoneAlt size={32} className="text-red-500"/> : <FaPhoneAlt size={16} onMouseEnter={handleMouseEnterPhone}/>}
            {isPasswordHovered ? <FaLock size={32} className="text-red-500"/> : <FaLock size={16} onMouseEnter={handleMouseEnterPassword}/>}
        </div>
        <div>
            {isNameHovered ? <p>Name: {props.item.name.first} {props.item.name.last}</p> : ""}
            {isBirthdayHovered ? <p>Birthday: {props.item.registered.date.substring(0, 10)}</p> : ""}
            {isEmailHovered ? <p>Email: {props.item.email}</p> : ""}
            {isAddressHovered ? <p>Address: {props.item.location.street.number} {props.item.location.street.name}</p> : ""}
            {isPhoneHovered ? <p>Phone: {props.item.cell}</p> : ""}
            {isPasswordHovered ? <p>Password: {props.item.login.password}</p> : ""}
        </div>
    </div>
  )
}

export default Card