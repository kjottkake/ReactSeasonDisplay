import React from "react";


const seasonConfig = {
    summer: {
        text: "Let's hit the beach.",
        iconName: 'sun icon'
    },
    winter: {
        text: "It's cold out, let's go skiing.",
        iconName: 'snowflake icon'
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
   const {text, iconName} = seasonConfig[season];
   
    return <div>
        <i className={iconName}></i>
        <h1>{text}</h1>
        <i className={iconName}></i>
        </div>;
}

export default SeasonDisplay;