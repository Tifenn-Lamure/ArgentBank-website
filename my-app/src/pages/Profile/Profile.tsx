import Account from "../../components/Account/Account";
import { useEffect, useState } from "react";
import { selectUsername, selectFirstname, selectLastname, updateUser } from '../../features/authSlice';
import { useSelector } from 'react-redux';
import { useAppDispatch } from "../../app/hooks";


const Profile = () => {

    const [isEditProfileContentActive, setEditProfileContentActive] = useState(false);

    const username = useSelector(selectUsername)
    const firstname = useSelector(selectFirstname)
    const lastname = useSelector(selectLastname)

    const [tempUsername, setTempUsername] = useState(username);
    useEffect(() => {
        setTempUsername(username)
    }, [username])

    const dispatch = useAppDispatch()
    const saveNewUsername = async() => {
        await dispatch(updateUser(tempUsername))
        setEditProfileContentActive(false)
    }

    const cancelUsername = () => {
        setTempUsername(username)
        setEditProfileContentActive(false)
    }

    return(
        <>
            <main className="main bg-dark">
                <div className="header">
                    {!isEditProfileContentActive ? 
                        <div>
                            <h1>Welcome back<br />{firstname} {lastname}!</h1>
                            <button className="save-cancel-edit-button" onClick={() => setEditProfileContentActive(true)}>Edit Name</button>
                        </div>
                    :
                        <section className="sign-in-content" style={{margin: '2em auto'}}>   
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
                DisplayTransactionButton={true}
                ></Account>
                <Account 
                AccountName="Argent Bank Savings (x6712)"
                AccountAmount="10,928.42"
                AccountDescription="Available Balance"
                DisplayTransactionButton={true}
                ></Account>
                <Account 
                AccountName="Argent Bank Credit Card (x8349)"
                AccountAmount="184.30"
                AccountDescription="Current Balance"
                DisplayTransactionButton={true}
                ></Account>
            </main>
        </>
    )
}

export default Profile;