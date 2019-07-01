define([
  'jscore/core',
  'project/regions/main/Main',
  'widgets/Button'
], function(core, Main, Button) {
 // 'use strict';
  describe("Main Region BIT", function() {

    var app, btn;

    var btn = new Button();

    beforeEach(function(done) {
      var TestApp = core.App.extend(){


      }
      }
    });

    afterEach(function() {
      app.stop();
    });


            it('In Main Region', function () {
                expect(2 + 2).to.equal(4);
            });

    it("should show all the Products from the Collection", function() {
      var productNames = document.querySelectorAll(".eaEShop-ProductWidget-name");
      expect(products.length).to.be.equal(productNames.length);
      for (var i = 0; i < productNames.length; i++) {
        var nameFromJson = products[i].name;
        var nameFromWidget = productNames[i].textContent;
        expect(nameFromJson).to.be.equal(nameFromWidget);
      }
    });
  });
});


define([
  'jscore/core',
  'project/regions/main/Main',
  'widgets/Button'
], function(core, Main, Button) {
    'use strict';
    describe("Project Main Region BIT", function() {

        var app, btn;


        beforeEach(function(done) {

            // Create a generic app with View and root DOM element.
            var TestApp = core.App.extend({

                View: core.View.extend({
                    getTemplate: function() {
                        return "<div></div>";
                    }
                }),

                onStart: function() {
                    var region = this.productsRegion = new Products({
                        context: this.getContext()
                    });
                    this.productsRegion.start(this.getElement());
                    btn = new Button();
            });
            app = new TestApp();
            app.start(document.getElementById('bitContainer'));
            done();
        });

        afterEach(function() {
            app.stop();
        });

        it("should show all the Products from the Collection", function() {
            var productNames = document.querySelectorAll(".eaEShop-ProductWidget-name");
            expect(products.length).to.be.equal(productNames.length);
            for (var i = 0; i < productNames.length; i++) {
                var nameFromJson = products[i].name;
                var nameFromWidget = productNames[i].textContent;
                expect(nameFromJson).to.be.equal(nameFromWidget);
            }
        });

        describe('Add to the Cart', function() {

            it("should add a Product to the Cart", function() {
                var productName = document.querySelector(".eaEShop-ProductWidget-name").textContent;
                clickAddToCart();

                expect(cart.getItems()).to.have.length(1);
                var item = cart.findItemByProductName(productName);
                expect(item).not.to.be.null;
                expect(item.getQuantity()).to.be.equal(1);
            });

            it("should increment item's quantity when a Product is added twice to the Cart", function() {
                var productName = document.querySelector(".eaEShop-ProductWidget-name").textContent;
                clickAddToCart();
                clickAddToCart();

                expect(cart.getItems()).to.have.length(1);
                var item = cart.findItemByProductName(productName);
                expect(item).not.to.be.null;
                expect(item.getQuantity()).to.be.equal(2);
               });

            function clickAddToCart(){
                app.getElement().find(".eaEShop-ProductWidget-add").trigger("click");
            }
            });
    });
});