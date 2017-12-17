import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Course} from '../entities/course-interface';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() course: Course;
  @Output('deleteCourse') deleteCourse = new EventEmitter();
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }
  
  delete() {
    this.deleteCourse.emit({
      value: this.course
    });
  }
  
  open(content) {
    this.modalService.open(content).result.then(() => {
      this.delete();
    });
  }
}
