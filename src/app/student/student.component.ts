// Importing necessary modules from Angular framework
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  // Component decorator to specify selector, template and stylesheet
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // Initializing an empty array to store student data
  students: any[] = [];

  // Injecting HttpClient service into constructor
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Calling getStudents() function on initialization of the component
    this.getStudents();
  }

  // Function to get all students from server
  getStudents() {
    // Making a GET request to the server to retrieve all students
    this.http.get<any[]>('http://localhost:8080/students').subscribe(data => {
      // Storing the response data in the students array
      this.students = data;
    },
      (error) => {
        // Logging error to console
        console.log(error);
      }
    );
  }

  // Function to delete a student
  deleteStudent(student: any) {
    // Making a DELETE request to server to delete the selected student
    this.http.delete(`http://localhost:8080/students/${student.sid}`).subscribe(
      () => {
        // If successful, remove the student from the students array
        this.students = this.students.filter(s => s.sid !== student.sid);
      },
      (error) => {
        // If unsuccessful, log error to console and show an alert message
        console.log(error);
        alert(`Student: ${student.sid} cannot be deleted. He/she has associated modules`);
      }
    );
  }

}