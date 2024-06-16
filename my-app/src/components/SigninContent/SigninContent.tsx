import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { signin } from "../../features/authSlice";
import styled from "styled-components";

const AlreadyAccLink = styled.a `
    text-decoration: none;
    color: black;
    font-weight: bold;
    cursor: pointer;

    @media screen and (min-width: 768px){
        display: none;
    } 
`

const AltTextLaptop = styled.div `
    font-weight: bold;
    
    @media screen and (max-width: 768px){
        display: none;
    } 
`
const SigninContent = () => {

    const dispatch = useAppDispatch()

    const signInUser = async (e: any) => {
        e.preventDefault()
        const res = await dispatch(signin({email, password, firstName: firstname, lastName: lastname, userName: username}))
        if(res.payload != undefined) {
            setConnectionState(connectionStateValues.Success)
        }
        else{
            setConnectionState(connectionStateValues.Failure)
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');

    enum connectionStateValues {
        HasNotTried = 0,
        Success,
        Failure,
    }

    const [connectionState, setConnectionState] = useState(connectionStateValues.HasNotTried);


    return(
        <>
            <section className="sign-in-content">
                <AlreadyAccLink href="#logincard">Already an account?</AlreadyAccLink>
                <AltTextLaptop>No account yet?</AltTextLaptop>
                <h1>Sign In</h1>
                <form>
                    <div className="input-wrapper">
                        <label>Firstname</label>
                        <input type="text" id="firstname" value={firstname} onInput={e => setFirstname((e.target as HTMLInputElement).value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label>Lastname</label>
                        <input type="text" id="lastname" value={lastname} onInput={e => setLastname((e.target as HTMLInputElement).value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label>Username</label>
                        <input type="text" id="username" value={username} onInput={e => setUsername((e.target as HTMLInputElement).value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label>Email</label>
                        <input type="text" id="emailsignin" value={email} onInput={e => setEmail((e.target as HTMLInputElement).value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label>Password</label>
                        <input type="password" id="passwordsignin" value={password} onInput={e => setPassword((e.target as HTMLInputElement).value)}/>
                    </div>

                    {connectionState === connectionStateValues.Failure &&
                     <div style={{marginTop: '1em', color: 'red'}}>Impossible to create an account</div>
                    }
                    {(connectionState === connectionStateValues.Failure || connectionState === connectionStateValues.HasNotTried) &&
                     <button onClick={(e: any) => signInUser(e)} className="sign-in-button">Sign In</button>
                    }
                    {connectionState === connectionStateValues.Success &&
                     <div style={{marginTop: '1em', color: 'green'}}>Account created successfully!<br/>Please login</div>
                    }
                </form>
            </section>
        </>
    )}


export default SigninContent;


