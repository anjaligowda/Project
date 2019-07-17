define([
    'jscore/core',
    './MyWidgetView'
], function (core, View) {
    'use strict';

    /**
     * Basic widget template.
     *
     * Create your custom template in seconds using the live template feature provided by different tools.
     */

    return core.Widget.extend({

        View: View,

        onViewReady: function () {
            var counter =0;
           // alert(counter)
           
              this.view.getButton().addEventHandler('click', function(){
                var str1= '';
             
                  var teamName = this.view.getTeamName().getValue(),
                  membsersName = this.view.getTeamMembersName().getValue(),
                  projectName = this.view.getProjectName().getValue(),
                  reposName = this.view.getReposName().getValue();
                  for(var i=1 ; i<=counter; i++){
                    str1 +=this.view.getElement().find('.ebInput'+i).getValue()+ "  ";
                    
                  
                  }
                  //alert(str1)
                 // console.log(teamName+"   "+membsersName+" "+str1+" "+projectName+" "+reposName);
                  alert(teamName+"   "+membsersName+" "+str1+" "+projectName+" "+reposName)
              }, this);

              
              this.view.getAppendButton().addEventHandler('click', function(){
              counter++;
              var input = document.createElement("input");
                       
              input.type = 'text';
              input.className = 'ebInputm ebInput ebInput_labeled_top eb_wMargin  ebInput'+counter;
              input.placeholder = 'Type' + counter;
              this.view.getInputForm().getNative().append(input);
            }, this);

            this.view.getDeleteButton().addEventHandler('click', function(){
                 counter;
                var ele = this.view.getElement().find('.ebInput'+counter);
                alert(counter)
                ele.getNative().remove();
                counter--;

            },this);
            this.view.getButton().addEventHandler('click', this.sendMessage, this);

        },
        
       
        onDestroy: function () {

        }

    });

});
