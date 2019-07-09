define([
    'jscore/core',
    'template!./_main.html',
    'styles!./_main.less'
], function (core, template, style) {
    'use strict';

    return core.View.extend({

        getTemplate: function () {
            return template(this.options);
        },
        getStyle: function () {
            return style;
        },
        getListDiv: function () {
            return this.getElement().find('.eaProject-main-list');
        },
        getInlineMessage: function () {
            return this.getElement().find('.eaProject-main-inlineMessage');
        },
        getInfoSelectedDiv: function () {
            return this.getElement().find('.eaProject-content');
        },
        getTableDiv: function () {
            return this.getElement().find('.eaProject-table');
        },
        getClearTableBtn: function () {
            return this.getElement().find('.eaProject-clearTableButton');
        },
    });

});
