import { Link } from "react-router-dom";

interface AccountProps {
    AccountName: string;
    AccountAmount: string;
    AccountDescription: string;
    DisplayTransactionButton: boolean;
}

const Account = ({AccountName, AccountAmount, AccountDescription, DisplayTransactionButton}: AccountProps) => {
    return(
        <>
            <section className="account">
                <div className="account-content-wrapper">
                    <h3 className="account-title">{AccountName}</h3>
                    <p className="account-amount">${AccountAmount}</p>
                    <p className="account-amount-description">{AccountDescription}</p>
                </div>
                <div className="account-content-wrapper cta">
                {DisplayTransactionButton ?
                    <Link to={'/transaction'}>
                        <button className="save-cancel-edit-button">View transactions</button>
                    </Link>
                    :
                    <Link to={'/profile'} style={{textDecoration: 'none'}}>
                        <i className="fa fa-close closeCross"></i>
                    </Link>
                }
                </div>
            </section>
        </>
    )
}

export default Account;