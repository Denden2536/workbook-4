"use strict";

let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

const teamsList = document.getElementById("teamsList");

function init() {
  for (const team of teams) {
    const option = document.createElement("option");
    option.value = team.code;
    option.innerText = team.name;
    teamsList.appendChild(option);
  }
  const displayTeamListButton = document.getElementById(
    "displayTeamListButton"
  );
  displayTeamListButton.addEventListener("click", displayTeam);
}

function displayTeam() {
  const teamsCodeDisplay = document.getElementById("teamsCodeDisplay");
  console.log(teamsList.value);
  teamsCodeDisplay.innerText = teamsList.value
}
window.onload = init;
