define([
    'jscore/core',
    'text!./_project.html',
    'styles!./_project.less'
], function(core, template, styles) {
    'use strict';

    return core.View.extend({

        getTemplate: function(){
            console.log("am in getTemplate function")
            return template;
        },
        getStyle: function(){
            return styles;
        },
        getMain: function () {
        console.log("am in getMain function")
            return this.getElement().find('eaProject-main');
        }
    });
});