import {Component, OnInit} from '@angular/core';
import {Course} from '../../domain/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})


export class CourseListComponent implements OnInit {

  course: Course[] = [];

  ngOnInit(): void {
    this.course = [
      {
        id: 1,
        name: "Java: Spring-boot",
        imageUrl: "/assets/images/forms.png",
        price: 3600.000,
        code: "XPS-8796",
        duration: 120,
        rating: 1.4,
        releaseDate: "November -13 -2021"
      },
      {
        id: 2,
        name: "Java: Rest",
        imageUrl: "/assets/images/cli.png",
        price: 360.000,
        code: "LPS-8796",
        duration: 80,
        rating: 3.5,
        releaseDate: "November -29 -2021"
      }
    ]
  }

}
