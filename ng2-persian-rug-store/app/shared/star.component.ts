import {Component, OnChanges, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'ee-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWith:number = 0;

    ngOnChanges():void {
        this.starWith = this.rating * 86 /5; 
    }
    
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
    
    onClick(){
        this.ratingClicked.emit(`The rating ${this.rating} was clicked `);
    }
}