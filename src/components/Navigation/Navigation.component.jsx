import React from 'react'
import { useContext } from 'react'
import { Link, Outlet } from "react-router-dom"
import { userContext } from '../../Contexts/context'
import { thesignOut } from '../../utils/firebase'
import "../Navigation/navigation.css"

const Navigationcomponent = () => {
    const { currentUser, setCurrentUser } = useContext(userContext);
    console.log(currentUser)

    const signOutHandler = ()=>{
        thesignOut();
        setCurrentUser(null);
    }
    return (
        <>

            <div className='navbar'>
                <nav>
                    <Link to="/" className='nav-link'>logo</Link>

                    <div className='nav-details'>

                        {
                            (currentUser) ? (
                                <Link to="sign-Up" className='nav-link' onClick={signOutHandler}>SignOut</Link>
                            ) : (<Link to="sign-Up" className='nav-link'>SignUp</Link>)
                    }
                        <Link to="shop" className='nav-link'>Shop</Link>

                    </div>

                </nav>

            </div>
            <Outlet />
        </>
    )
}

export default Navigationcomponent
