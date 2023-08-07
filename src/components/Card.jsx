import React from "react";
import Avatar from "./avatar";
import { Info,Info1 } from "./info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Info tel={props.tel}/>
        <Info1 email={props.email}/>
      </div>
    </div>
  );
}

export default Card;
