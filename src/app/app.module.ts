import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import {CoursesComponent} from './courses/courses.component';
import {CourseSearchComponent} from './course-search/course-search.component';
import {HeaderComponent} from './header/header.component';
import {CourseService} from './course.service';
import {AuthService} from './auth.service';
import {LoginModule} from './login/login.module';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseSearchComponent,
    HeaderComponent,
    CourseItemComponent
  ],
  imports: [
    BrowserModule, FormsModule, LoginModule, NgbModule.forRoot()
  ],
  providers: [ AuthService, CourseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
