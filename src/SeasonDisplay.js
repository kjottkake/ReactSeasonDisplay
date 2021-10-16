import './SeasonDisplay.css';
import React from "react";


const seasonConfig = {
    summer: {
        title: "It's summer!",
        text: "Let's hit the beach.",
        iconName: 'massive sun icon'
    },
    winter: {
        title: "It's winter!",
        text: "It's cold out, let's go skiing.",
        iconName: 'massive snowflake icon'
    }
}


const month = new Date().getMonth();
// const month = 9;

const getSeason = (lat, month) => {

    // if (month > 2 && month < 9){
    //    return lat > 0 ? 'summer' : 'winter'; //ternary expression in jsx, fancy fancy.
    // } else {
    //     return lat > 0 ? 'winter' : 'summer';
    // }

    if (lat > 0)
    {
        console.log("You are in the northern hemisphere.");
        if (month > 5 && month < 8){
            console.log("It is summer.");
            return 'summer';
        } else {
            console.log("It is winter.");
            return 'winter';
        }
    } else {
        console.log("You are in the southern hemisphere.");
        if (month > 5 && month < 8){
            console.log("It is winter.");
            return 'winter';
        } else {
            console.log("It is summer");
            return 'summer';
        }
    }
}

const SeasonDisplay = (prop) => {
   const season = getSeason(prop.lat, month);
//    const text = season === 'winter' ? 'Its cold. It is winter!' : 'It is summer! Let`s go to the beach!'
//    const icon = season === 'winter' ? 'snowflake icon' : 'sun icon';
   const {title, text, iconName} = seasonConfig[season];

    return <div className={`season-display ${season}`}>
        <i className={`icon-left ${iconName}`}></i>
        <div className='card'>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
        <i className={`icon-right ${iconName}`}></i>
        </div>;
}

export default SeasonDisplay;