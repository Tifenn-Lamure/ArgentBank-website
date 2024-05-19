import { Link } from "react-router-dom";

interface AccountProps {
    AccountName: string;
    AccountAmount: string;
    AccountDescription: string;
}




const Account = ({AccountName, AccountAmount, AccountDescription}: AccountProps) => {
    return(
        <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{AccountName}</h3>
                    <p className="account-amount">${AccountAmount}</p>
                    <p className="account-amount-description">{AccountDescription}</p>
                </div>
                <div className="account-content-wrapper cta">
                    <Link to={'/transaction'}>
                        <button className="save-cancel-edit-button">View transactions</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Account;