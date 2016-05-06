System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var ProductService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            core_1.Injectable();
            ProductService = (function () {
                function ProductService() {
                }
                ProductService.prototype.getProducts = function () {
                    return [
                        {
                            "productId": 1,
                            "productName": "Farshe mashhad",
                            "productCode": "mashhad-0011",
                            "releaseDate": "March 19, 2016",
                            "description": "Mashhad Rug.",
                            "price": 2219.95,
                            "starRating": 1.2,
                            "imageUrl": "http://oldcarpet.com/images/persian-rugs-mashad-rug-1-250.jpg"
                        },
                        {
                            "productId": 2,
                            "productName": "Farshe kashan",
                            "productCode": "kashan-0011",
                            "releaseDate": "March 19, 2016",
                            "description": "kashan Rug.",
                            "price": 2219.95,
                            "starRating": 4.2,
                            "imageUrl": "http://oldcarpet.com/images/persian-rugs-mashad-rug-1-250.jpg"
                        }];
                };
                return ProductService;
            }());
            exports_1("ProductService", ProductService);
        }
    }
});
//# sourceMappingURL=product.service.js.map