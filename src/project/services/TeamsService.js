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

    return {
//        getTeams: getTeams,
        getTeamNames: getTeamNames,
        getTeamDetails: getTeamDetails
    };
});
