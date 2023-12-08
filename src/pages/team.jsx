/* eslint-disable react/jsx-key */
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import Header from "../components/header";
import Footer from "../components/footer";

const members = [
  {
    name: "Santhosh Mani",
    profilePicture:
      "https://avatars.githubusercontent.com/u/119673958?s=96&v=4",
    role: "Web Master",
    department: "Electronics & Communications",
    github: "Santhoshmani1",
    linkedin: "santhoshmanip",
    twitter: "SanthoshMani_P",
  },
  {
    name: "Varaha sai Dhuli",
    profilePicture: "https://avatars.githubusercontent.com/",
    role: "Chair Person",
    department: "Computer science and Engineering",
    github: "varahasai",
    linkedin: "varaha-sai-dhuli",
    twitter: "VarahaSaiDhuli",
  },
];

const Team = () => {
  return (
    <>
      <Header />
      <div className="team">
        <h2
          className="text-4xl text-center p-2 mb-5  font-bold leading-loose"
          style={{
            color: "#202124",
            fontFamily: "Roboto",
            letterSpacing: "0.4px",
          }}
        >
          Our Team
        </h2>

        <div className="members-container">
          {members.map((member) => (
            <div className="member-card w-screen flex flex-col justify-evenly items-center max-w-md mx-auto p-4 m-2 border shadow-md rounded-xl shadow-slate-500">
              <div className="member-card-header">
                <img
                  src={member.profilePicture}
                  alt={member.name}
                  className="rounded-3xl p-2"
                />
              </div>
              <div className="member-card-body">
                <h3 className="member-name text-center text-2xl font-semibold p-1">
                  {member.name}
                </h3>
                <h4 className="member-role text-lg text-center">
                  {member.role}
                </h4>
                <h4 className="member-year">{member.year}</h4>
                <h4 className="member-department" style={{ color: "#5f6368" }}>
                  Department of {member.department}
                </h4>
                <div className="member-socials">
                  <div className="flex justify-evenly p-2 items-center">
                    <a href={"https://github.com/" + member.github}>
                      <FaGithub className="" style={{ fontSize: "1.7rem" }} />
                    </a>
                    <a href={"https://linkedin.com/" + member.linkedin}>
                      <FaLinkedin
                        style={{ fontSize: "1.7rem", color: "#069" }}
                      />
                    </a>
                    <a href={"https://twitter.com/" + member.twitter}>
                      <FaTwitter
                        style={{ fontSize: "1.7rem", color: "#069aed" }}
                      />
                    </a>
                  </div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
