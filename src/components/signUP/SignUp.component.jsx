import { FieldValue } from 'firebase/firestore'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { userContext } from '../../Contexts/context'
import { createuserInDB, CreatingUserwithEmailandPass, theSigninWithpop, UserWithEmailandPass } from '../../utils/firebase'
import "../signUP/signUp.css"

const SignUpcomponent = () => {
    const { setCurrentUser } = useContext(userContext);


    const initialValueNewUser = {
        DisplayName: "",
        email: "",
        Password: "",
        confirmPassword: ""
    }
    const initialValueExistUser = {
        Emailexist: "",
        Password: "",
    }
    // existing user 
    const [formDetailsExist, setformDetailsExist] = useState(initialValueExistUser);
    const { Emailexist, PasswordExist } = formDetailsExist;

    //new user
    const [formDetails, SetFormDetails] = useState(initialValueNewUser)
    const { DisplayName, email, Password, confirmPassword } = formDetails;


    const OnChangeHandler = (e) => {
        e.preventDefault();
        const { value, name } = e.target
        setformDetailsExist({ ...formDetailsExist, [name]: value });
        SetFormDetails({ ...formDetails, [name]: value });

    }

    // google signin
    const googlePopUp = async () => {
        const { user } = await theSigninWithpop()
        await createuserInDB(user)
        console.log(user)
        setCurrentUser(user)
    }

    // sign in with email and pass
    const OnExistSubmitHandler = async (e) => {
        e.preventDefault();
        const { user } = await UserWithEmailandPass(Emailexist, PasswordExist);
        console.log(user)
        await createuserInDB(user)

    }
    // creating user while signup 
    const OnOldSubmitHandler = async (e) => {
        e.preventDefault();
        const { user } = await CreatingUserwithEmailandPass(email, Password);
        console.log(user)
        await createuserInDB(user)
    }
    return (
        <div className='formWrapper'>

            <div className='SignIN-Form' >

                <form onSubmit={OnExistSubmitHandler}>
                    <input type="email" onChange={OnChangeHandler} placeholder='enter your email' name='Emailexist' required />
                    <input type="password" onChange={OnChangeHandler} placeholder='enter your password ' name='PasswordExist' />
                    <div className='btn'>
                        <button type='submit'>SignIN</button>
                        <button onClick={googlePopUp} type="button">GoogleSign</button>
                    </div>

                </form>
            </div>

            <div className='SignUP-Form'>

                <form onSubmit={OnOldSubmitHandler}>

                    <input type="text" onChange={OnChangeHandler} placeholder='enter your displayName' name='DisplayName' />
                    <input type="email" onChange={OnChangeHandler} placeholder='enter your email' name='email' />
                    <input type="password" onChange={OnChangeHandler} placeholder='enter your password ' name='Password' />
                    <input type="password" onChange={OnChangeHandler} placeholder='confirm your password ' name='confirmPassword' />

                    <button type='submit'>Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default SignUpcomponent
