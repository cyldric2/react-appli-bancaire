import React from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import chat from "../src/img/icon-chat.png";
import money from "../src/img/icon-money.png";
import security from "../src/img/icon-security.png";
import Feature from "./components/feature";



const App = () => {

  return (
    <div>
      <Nav sign="Sign In" to="SignIN" />
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">Open a savings account with Argent Bank today!</p>
          </section>
        </div>
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Feature src={chat} title="You are our #1 priority">
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </Feature>
          <Feature src={money} title=">More savings means higher rates" >
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </Feature>
          <Feature src={security} title="Security you can trust" >
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </Feature>

        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
