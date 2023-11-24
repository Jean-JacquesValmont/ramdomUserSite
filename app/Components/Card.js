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
    <div className="flex flex-col text-center justify-center bg-gradient-to-b from-green-900 to-green-500 border-4 border-double border-grey-500 rounded-lg transform hover:scale-105 transition-transform">
        <img src={props.item.picture.large} alt=""/>
        <div className="flex justify-between m-2">
            {isNameHovered ? <FaUserAlt size={48} className="text-red-500"/> : <FaUserAlt size={24} onMouseEnter={handleMouseEnterName}/>}
            {isBirthdayHovered ? <FaBirthdayCake size={48} className="text-red-500"/> : <FaBirthdayCake size={24} onMouseEnter={handleMouseEnterBirthday}/>}
            {isEmailHovered ? <MdEmail size={48} className="text-red-500"/> : <MdEmail size={24} onMouseEnter={handleMouseEnterEmail}/>}
            {isAddressHovered ? <FaMapMarkerAlt size={48} className="text-red-500"/> : <FaMapMarkerAlt size={24} onMouseEnter={handleMouseEnterAddress}/>}
            {isPhoneHovered ? <FaPhoneAlt size={48} className="text-red-500"/> : <FaPhoneAlt size={24} onMouseEnter={handleMouseEnterPhone}/>}
            {isPasswordHovered ? <FaLock size={48} className="text-red-500"/> : <FaLock size={24} onMouseEnter={handleMouseEnterPassword}/>}
        </div>
        <div className="m-2">
            {isNameHovered ? <div> <h2 className="font-bold text-xl">Name</h2> <p>{props.item.name.first} {props.item.name.last}</p></div> : ""}
            {isBirthdayHovered ? <div> <h2 className="font-bold text-xl">Birthday</h2> <p>{props.item.registered.date.substring(0, 10)}</p> </div>: ""}
            {isEmailHovered ? <div> <h2 className="font-bold text-xl">Email</h2> <p>{props.item.email}</p> </div>: ""}
            {isAddressHovered ? <div> <h2 className="font-bold text-xl">Address</h2> <p>{props.item.location.street.number} {props.item.location.street.name}</p> </div>: ""}
            {isPhoneHovered ? <div> <h2 className="font-bold text-xl">Phone</h2> <p>{props.item.cell}</p> </div>: ""}
            {isPasswordHovered ? <div> <h2 className="font-bold text-xl">Password</h2> <p>{props.item.login.password}</p> </div>: ""}
        </div>
    </div>
  )
}

export default Card