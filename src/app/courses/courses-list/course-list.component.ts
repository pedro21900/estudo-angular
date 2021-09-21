import {Component, OnInit} from '@angular/core';
import {Course} from '../../domain/course';
import {CourseService} from "../../service/course.service";

@Component({
  templateUrl: './course-list.component.html'
})


export class CourseListComponent implements OnInit {

  _course: Course[] = [];
  _filterCourse: Course[] = [];
  _filterBy: string = '';

  constructor(private courseService: CourseService) {
  }

  ngOnInit(): void {
    this._course = this.courseService.retriveAll();
    this._filterCourse = this._course;
  }

  set filter(value: string) {
    this._filterBy = value;
    this._filterCourse = this._course
      .filter((course: Course) => course.name
        .toLocaleLowerCase()
        .indexOf(this._filterBy
          .toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }
}
