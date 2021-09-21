import {Component, OnChanges, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: './course-detail.component.html',
})
export class CouseDetailComponent  implements  OnInit{
couserId: string | null ="";
constructor(private activatedRoute:ActivatedRoute) {
}
ngOnInit():void {
  this.couserId=this.activatedRoute.snapshot.paramMap.get('id');
}
}
