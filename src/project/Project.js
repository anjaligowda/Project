define([
    'jscore/core',
        'i18n!project/dictionary.json',
    'layouts/TopSection',
    './regions/main/Main',
], function (core, dictionary, TopSection, Main) {
    'use strict';

    return core.App.extend({

        onStart: function () {



            var topSection = new TopSection({
                breadcrumb:  this.options.breadcrumb,
                title: this.options.properties.title,
                context: this.getContext(),
                defaultActions: [{
                          type: 'button',
                          name: dictionary.createTeam,
                         action: function () {
                         eventBus.publish('newTeam');
                                        }
                                    }]
           });
//
            topSection.setContent(new Main({
                context: this.getContext()
            }));
            topSection.attachTo(this.getElement());
        }
    });
});
