// Importing necessary modules from Angular framework
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LecturersComponent } from './lecture/lecture.component';
import { StudentsComponent } from './student/student.component';
import { HomepageComponent } from './homepages/homepages.component';
import { LecturerUpdateComponent } from './lecture-updates/lecture-updates.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LecturerUpdateComponent,
    LecturersComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }