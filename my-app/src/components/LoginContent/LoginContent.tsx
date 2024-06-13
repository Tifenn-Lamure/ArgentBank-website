import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router";

const LoginContent = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const loginUser = async (e: any) => {
        e.preventDefault()
        const res = await dispatch(login({email, password}))
        if(res.payload != undefined) {
          navigate('/profile')
        }else{
          setWrongPassword(true)
        }
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false);

    return(
        <>
            <section className="sign-in-content" style={{paddingTop: '5em'}} id="logincard">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Log In</h1>
                <form>
                    <div className="input-wrapper">
                        <label>Email</label>
                        <input type="text" id="emaillogin" value={email} onInput={e => setEmail((e.target as HTMLInputElement).value)}/>
                    </div>
                    <div className="input-wrapper">
                        <label>Password</label>
                        <input type="password" id="passwordlogin" value={password} onInput={e => setPassword((e.target as HTMLInputElement).value)}/>
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remeber-me" />
                        <label>Remember me</label>
                    </div>
                    {wrongPassword && <div style={{margin: '1em 0', color: 'red'}}>Incorrect email or password</div>}
                    <button onClick={(e: any) => loginUser(e)} className="sign-in-button">Log In</button>
                </form>
            </section>
        </>
    )
}

export default LoginContent;