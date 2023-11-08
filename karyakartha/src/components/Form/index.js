import { useState } from "react"
import {RxCross1} from 'react-icons/rx'

import Signup from "../signup"

function Form(){
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const openPopup = ()=>setIsPopupOpen(true)
    const closePopup = ()=>setIsPopupOpen(false)

    return(
        <div>
            <button className="signup-button" onClick={openPopup}>Sign In</button>
            <Signup isOpen={isPopupOpen} onClose={closePopup}>
                <p className="popup-des"><span className="sign-up">Sign Up</span> get your dream job & excel in career</p>
                <form onClick={onSignIn} className="popup-form">

                </form>
            </Signup>
        </div>
    )
}