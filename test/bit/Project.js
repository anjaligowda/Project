/*global define, describe, before, after, beforeEach, afterEach, it, expect */
define([
    'project/Project',
     'jscore/core',
      'project/regions/main/Main',
      'widgets/Button'
], function (Project, core, Main, Button) {

    var app,btn;
    beforeEach(function(done){
        var TestApp = core.App.extend({

        View:core.View.extend({
            getTemplate:function(){
            return "<div></div>";
            }
            }),

        onStart:function(){
        this.button = new Button();
        this.button.attachTo(this.getElement());
        btn=this.button;

        }

        });

        app = new TestApp();
        app.start(document.getElementById('bitContainer'));
        done();
    }),

        afterEach(function(){
        app.stop();
    });

    describe('Project', function () {

        it('In Project BIT test', function () {
            expect(2 + 2).to.equal(4);
        });

    });

        describe('Main Region', function () {

            it('In Region BIT test', function () {
                expect(2 + 2).to.equal(4);
            });

            it('Clear Button is Disabled by default', function () {
                var btn = document.querySelector(".eaProject");

                expect(btn).to.equal(null);
                        });


        });

});