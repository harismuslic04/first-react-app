import React from "react";
import "./PersonCard.css";
import { FaGithub } from "react-icons/fa";

export default function PersonCard(props) {
  return (
    <div className="card">
      <div className="firstPart">
        <img src={props.imageURL} alt={"profile_img"} className="img" />
        <h2>{props.fullName}</h2>
        <h3>{props.location}</h3>
      </div>
      <div className="secondPart">
        <p>{props.description}</p>
        <a
          href={props.goToRepositories}
          target="blank"
          style={{ color: "darkblue" }}
          className="gitHub"
        >
          <FaGithub style={{ width: "50px", height: "50px" }} />
        </a>
      </div>
    </div>
  );
}
