import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'course-detail',
  providers: [
  ],
  styleUrls: [ 'course-detail.component.css' ],
  templateUrl: 'course-detail.component.html'
})
export class CourseDetailComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `CoursesDetailComponent` component');
  }

}

