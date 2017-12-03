import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'course-search',
  providers: [
  ],
  styleUrls: [ 'course-search.component.css' ],
  templateUrl: 'course-search.component.html'
})
export class CourseSearchComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `CoursesSearchComponent` component');
  }

}

