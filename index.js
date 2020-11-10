import { fifaData } from './fifa.js';

// SAMPLE DATA //
// {
//     "Year": 1930,
//     "Datetime": "13 Jul 1930 - 15:00",
//     "Stage": "Group 1",
//     "Stadium": "Pocitos",
//     "City": "Montevideo",
//     "Home Team Name": "France",
//     "Home Team Goals": 4,
//     "Away Team Goals": 1,
//     "Away Team Name": "Mexico",
//     "Win conditions": "",
//     "Attendance": 4444,
//     "Half-time Home Goals": 3,
//     "Half-time Away Goals": 0,
//     "Referee": "LOMBARDI Domingo (URU)",
//     "Assistant 1": "CRISTOPHE Henry (BEL)",
//     "Assistant 2": "REGO Gilberto (BRA)",
//     "RoundID": 201,
//     "MatchID": 1096,
//     "Home Team Initials": "FRA",
//     "Away Team Initials": "MEX"
//   },

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/
// FILTER

const Finals2014 = fifaData.filter((item) => {
    return item.Year === 2014 && item.Stage === "Final";
});
// console.log(Finals2014[0]);
// //(a) Home Team name for 2014 world cup final
// console.log(Finals2014[0]['Home Team Name']);
// //(b) Away Team name for 2014 world cup final
// console.log(Finals2014[0]['Away Team Name']);
// //(c) Home Team goals for 2014 world cup final
// console.log(Finals2014[0]['Home Team Goals']);
// //(d) Away Team goals for 2014 world cup final
// console.log(Finals2014[0]['Away Team Goals']);
// //(e) Winner of 2014 world cup final */
// console.log(Finals2014[0]['Win conditions']);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
   const finalsOnly = data.filter((item) => {
       return item.Stage === "Final";
   });
   return finalsOnly;
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data, getFinalsCB) {
    const Finals = getFinalsCB(data);
    const Years = Finals.map((item) => {
        return item.Year;
    });
    return Years;
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, getFinalsCB) {
    const Finals = getFinalsCB(data);
    const winners = Finals.map((item) => {
        if (item['Home Team Goals'] > item['Away Team Goals']) {
            return item['Home Team Name'];
        } else if (item['Away Team Goals'] === item['Home Team Goals']){
            return `It was a tie between ${item['Home Team Name']} and ${item['Away Team Goals']}`;
        } else {
            return item['Away Team Name'];
        }
    });
    return winners;
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(data, getYearsCB, getWinnersCB) {
    const winners = getWinnersCB(data);
    const years = getYearsCB(data);
    const finalArr = [];
    winners.forEach((item, index) => {
        finalArr.push(`In ${years[index]}, ${item} won the world cup!`);
    });
    return finalArr;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
   const totalGoals = data.reduce((accumulator, item) => {
    return accumulator + item["Home Team Goals"] + item["Away Team Goals"];
   },0);
   return (totalGoals/data.length).toFixed(2);
}


/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}