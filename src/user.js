import React from "react";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Post from "./components/Post"
import { useSelector } from "react-redux";
import { getPosts } from "./actions/post.action";
import store from "./store";

store.dispatch(getPosts())

const User = () => {
    const email = useSelector((state) => state.User.postReducer.body.email);
    console.log(email);
    const firstName = useSelector((state) => state.User.postReducer.body.firstName);
    const lastName = useSelector((state) => state.User.postReducer.body.lastName);
    const userName = useSelector((state) => state.User.postReducer.body.userName);

    return (
        <div className="bg-dark">
            <Nav name={firstName} sign="Sign Out" icone={faRightFromBracket} to="/" />
            <main >
                <Post email={email} firstName={firstName}
                    lastName={lastName} userName={userName} />
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default User;