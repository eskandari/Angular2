import {Component} from 'angular2/core';
import {ProductListComponent} from './products/product-list.component';
import {ProductService} from './products/product.service';

@Component({
    selector: 'pm-app',
    template:`
    <div><h1>{{pageTitle}}</h1></div>
    <pm-products></pm-products>
    `,
    directives:[ProductListComponent],
    providers:[ProductService]
})
export /**
 * AppComponent
 */
class AppComponent {
    pageTitle: string = "Persian Rug Store!!";
}