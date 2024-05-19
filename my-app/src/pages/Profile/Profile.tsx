import Account from "../../components/Account/Account";

const Profile = () => {
    return(
        <>
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br />Tony Jarvis!</h1>
                    <button className="save-cancel-edit-button">Edit Name</button>
                    <section className="sign-in-content">   
                        <form>
                            <div className="input-edit-name edit-name-text">
                                <label>
                                    User name:<input type="text" id="username" />
                                </label>
                            </div>
                            <div className="input-edit-name edit-name-text">
                                <label>
                                    First name:<input type="text" id="firstName" />
                                </label>
                            </div>
                            <div className="input-edit-name">
                                <label className="edit-name-text">
                                    Last name:<input type="text" id="lastName" />
                                </label>
                            </div>
                        </form>
                        <div className="save-cancel-button-display">
                            <button className="save-cancel-edit-button">Save</button>
                            <button className="save-cancel-edit-button">Cancel</button>
                        </div>
                    </section>
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