define([
    'jscore/ext/net',
], function (net) {
    'use strict';

//    function getTeams(fn) {
//        net.ajax({
//            url: "/teams",
//            type: "GET",
//            dataType: "json",
//            success: fn,
//            error:fn
//        });
//    }

    function getTeamNames(fn) {
        net.ajax({
            url: "/teamNames",
            type: "GET",
            dataType: "json",
            success: fn,
            error:fn
        });
    }

    function getTeamDetails(fn, teamName) {
        net.ajax({
            url: "/teamDetails",
            type: "GET",
            dataType: "json",
            success: fn,
            error:fn
        });
    }

    function addTeam(data, fn) {
        net.ajax({
            url: "/addTeam",
            type: "POST",
            contentType:"json",
            dataType: "json",
            data:JSON.stringify(data),
            success: fn,
            error:fn
        });
        console.log("In addTeam Method in TeamService.js")
    }

    return {
//        getTeams: getTeams,
        getTeamNames: getTeamNames,
        getTeamDetails: getTeamDetails,
        addTeam:addTeam
    };
});
