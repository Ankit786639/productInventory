import React,{useEffect, useState} from 'react'
import { FaUserTie } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';


const Navbar = (props) => {
    let [naam,setnaam]=useState("")
    // let [mail,setmail]=useState("")
    useEffect(()=>{
        let data=JSON.parse(localStorage.getItem("loginObj"))
        const {name,email}=data
        setnaam(name);
    })
    let LOGOUT = () => {
        // console.log(props);
        localStorage.clear()
        window.location.href="/"
    }
    let [logout,setLogOut]=useState(false);
    const nav = {
        height:"40px",
        background:"black",
        padding:"1rem",
    }
    const userlogin = {
        color:"white",
        float:"right",
        cursor:"pointer",
    }
    const userDrop = {
        background:"white",
        width:"150px",
        float:"right",
        listStyleType:"none",
        padding:"5px",
        marginTop:"-2rem",
        marginRight:"2rem",
        cursor:"pointer",
    }
    return(
        <>
            <div>
                <div style={nav}>
                    <div>
                        <span onMouseEnter={()=>setLogOut(true)}  style={userlogin}>{naam}&nbsp;&nbsp;&nbsp;&nbsp;<FaUserTie/></span>
                    </div>
                </div>
                {
                    logout&&
                    <div onMouseLeave={()=>setLogOut(false)}>
                        <ul style={userDrop} >
                            <li onClick={LOGOUT}>
                                <span style={{float:"left",fontSize:"25px",marginRight:"1rem"}}><BiLogOut/></span>
                                <span style={{fontSize:"17px"}}>Logout</span>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </>
    )
}
export default Navbar;