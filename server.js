 var teams= [{
                                name: 'Team 1',
                                numMembers: 6,
                                teamArea: 'Release Verification'
                            }, {
                                name: 'Team 2',
                                numMembers: 4,
                                teamArea: 'Fault Management'
                            }, {
                                name: 'Team 3',
                                numMembers: 8,
                                teamArea: 'Performance Management'
                           }, {
                                name: 'Team 4',
                                numMembers: 7,
                                teamArea: 'UI SDK'
                           },{
                                name: 'Team 5',
                                numMembers: 5,
                                teamArea: 'Configuration Management'
                           },{
                                name: 'Team 6',
                                numMembers: 8,
                                teamArea: 'Customer Support'
                           },{
                                name: 'Team 7',
                                numMembers: 7,
                                teamArea: 'Product Introduction'
                           }]


var teamDetailsList=[];
var numTeams=teams.length;
for (i=0; i <numTeams; i++){
        var teamDetails= {name: teams[i].name, numMembers: teams[i].numMembers, teamArea: teams[i].teamArea};
        teamDetailsList.push(teamDetails);
//        console.log(teamDetailsList[0])
//        console.log(teamDetailsList.length)
}


//           for (var i = 1; i <= 2; i++) {
//            //    var itemValue = 'item' + i,
//                   var item = {name: 'Team Name ' + i};
//             //       item = {name: 'Team Name ' + i, value: itemValue, selected: false};
//
//             //   colorMap[itemValue] = colorsRange[Math.min(colorsRange.length - 1, i - 1)];
//                items.push(item);
//                console.log(items)
//            }

module.exports = function (app) {
//
//    app.get("/teams", function (req, res) {
//        res.set('Content-Type', 'application/json');
//        res.send(JSON.stringify(data));
//    });

    app.get("/teamNames", function (req, res) {
        res.set('Content-Type', 'application/json');
        res.send(teamDetailsList);
    });
//
//    app.get("/teamDetails/:team", function (req, res){
//        res.set('Content-Type', 'application/json');
//        var data = getTeamDetails(teams, req.params.team);
//        res.send(JSON.stringify(data));
//    });

//    function getTeamDetails(teams, team) {
//        var result;
//        for (var i = 0; i < teams.length; i++) {
//            if (teams[i].teamName === team) {
//                result = teams[i];
//            }
//        }
//        return result;
//    }


};

