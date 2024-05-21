import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router";

const Login = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const signInUser = async (e: any) => {
        e.preventDefault()
        const res = await dispatch(login({username, password}))
        if(res.payload != undefined) {
            navigate('/profile')
        }else{
            setWrongPassword(true)
        }
    }

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [wrongPassword, setWrongPassword] = useState(false);

    return(
        <>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label>Username</label>
                            <input type="text" id="username" value={username} onInput={e => setUsername((e.target as HTMLInputElement).value)}/>
                        </div>
                        <div className="input-wrapper">
                            <label>Password</label>
                            <input type="password" id="Password" value={password} onInput={e => setPassword((e.target as HTMLInputElement).value)}/>
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remeber-me" />
                            <label>Remember me</label>
                        </div>
                        {wrongPassword && <div style={{margin: '1em 0', color: 'red'}}>Identifiant ou mot de passe incorrect</div>}
                        <button onClick={(e: any) => signInUser(e)} className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        </>
    )
}

export default Login;