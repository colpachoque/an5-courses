import {
  Component,
  OnInit
} from '@angular/core';
import { Course } from "../entities/course-interface";
import { CourseService } from '../course.service';

@Component({
  selector: 'courses',
  styleUrls: [ 'courses.component.css' ],
  templateUrl: 'courses.component.html'
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private courseService: CourseService) {

  }

  ngOnInit() {
    this.courses = this.courseService.list();
    console.log('hello `Courses` component');
  }
  
  deleteCourse($event): void {
    this.courseService.delete($event.value);
    this.courses = this.courses.filter(c => c !== $event.value);
  }
}
