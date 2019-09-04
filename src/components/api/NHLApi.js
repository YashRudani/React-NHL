import React from 'react';

class NHLApi extends React.Component{

    static getAllTeams() {
        return fetch("https://statsapi.web.nhl.com/api/v1/teams").then(resp => resp.json()); 
    }

    static getAllPlayers(teamID) {
        return fetch(`https://statsapi.web.nhl.com/api/v1/teams/${teamID}/roster`).then(resp => resp.json()) ;   
    }
}

export default NHLApi;