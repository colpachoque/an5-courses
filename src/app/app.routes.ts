import { Routes } from '@angular/router';
import { CoursesComponent } from './courses';

export const ROUTES: Routes = [
  { path: '',  redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses',  component: CoursesComponent }
];
