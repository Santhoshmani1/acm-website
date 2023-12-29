import Header from "../components/header";
import Footer from "../components/footer";
import {ExecutiveTeam,AssociateTeam,MarketingTeam,developmentTeam} from "../data/members";
import Member from "../components/member";

const Team = () => {
  return (
    <>
      <Header />
      <div className="team pb-10 pt-20 mx-auto bg-gray-200">
        <h2
          className="text-4xl text-center p-2 mb-5  font-bold leading-loose"
          style={{
            color: "#202124",
            fontFamily: "Roboto",
            letterSpacing: "0.4px",
          }}
        >
          Meet the Team
        </h2>

          <h3 className="p-2 text-xl font-bold text-center leading-loose" style={{fontFamily:"Montserrat"}}>Executive Team</h3>
        <div className="executives-container lg:grid lg:grid-cols-3 lg:gap-2 flex flex-col justify-center items-center">
          {ExecutiveTeam.map((member,index) => (
            <Member member={member} key={index}/>
          ))}
        </div>

        <h3 className="p-2 text-xl font-bold text-center leading-loose" style={{fontFamily:"Montserrat"}}>Associate Team</h3>
        <div className="associates-container flex flex-col lg:flex-row justify-center items-center mx-auto">
          {AssociateTeam.map((member,index) => (
            <Member member={member} key={index}/>
          ))}
          </div>

          <h3 className="p-2 text-xl font-bold text-center leading-loose" style={{fontFamily:"Montserrat"}}>Marketing Team</h3>
        <div className="marketing-container flex flex-col lg:flex-row justify-center items-center mx-auto">
          {MarketingTeam.map((member,index) => (
            <Member member={member} key={index}/>
          ))}
          </div>

          <h3 className="p-2 text-xl font-bold text-center leading-loose" style={{fontFamily:"Montserrat"}}>Development Team</h3>
        <div className="development-container flex flex-col lg:flex-row justify-center items-center mx-auto">
          {developmentTeam.map((member,index) => (
            <Member member={member} key={index}/>
          ))}
          </div>

      </div>
      <Footer />
    </>
  );
};

export default Team;
