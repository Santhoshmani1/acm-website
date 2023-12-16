import Header from "../components/header";
import Footer from "../components/footer";
import Animate from "../components/AnimateComponent";
import members from "../data/members";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

const Team = () => {
  return (
    <>
      <Header />
      <div className="team mb-10 pt-20">
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
            <div key={index} className="m-5">
              <Animate>
                <div className="member-card w-screen flex flex-col justify-evenly items-center max-w-md mx-auto p-4 m-2 border shadow-md rounded-xl shadow-slate-500">
                  <div className="member-card-header">
                    {member.profilePicture ? (
                      <img
                        src={member.profilePicture}
                        alt={member.name}
                        className="rounded-3xl p-2 w-30 h-auto"
                      />
                    ) : (
                      <>
                        <div className="h-14 w-20 bg-blue-500 text-white text-center text-4xl my-auto rounded-xl">
                          {member.name[0]}
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
                      className="member-department"
                      style={{ color: "#5f6368" }}
                    >
                      Department of {member.department}
                    </h4>
                    <div className="member-socials">
                      <div className="flex justify-evenly p-2 items-center">
                        <Link to={"https://github.com/" + member.github}>
                          <FaGithub
                            className=""
                            style={{ fontSize: "1.7rem" }}
                          />
                        </Link>
                        <Link to={"https://linkedin.com/in/" + member.linkedin}>
                          <FaLinkedin
                            style={{ fontSize: "1.7rem", color: "#069" }}
                          />
                        </Link>
                        <Link to={"https://twitter.com/" + member.twitter}>
                          <FaTwitter
                            style={{ fontSize: "1.7rem", color: "#069aed" }}
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
