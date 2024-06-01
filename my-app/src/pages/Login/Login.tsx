import LoginContent from "../../components/LoginContent/LoginContent";
import SigninContent from "../../components/SigninContent/SigninContent";

const Login = () => {

    return(
        <>
            <main className="main bg-dark">
                <div style={{display: 'flex', justifyContent: 'center', gap: '8em'}}>
                    <LoginContent/>
                    <SigninContent/>
                </div>
            </main>
        </>
    )
}

export default Login;