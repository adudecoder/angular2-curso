import { CourseService } from './../courses/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './courses';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CourseComponent implements OnInit {

  // Criar variavel com anderlaine na frente para avisar os dev que eu quero que essa variavel fique apenas nesse component
  filteredCourses: Course[] = [];

  _courses: Course[] = [];
    
  _filterBy!: string;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void { 
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) { 
    this._filterBy = value;

    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() { 
    return this._filterBy;
  }

}
