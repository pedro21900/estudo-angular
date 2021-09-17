import {Component, OnChanges, Input} from '@angular/core';
import {Course} from "../../domain/course";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['course-detail.component.css']
})
export class CouseDetailComponent implements OnChanges {

  @Input() rating: number = 0;

  starWidth?: number;

  ngOnChanges(): void {

    this.starWidth = (this.rating * 74) / 5;
  }
}
