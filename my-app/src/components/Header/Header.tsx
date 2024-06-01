import argentBank from '../../../assets/img/argentBankLogo.png'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useAppDispatch } from "../../app/hooks";
import { selectIsAuthenticated, setAuthToken, selectUsername } from '../../features/authSlice';
import { useNavigate } from "react-router";


const Header = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const isAuth = useSelector(selectIsAuthenticated)
    const username = useSelector(selectUsername)

    const logOutUser = async() => {
        await dispatch(setAuthToken(null))
        navigate('/login')
    }

    return(
        <>
            <nav className="main-nav">
                <Link className="main-nav-logo" to={`/`}>
                    <img
                        className="main-nav-logo-image"
                        src={argentBank}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {isAuth ? 
                    <div style={{display: 'flex', gap: '1em'}}>
                        <Link className="main-nav-item" style={{fontWeight: '400'}} to={`/profile`}>
                            Bonjour {username}
                        </Link>                    
                        <div className="main-nav-item" onClick={() => logOutUser()} style={{display: 'flex', gap: '.2em', fontWeight: '400'}}>
                            <i className="fa fa-user-circle"></i>
                            <div>Log out</div>
                        </div>
                    </div>
                :
                    <div>
                        <Link className="main-nav-item" to={`/login`} style={{display: 'flex', gap: '.2em', fontWeight: '400'}}>
                            <i className="fa fa-user-circle"></i>
                            <div>Log In</div>
                        </Link>
                    </div>
                }
            </nav>
        </>
    )
}

export default Header;