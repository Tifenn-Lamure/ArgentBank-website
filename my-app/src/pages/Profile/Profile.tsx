import Account from "../../components/Account/Account";
import { useState } from "react";
import { selectUsername, selectFirstname, selectLastname, setAuthToken, setUsername } from '../../features/authSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from "../../app/hooks";


const Profile = () => {

    const [isSignInContentActive, setSignInContentActive] = useState(false);

    const username = useSelector(selectUsername)
    const firstname = useSelector(selectFirstname)
    const lastname = useSelector(selectLastname)

    const [tempUsername, setTempUsername] = useState(username);

    const dispatch = useAppDispatch()
    const saveNewUsername = async() => {
        //à terme, modifier la fonction du store pour qu'elle utilise un thunk asynchrone
        //et fasse un appel API pour mettre à jour l'utilisateur en DB
        await dispatch(setUsername(tempUsername))
        setSignInContentActive(false)
    }

    const cancelUsername = () => {
        setTempUsername(username)
        setSignInContentActive(false)
    }

    return(
        <>
            <main className="main bg-dark">
                <div className="header">
                    {!isSignInContentActive ? 
                        <div>
                            <h1>Welcome back<br />{firstname} {lastname}!</h1>
                            <button className="save-cancel-edit-button" onClick={() => setSignInContentActive(true)}>Edit Name</button>
                        </div>
                    :
                        <section className="sign-in-content">   
                            <form>
                                <div className="input-edit-name edit-name-text">
                                    <label>
                                        User name:<input type="text" id="username" value={tempUsername}  onInput={e => setTempUsername((e.target as HTMLInputElement).value)}/>
                                    </label>
                                </div>
                                <div className="input-edit-name edit-name-text">
                                    <label>
                                        First name:<input type="text" id="firstName" value={firstname} readOnly className="read-only-input"/>
                                    </label>
                                </div>
                                <div className="input-edit-name edit-name-text ">
                                    <label>
                                        Last name:<input type="text" id="lastName" value={lastname} readOnly className="read-only-input"/>
                                    </label>
                                </div>
                            </form>
                            <div className="save-cancel-button-display">
                                <button className="save-cancel-edit-button" onClick={() => saveNewUsername()}>Save</button>
                                <button className="save-cancel-edit-button" onClick={() => cancelUsername()}>Cancel</button>
                            </div>
                        </section>
                    }
                </div>
                <h2 className="sr-only">Accounts</h2>
                <Account 
                AccountName="Argent Bank Checking (x8349)"
                AccountAmount="2,082.79"
                AccountDescription="Available Balance"
                ></Account>
                <Account 
                AccountName="Argent Bank Savings (x6712)"
                AccountAmount="10,928.42"
                AccountDescription="Available Balance"
                ></Account>
                <Account 
                AccountName="Argent Bank Credit Card (x8349)"
                AccountAmount="184.30"
                AccountDescription="Current Balance"
                ></Account>
            </main>
        </>
    )
}

export default Profile;