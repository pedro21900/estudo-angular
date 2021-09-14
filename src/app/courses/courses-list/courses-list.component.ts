import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html'
})


export class CoursesListComponent implements OnInit {

  course: Course[]=[];
  
  ngOnInit(): void {
    this.course =[
    {
    id: 1,
    name: "Java: Spring-boot",
    imageUrl: "",
    price: 3600.000,
    code: "XPS-8796",
    duration: 120,
    rating: 5.4,
    releaseDate: "November -13 -2021"
    },
    {
      id: 2,
      name: "Java: Rest",
      imageUrl: "",
      price: 360.000,
      code: "LPS-8796",
      duration: 80,
      rating: 3.5,
      releaseDate: "November -29 -2021"
      }
    ]
  }

}
