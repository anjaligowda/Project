define([
    'jscore/core',
    './MainView',
    '../../services/TeamsService',
    'widgets/SelectionList',
    'widgets/InlineMessage',
    'widgets/Button',
    'tablelib/Table',
    'tablelib/plugins/ColorBand',
    '../../widgets/addwidget/AddWidget',
     'container/api',
    'i18n!project/dictionary.json'
], function (core, View, teamsService, SelectionList, InlineMessage, Button, Table,ColorBand, AddWidget, container, dictionary) {
    'use strict';

    return core.Region.extend({

        view: function () {
            return new View({
            });
        },

        onStart: function () {
            this.initializeSelectionList();

        },
        initializeSelectionList: function () {

            this.inlineMessage = new InlineMessage({
                header: 'No Team Selected',
                description: 'Select a Team to display Team Information'
            });

            this.inlineMessage.attachTo(this.view.getInlineMessage());


            this.table = new Table({
                modifiers: [
                   {name: 'striped'}
                ],
                        plugins: [
                                    new ColorBand({
                                        color: function (row) {
                                            return row.getData().color;
                                        }
                                    })
                                ],
                data: [
                    ],
                columns: [
                    {title: 'Team Name', attribute: 'name', width: '100px'},
                    {title: 'Members', attribute: 'numMembers', width: '100px'},
                    {title: 'Team Area', attribute: 'teamArea', width: '100px'}
                ]
            });




            this.selectionList = new SelectionList({
                header: "Team List",
                 dropdown: {
                           caption: 'Actions',
                           color: 'darkBlue',
                           items: [
                               {
                                   name: 'Remove from list', action: function () {
                                   var selectedIndexes = [];
                                   this.selectionList.getSelected().forEach(function (item) {
                                       selectedIndexes.push(item.index);
                                   }.bind(this));

                                   selectedIndexes.forEach(function (index) {
                                       this.selectionList.removeItem(index);
                                   }.bind(this));

                               }.bind(this)
                               }
                           ]
                       }
                   });

            this.button = new Button({
                caption: 'Clear Table Info',
                    modifiers: [{
                        name: 'disabled'
                    }, {
                        name: 'color',
                        value: 'green'
                    }]
            });

            this.table.attachTo(this.view.getTableDiv());
            this.button.attachTo(this.view.getClearTableBtn());
            this.selectionList.attachTo(this.view.getListDiv());
            this.selectionList.addEventHandler('change', this.removeInlineMessage.bind(this));
            this.selectionList.addEventHandler('change', this.showTable.bind(this));
            this.selectionList.addEventHandler('change', this.enableButton.bind(this));
            this.button.addEventHandler('click', this.clearInfo.bind(this));

            //Populates SelectionList
             teamsService.getTeamNames(function(data) {
             this.selectionList.setItems(data);
             }.bind(this));

        },

//
//        addConfigScreen: function () {
//                    alert("am heer")
//                    if (this.addConfig === undefined) {
//                        // the flyout does not destroy the widget,
//                        // keep the instance and update it
//                        this.addWidget = new AddWidget();
//                        // listen to the add event and add the selected widget
//                        this.addWidget.addEventHandler('add', onWidgetAdd, this);
//                        this.addWidget.addEventHandler('cancel', hideFlyout.bind(this));
//                    }


        removeInlineMessage:function(){
              this.inlineMessage.destroy();
        },
        clearInfo:function(){
               this.table.clear();
               this.button.disable();
        },
        enableButton:function(){
               this.button.enable();
        },

        showTable:function(){
          // this.table.clear();
          // var teamData = {"name":"Team 1","numMembers":6,"teamArea":"Release Verification","selected":true,"index":0};
           var teamData = JSON.stringify(this.selectionList.getSelected());
           var parsedData = JSON.parse(teamData);
           this.table.addRow(parsedData[0]);

        }
//        showInfo: function () {
//                    //shows data array for selected Team
//                    var teamData = JSON.stringify(this.selectionList.getSelected());
//                    //var teamData = {"name":"Team 1","numMembers":6,"teamArea":"Release Verification","selected":true,"index":0
//                    var parsedData = JSON.parse(teamData);
//                    //console.log(parsedData);
//                    this.view.getInfoSelectedDiv().setText(parsedData);
//                },

    });

});
