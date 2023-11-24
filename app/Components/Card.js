import React, {useState} from 'react'
import { FaUserAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { FaBirthdayCake } from "react-icons/fa"
import { FaPhoneAlt } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
import { FaLock } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Card = (props) => {
    const [isNameHovered, setIsNameHovered] = useState(true)
    const [isBirthdayHovered, setIsBirthdayHovered] = useState(false)
    const [isEmailHovered, setIsEmailHovered] = useState(false)
    const [isAddressHovered, setIsAddressHovered] = useState(false)
    const [isPhoneHovered, setIsPhoneHovered] = useState(false)
    const [isPasswordHovered, setIsPasswordHovered] = useState(false)
    const [isCrossHovered, setIsCrossHovered] = useState(false)

    const handleMouseEnter = (key) => {

            setIsNameHovered(false)
            setIsBirthdayHovered(false)
            setIsEmailHovered(false)
            setIsAddressHovered(false)
            setIsPhoneHovered(false)
            setIsPasswordHovered(false)
            setIsCrossHovered(false)

        if (key == "name"){
            setIsNameHovered(true)
        }
        else if (key == "birthday"){
            setIsBirthdayHovered(true)
        }
        else if (key == "email"){
            setIsEmailHovered(true)
        }
        else if (key == "address"){
            setIsAddressHovered(true)
        }
        else if (key == "phone"){
            setIsPhoneHovered(true)
        }
        else if (key == "password"){
            setIsPasswordHovered(true)
        }
    }

    const handleDelete = () => {
        props.onDelete(props.item)
    }

    const handleMouseEnterName = () => handleMouseEnter("name")
    const handleMouseEnterBirthday = () => handleMouseEnter("birthday")
    const handleMouseEnterEmail = () => handleMouseEnter("email")
    const handleMouseEnterAddress = () => handleMouseEnter("address")
    const handleMouseEnterPhone = () => handleMouseEnter("phone")
    const handleMouseEnterPassword = () => handleMouseEnter("password")
    const handleMouseEnterCross = () => {setIsCrossHovered(true)}
    const handleMouseLeaveCross = () => {setIsCrossHovered(false)}

  return (
    <div className="flex flex-col text-center justify-center bg-white border-4 border-double border-black rounded-lg transform hover:scale-105 transition-transform">
        {isCrossHovered ? <ImCross className="absolute top-0 right-0 m-2 cursor-pointer text-red-500 bg-black" onClick={handleDelete} onMouseLeave={handleMouseLeaveCross}/> 
        : <ImCross className="absolute top-0 right-0 m-2 cursor-pointer bg-white" onMouseEnter={handleMouseEnterCross}/> }
        <img className="rounded-full" src={props.item.picture.large} alt=""/>
        <div className="flex justify-between m-2">
            {isNameHovered ? <FaUserAlt size={48} className="text-red-600 cursor-pointer"/> : <FaUserAlt size={24} onMouseEnter={handleMouseEnterName}/>}
            {isBirthdayHovered ? <FaBirthdayCake size={48} className="text-red-600 cursor-pointer"/> : <FaBirthdayCake size={24} onMouseEnter={handleMouseEnterBirthday}/>}
            {isEmailHovered ? <MdEmail size={48} className="text-red-600 cursor-pointer"/> : <MdEmail size={24} onMouseEnter={handleMouseEnterEmail}/>}
            {isAddressHovered ? <FaMapMarkerAlt size={48} className="text-red-600 cursor-pointer"/> : <FaMapMarkerAlt size={24} onMouseEnter={handleMouseEnterAddress}/>}
            {isPhoneHovered ? <FaPhoneAlt size={48} className="text-red-600 cursor-pointer"/> : <FaPhoneAlt size={24} onMouseEnter={handleMouseEnterPhone}/>}
            {isPasswordHovered ? <FaLock size={48} className="text-red-600 cursor-pointer"/> : <FaLock size={24} onMouseEnter={handleMouseEnterPassword}/>}
        </div>
        <div className="border-t-2 border-black m-2">
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