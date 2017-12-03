import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'courses',
  providers: [
  ],
  styleUrls: [ 'courses.component.css' ],
  templateUrl: 'courses.component.html'
})
export class CoursesComponent implements OnInit {
  constructor(
  ) {}

  public ngOnInit() {
    console.log('hello `Courses` component');
  }
}
