define([
    'jscore/core',
    './MainView',
    '../../services/TeamsService',
    'widgets/SelectionList',
    'widgets/InlineMessage',
    'tablelib/Table',
    'i18n!project/dictionary.json'
], function (core, View, teamsService, SelectionList, InlineMessage, Table, dictionary) {
    'use strict';

    return core.Region.extend({

        view: function () {
            return new View({
            });
        },

        onStart: function () {
            View: View,
            this.initializeSelectionList();
            this.showTable();

        },
        initializeSelectionList: function () {

            this.inlineMessage = new InlineMessage({
                header: 'No Team Selected',
                description: 'Select a Team to display Team Information'
            });

            this.inlineMessage.attachTo(this.view.getInlineMessage());




            this.selectionList = new SelectionList({
                header: "Team List",
                 dropdown: {
                           caption: 'Actions',
                           items: [
                               {
                                   name: 'Remove from list', action: function () {
                                   var selectedIndexes = [];
                                   this.selectionList.getSelected().forEach(function (item) {
                                       selectedIndexes.push(item.index);
                                   }.bind(this));

                                   selectedIndexes.sort(function (a, b) {
                                       return b - a;
                                   });
                                   selectedIndexes.forEach(function (index) {
                                       this.selectionList.removeItem(index);
                                   }.bind(this));

                               }.bind(this)
                               }
                           ]
                       }
                   });

            this.selectionList.attachTo(this.view.getListDiv());
            this.selectionList.addEventHandler('change', this.removeInlineMessage.bind(this));
            this.selectionList.addEventHandler('change', this.showInfo.bind(this));

             teamsService.getTeamNames(function(data) {
             this.selectionList.setItems(data);
             }.bind(this));


        },
        showInfo: function () {
            this.view.getTableDiv().setText(JSON.stringify(this.selectionList.getSelected()));
        },

        removeInlineMessage:function(){
              this.inlineMessage.destroy();
        },

        showTable:function(){
            this.table = new Table();
            this.table.attachTo(this.view.getTableDiv());


        }
    });

});
