import React from "react";
import "./PersonCard.css";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
export default function PersonCard(props) {
  const oneStar = (
    <span>
      <FaStar></FaStar>
    </span>
  );
  const halfStar = <span></span>;
  const stars = (num) => {
    const arr = [];
    for (let i = 1; i <= num; i++) {
      arr.push(oneStar);
    }
    return arr;
  };
  const slashIndex = props.rating.indexOf("/");
  const rating = +props.rating.slice(0, slashIndex);
  let reaction;
  if (rating >= 5 && rating < 6) {
    reaction = "Decent";
  } else if (rating >= 6 && rating < 7) {
    reaction = "";
  } else if (rating >= 7 && rating < 8) {
    reaction = "good";
  } else if (rating >= 8 && rating < 9) {
    reaction = "Very Good";
  } else {
    reaction = "Wonderful";
  }
  const showRecomendation = rating >= 8 ? true : false;

  return (
    <div className="card">
      <div className="slika">
        <img src={props.imageURL} className="img" />
      </div>
      <div className="ostalo">
        <h1>{props.name}</h1>
        <p>{stars(props.stars)}</p>
        <p>{props.location}</p>
        <p
          style={{
            background: rating < 7 ? "orange" : rating < 9 ? "red" : "green",
          }}
        >
          <strong>{props.rating}</strong> <span>{reaction}</span> (
          {props.reviews} reviews)
        </p>
        {/* 1.nacin prikazivanja */}
        {showRecomendation && <p>Recomendation</p>}
        {/* 2.nacin prikazivanja */}
        {/* {showRecomendation ? <p>Recomendation</p> : <></>} */}
      </div>
    </div>
  );
}
