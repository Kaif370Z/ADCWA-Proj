import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lecturer-update',
  templateUrl: './lecturer-update.component.html',
  styleUrls: ['./lecturer-update.component.css']
})

export class LecturerUpdateComponent implements OnInit {
  lecturer: any = {}; 

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:8080/lecturers/${id}`).subscribe(data => {
      this.lecturer = data; 
    });
  }

  onSubmit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.http.put(`http://localhost:8080/lecturers/${id}`, this.lecturer).subscribe(() => {
      this.router.navigate(['/lecturers']); 
    });
  }
}