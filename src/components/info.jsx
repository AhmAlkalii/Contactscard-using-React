import React from "react";

function Info(props){
    return(
        <div>
            <p className="info">{props.tel}</p>
        </div>
    );
}

function Info1(props){
    return(
        <div>
            <p className="info">{props.email}</p>
        </div>
    );
}
export {Info,Info1};
