import React from "react";

// const month = new Date().getMonth();
const month = 9;

const getSeason = (lat, month) => {
    if (lat > 0)
    {
        console.log("You are in the northern hemisphere.");
        if (month > 5 && month < 8){
            console.log("It is summer.");
        } else {
            console.log("It is winter.");
        }
    } else {
        console.log("You are in the southern hemisphere.");
        if (month > 5 && month < 8){
            console.log("It is winter.");
        } else {
            console.log("It is summer");
        }
    }
}

const SeasonDisplay = (prop) => {
    getSeason(prop.lat, month);

    return <div>
        Your Latitude: {prop.lat}
        </div>;
}

export default SeasonDisplay;