// lecturers.component.ts
// Import necessary modules
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// Define the component
@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {
  // Initialize an empty array to store the list of lecturers
  lecturers: any[] = [];

  // Inject the necessary services to the constructor
  constructor(private http: HttpClient, private router: Router) { }

  // This method is called after the component is initialized
  ngOnInit(): void {
    // Make a GET request to the backend API to fetch the list of lecturers
    this.http.get<any[]>('http://localhost:8080/lecturers').subscribe(data => {
      this.lecturers = data;
    });
  }

  // This method is called when the Update button is clicked for a lecturer
  onUpdate(lecturer: any) {
    // Navigate to the update form page with the lecturer ID as a parameter
    this.router.navigate(['/lecturers', lecturer.lid, 'update']);
  }
}