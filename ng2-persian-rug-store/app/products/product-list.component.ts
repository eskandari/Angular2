import {Component} from 'angular2/core'
@Component({
    selector:'pm-products',
    templateUrl:'app/products/product-list.component.html'
})
export /**
 * ProductComponent
 */
class ProductListComponent {
    pageTitle:string = 'List of available Rugs';
    products:any[] = [
    {
        "productId": 1,
        "productName": "Farshe mashhad",
        "productCode": "mashhad-0011",
        "releaseDate": "March 19, 2016",
        "description": "Mashhad Rug.",
        "price": 2219.95,
        "starRating": 4.2,
        "imageUrl": ""
    },
    {
        "productId": 2,
        "productName": "Farshe kashan",
        "productCode": "kashan-0011",
        "releaseDate": "March 19, 2016",
        "description": "kashan Rug.",
        "price": 2219.95,
        "starRating": 4.2,
        "imageUrl": ""
    }    ];

}