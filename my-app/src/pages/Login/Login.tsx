import LoginContent from "../../components/LoginContent/LoginContent";
import SigninContent from "../../components/SigninContent/SigninContent";
import styled from "styled-components";

const LoginCardFLex = styled.div`
    display: flex;
    justify-content: center;
    gap: 8em;

    @media screen and (max-width: 768px){
       flex-direction: column-reverse; 
       align-items: center;
       margin: 20px; 
       gap: 1rem;
    }    
`

const Login = () => {

    return(
        <>
            <main className="main bg-dark">
                <LoginCardFLex>
                    <LoginContent/>
                    <SigninContent/>
                </LoginCardFLex>
            </main>
        </>
    )
}

export default Login;