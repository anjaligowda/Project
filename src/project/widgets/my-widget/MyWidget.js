define([
    'jscore/core',
    './MyWidgetView',
    '../../services/TeamsService'
], function (core, View, teamsService) {
    'use strict';

    /**
     * Basic widget template.
     *
     * Create your custom template in seconds using the live template feature provided by different tools.
     */

    return core.Widget.extend({

        View: View,

        onViewReady: function () {
            this.view.getButton().addEventHandler('click', this.sendMessage, this);

        },



        sendMessage: function () {


            var teamName = this.view.getTeamName().getValue(),
                membsersName = this.view.getTeamMembersName().getValue(),
                projectName = this.view.getProjectName().getValue(),
                reposName = this.view.getReposName().getValue();
            var msg = teamName + membsersName + projectName + reposName;

                alert(msg)
                alert(this.getElement())


                //POST REST REQUEST
                teamsService.addTeam(function(data) {
              //
                }.bind(this));

//              //GET REST REQUEST Used for Populating TeamList
//             teamsService.getTeamNames(function(data) {
//             this.selectionList.setItems(data);
//             }.bind(this));


            /* var messageInputElt = this.view.getMessage(),
                msg = messageInputElt.getValue(),
                formData = new FormData();
            if (!msg) {
                alert('Empty message!');
                return;
            }
            messageInputElt.setValue('');
            formData.append('message', msg);
        	messageService.sendMessage(formData, this.addNewMessage.bind(this)); */

        },
        onDestroy: function () {

        }

    });

});