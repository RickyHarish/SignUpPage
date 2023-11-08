import Popup from 'reactjs-popup'
import {FcGoogle} from 'react-icons/fc' 
import 'reactjs-popup/dist/index.css'
import './index.css'


const renderDesktopView = () => {
    const onSignUp = (event) => {
        event.preventDefault()
    }
    return (
        <>
        <div className='popup-desktop-view'>
            <p className='signup-des'> 
                <span className='sign-up'> Sign Up </span>get your dream job & excel in career
            </p>
            <div className='form-google-container-desktop-view'>
                <form onSubmit={onSignUp} className='sign-up-form'>
                    <div className='inputs-container'>
                        <div className='input-container'>
                            <label className='label' htmlFor='name'>Full Name</label>
                            <input className='input' type='text' id='name' placeholder='  What is your name?' />
                        </div>

                        <div className='input-container'>
                            <label className='label' htmlFor='email'>Email ID</label>
                            <div className='email-container'>
                                <input className='input' type='text' id='email' placeholder='  Enter your Email ID' />
                                <p className='tagline'>We'll send you job notifications</p>
                            </div>
                        </div>

                        <div className='input-container'>
                            <label className='label' htmlFor='password'>Password</label>
                            <div className='password-container'>
                            <input className='input' type='text' id='password' placeholder='  Create your password here' />
                            <p className='tagline'>Minimum 6 characters required</p>
                            </div>
                        </div>

                        <div className='input-container'>
                            <label className='label' htmlFor='mobile-no'>Mobile No</label>
                            <input className='input' type='text' id='mobile-no' placeholder='+91 Mobile number' />
                        </div>


                        <p className='t-and-c'>
                            By Clicking Sign Up, you agree to  the  
                            <a href='https://www.writerbay.com/apply.html'>
                                Terms and Conditions & Privacy Policy
                            </a> of Karyakartha 
                        </p>

                        <button type='submit' className='sign-up-button'>Sign Up</button>

                    </div>
                </form>
                <div className='desktop-line-google-container'>
                <div className='desktop-line-container'>
                        <hr className='v-line'/>
                        <p className='or'>Or</p>
                        <hr className='v-line'/>
                    </div>
                    <div className='continue-with-container'>
                        <p className='continue-with'>Continue with</p>
                        <div>
                            <button className='google-button-container'>
                                <FcGoogle className='FcGoogle'/>
                                <a href="https://www.writerbay.com/apply.html" className='google-anchor'> Google </a>  
                            </button>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
        </>
    )
}

const renderMobileView = () => {
    const onSignUp = (event) => {
        event.preventDefault()
    }
    return (
        <>
        <div className='popup-mobile-view'>
            <h1 className='mobile-view-heading'>Create Account</h1>
            <div className='form-google-container-mobile-view'>
                <form onSubmit={onSignUp} className='sign-up-form'>
                    <div className='m-input-container'>
                        <label className='m-label' htmlFor='m-name'>Full Name</label>
                        <input className='m-input' type='text' id='m-name' placeholder='Enter your name' />
                    </div>
                    <div className='m-input-container'>
                        <label className='m-label' htmlFor='m-email'>Email ID</label>
                        <input className='m-input' type='text' id='m-email' placeholder='Enter your mail..' />   
                    </div>
                    <div className='m-input-container'>
                        <label className='m-label' htmlFor='m-password'>Password</label>     
                        <input className='m-input' type='text' id='m-password' placeholder='Enter password' />  
                    </div>
                    <div className='m-input-container'>
                        <label htmlFor='mobile-no' className='m-label'>Mobile Number</label>
                        <input className='m-input' type='text' id='mobile-no' placeholder='Mobile number' />
                    </div>
                    <button type='submit' className='m-sign-up-button'>Sign Up</button>
                </form>
                <div className='mobile-line-button-container'>
                    <div className='mobile-line-container'>
                        <div className='h-line' ></div>
                        <p className='or'> Or </p>
                        <div className='h-line' ></div>
                    </div>
                    <div className='m-continue-with-container'>
                        <a className='m-google-button-anchor' href='https://github.com/ManeeshaChennoju/Jobby-App-/blob/main/src/Components/Header/index.js'>
                            <div>
                            <button className='m-google-button'>
                                <span className='m-google'> Continue with Google</span>
                            </button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}


const SignUp = () => {    
    return(
        <Popup 
            trigger = {
                <button className='signup-button'>SignUp</button>
            }
            modal
            nested
            closeOnDocumentClick = {false}
            position = 'bottom right'
            >
                {(close) => (
                    <div className='popup-overlay'>
                        <div className='popup-content'>
                            <div className='close-button-container'>
                            <button className='close-button' onClick={close}> &times; </button>
                            </div>
                            {renderDesktopView()}
                            {renderMobileView()}
                        </div>
                    </div>
                )}
        </Popup>
    ) 
}

export default SignUp
