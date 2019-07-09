define([
    'jscore/core',
        'i18n!project/dictionary.json',
    'layouts/TopSection',
    './regions/main/Main',
    'container/api',
    './widgets/my-widget/MyWidget'
], function (core, dictionary, TopSection, Main, container, MyWidget) {
    'use strict';

    return core.App.extend({

        onStart: function () {
            var eventBus = this.getEventBus();
            var topSection = new TopSection({
                breadcrumb:  this.options.breadcrumb,
                title: this.options.properties.title,
                context: this.getContext(),
                defaultActions: [{
                          type: 'button',
                          name: dictionary.createTeam,
                          action: function () {
                          container.getEventBus().publish('flyout:show',{
                                header: dictionary.createTeam,
                                width: '400px',
                                content:new MyWidget()
                                });
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
