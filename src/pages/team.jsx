import Header from "../components/header";
import Footer from "../components/footer";
import Animate from "../components/AnimateComponent";
import members from "../data/members";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

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

        <div className="members-container lg:grid lg:grid-cols-2 lg:gap-2">
          {members.map((member, index) => (
            <div key={index} className="my-5 mx-5">
              <Animate>
                <div className="member-card max-w-4/5 flex flex-col justify-evenly items-center max-w-md mx-auto p-4 m-2 border shadow-sm rounded-xl  bg-white  shadow-blue-500">
                  <div className="member-card-header">
                    {member.profilePicture ? (
                      <img
                        src={member.profilePicture}
                        alt={member.name}
                        className="rounded-2xl p-2 w-1/2 mx-auto h-auto"
                      />
                    ) : (
                      <>
                        <div className="h-40 w-10 px-20 bg-blue-500 text-white text-center text-4xl mt-10 rounded-xl flex justify-center items-center">
                          <div className="text-5xl">{member.name[0]}</div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="member-card-body">
                    <h3 className="member-name text-center text-2xl font-semibold p-1">
                      {member.name}
                    </h3>
                    <h4 className="member-role text-lg text-center">
                      {member.role}
                    </h4>
                    <h4 className="member-year">{member.year}</h4>
                    <h4
                      className="member-department text-center"
                      style={{ color: "#5f6368" }}
                    >
                      Department of {member.department}
                    </h4>
                    <div className="member-socials">
                      <div className="flex justify-evenly p-2 items-center">
                        
                          <Link to={member.github}>
                            <FaGithub
                              className=""
                              style={{ fontSize: "1.7rem" }}
                            />
                          </Link>
                      
                          <Link
                            to={ member.linkedin}
                          >
                            <FaLinkedin
                              style={{ fontSize: "1.7rem", color: "#069" }}
                            />
                          </Link>
                        
                          <Link to={member.twitter}>
                            <FaXTwitter className="rounded-xl p-1"
                              style={{ fontSize: "1.7rem", color: "white",backgroundColor:"black" }}
                            />
                          </Link>
                        
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
