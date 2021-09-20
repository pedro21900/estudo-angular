import {Injectable} from "@angular/core";
import {Course} from "../domain/course";

@Injectable({
  providedIn: 'root'
})
export  class CourseService{
  retriveAll(): Course[]{
    return  COURSERS
  }
}

var COURSERS: Course[]=[
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
