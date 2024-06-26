import AdvantagesCard from "../../components/AdvantagesCard/AdvantagesCard"
import chatIcon from "../../../assets/img/icon-chat.png";
import iconMoney from "../../../assets/img/icon-money.png";
import iconSecurity from "../../../assets/img/icon-security.png";

const Home = () => {
    return(
        <>
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
                <AdvantagesCard
                    IconSrc={chatIcon}
                    AdvantagesTitle="You are our #1 priority"
                    AdvantagesText="Need to talk to a representative? You can get in touch through our
                    24/7 chat or through a phone call in less than 5 minutes."
                ></AdvantagesCard>
                <AdvantagesCard
                    IconSrc={iconMoney}
                    AdvantagesTitle="More savings means higher rates"
                    AdvantagesText=" The more you save with us, the higher your interest rate will be!"
                ></AdvantagesCard>
                <AdvantagesCard
                    IconSrc={iconSecurity}
                    AdvantagesTitle="Security you can trust"
                    AdvantagesText="We use top of the line encryption to make sure your data and money
                    is always safe."
                ></AdvantagesCard>
            </section>
                
        </>
    )
}

export default Home;