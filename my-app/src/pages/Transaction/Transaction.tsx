import Account from "../../components/Account/Account";
import styled from "styled-components";

import Dropdown from "../../components/Dropdown/Dropdown"

const AccountStyle = styled.div `
    margin : 50px 0 50px 0;
`


const Transaction = () => {

    return(
        <>
            <main className="main bg-dark">
                <AccountStyle>
                    <Account
                    AccountName="Argent Bank Checking (x8349)"
                    AccountAmount="2,082.79"
                    AccountDescription="Available Balance"
                    DisplayTransactionButton={false}
                    ></Account>
                </AccountStyle>
                <section className="Array">
                    <div className="ArrayHead">
                        <div className="arrayTitle">Date</div>
                        <div className="arrayTitle">Description</div>
                        <div className="arrayTitle">Amount</div>
                        <div className="arrayTitle">Balance</div>
                    </div>
                </section>
                <Dropdown
                    transactionDate= "27/02/2020"
                    transactionDescription="Golden Sun Bakery"
                    transactionAmount="$8.00" 
                    transactionBalance="$298.00"
                    transactionType="Electronic"
                    transactionCategory="Food"
                    transactionNote="lorem ipsum"
                ></Dropdown>
                <Dropdown
                    transactionDate= "27/02/2020"
                    transactionDescription="Golden Sun Bakery"
                    transactionAmount="$8.00" 
                    transactionBalance="$298.00"
                    transactionType="Electronic"
                    transactionCategory="Food"
                    transactionNote="lorem ipsum"
                ></Dropdown>
            </main>
        </>
    )
}

export default Transaction;