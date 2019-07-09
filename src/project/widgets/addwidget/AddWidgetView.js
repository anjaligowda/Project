define([
    'jscore/core',
    'template!./_addWidget.hbs',
    'styles!./_addWidget.less'
], function (core, template, styles) {
    'use strict';

    var _prefix = '.eaDashboard-wAddWidget';

    return core.View.extend({

        getTemplate: function () {
            return template(this.options);
        },
        getStyle: function () {
            return styles;
        },
        getWidgetSelect: function () {
            return this.getElement().find(_prefix + '-widgetSelect');
        },
        getColumnSelect: function () {
            return this.getElement().find(_prefix + '-columnSelect');
        },
        getApplyButton: function () {
            return this.getElement().find(_prefix + '-apply');
        },
        getCancelButton: function () {
            return this.getElement().find(_prefix + '-cancel');
        }
    });
});