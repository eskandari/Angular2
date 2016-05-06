import {Injectable} from 'angular2/core';
import {IProduct} from './product'

Injectable()
export class ProductService{ 
    getProducts():IProduct[]{
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
            }    ];
    }
}