import {Component} from 'angular2/core';

@Component({
    selector:'productDetail',
    templateUrl:'app/products/product-detail.component.html'
})
export class ProductDetailComponent{
    
    private _value : string;
    public get value() : string {
        return this._value;
    }
    public set value(v : string) {
        this._value = v;
    }
    
    pageTitle:string = 'Product details';
}