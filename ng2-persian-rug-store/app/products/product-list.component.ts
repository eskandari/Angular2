import {Component, OnInit} from 'angular2/core'
import {IProduct} from './product'
import {ProductFilterPipe} from './product-filter.pipe'
import {StarComponent} from '../shared/star.component'

@Component({
    selector:'pm-products',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css'],
    pipes:[ProductFilterPipe],
    directives:[StarComponent]
})
export /**
 * ProductComponent
 */
class ProductListComponent  implements OnInit{
    pageTitle:string = 'List of available Rugs';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'mashhad';
    products:IProduct[] = [
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
    }    ];
    
    toggleImage():void{
        this.showImage = !this.showImage;
    }
    
    ngOnInit():void{
        console.log('on init');
    }
    
    onRatingClicked(message:string):void{
        this.pageTitle = message;
    }

}