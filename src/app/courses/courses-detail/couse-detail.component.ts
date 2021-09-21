import {Component, OnChanges, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Course} from "../../domain/course";
import {CourseService} from "../../service/course.service";
import {Observable} from "rxjs";

@Component({
  templateUrl: './course-detail.component.html',
})
export class CouseDetailComponent  implements  OnInit {
  couserId: number = 0;
  course: Course=new Course();

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService) {
  }

  ngOnInit(): void {
    this.couserId =parseInt(<string>this.activatedRoute.snapshot.paramMap.get('id'));
    this.course = this.courseService.retrieveById(this.couserId);
  }
  save(): void {
    this.courseService.save(this.course);
  }
}
