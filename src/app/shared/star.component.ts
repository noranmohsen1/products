import { OnChanges, Component, Input, EventEmitter, Output } from "@angular/core";
@Component({
  selector: "pm-star",
  templateUrl: "./star.component.html",
  styleUrls: ["./star.Component.css"]
})
export class starComponent implements OnChanges{
  @Input() rating: number = 0;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> =
  new EventEmitter<string>();

  ngOnChanges(): void {
      this.cropWidth = this.rating* 75/5;
  }


  onClick(): void{
    this.ratingClicked.emit(`the rating ${this.rating} was clicked!`);

  }
}
