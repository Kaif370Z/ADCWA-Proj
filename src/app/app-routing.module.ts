import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LecturersComponent } from './lecture/lecture.component';
import { StudentsComponent } from './student/student.component';
import { HomepageComponent } from './homepages/homepages.component';
import { LecturerUpdateComponent } from './lecture-updates/lecture-updates.component';

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'lecturers', component: LecturersComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'lecturers/:id/update', component: LecturerUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }