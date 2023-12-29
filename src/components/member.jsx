/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Animate from "./AnimateComponent";

const Member = ({ member }) => {
  const {name,profilePicture,role,department,github,twitter,linkedin,year,} = member;
  console.log(name);
  return (
    <>
      <Animate>
        <div className="member-card max-w-4/5 flex flex-col justify-evenly items-center max-w-md mx-auto p-2 m-2 border shadow-sm rounded-xl  bg-white  shadow-blue-500">
          <div className="member-card-header">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt={name}
                className="rounded-2xl p-2 w-1/2 mx-auto h-auto"
              />
            ) : (
              <>
                <div className="h-40 w-10 px-10 bg-blue-500  text-center text-4xl mt-10 rounded-xl flex justify-center items-center">
                  <div className="text-5xl">{name[0]}</div>
                </div>
              </>
            )}
          </div>
          <div className="member-card-body">
            <h3 className="member-name text-center text-2xl font-bold p-1" style={{fontFamily:"Montserrat"}}>
              {name}
            </h3>
            <h4 className="member-role text-lg text-center">{role}</h4>
            <h4 className="member-year">{year}</h4>
            <h4
              className="member-department text-center"
              style={{ color: "#5f6368" }}
            >
              Department of {department}
            </h4>
            <div className="member-socials">
              <div className="flex justify-evenly p-2 items-center">
                {github !=='' && (
                  <Link to={github}>
                    <FaGithub className="" style={{ fontSize: "1.7rem" }} />
                  </Link>
                )}

                <Link to={linkedin}>
                  <FaLinkedin style={{ fontSize: "1.7rem", color: "#069" }} />
                </Link>

                {twitter && (
                  <Link to={twitter}>
                    <FaXTwitter className="" style={{ fontSize: "1.7rem" }} />
                  </Link>
                )}
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </Animate>
    </>
  );
};

export default Member;
