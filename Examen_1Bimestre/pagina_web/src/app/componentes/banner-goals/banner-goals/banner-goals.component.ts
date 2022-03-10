import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-goals',
  templateUrl: './banner-goals.component.html',
  styleUrls: ['./banner-goals.component.scss']
})
export class BannerGoalsComponent implements OnInit {
    Carreer_path={
      Front_End_Engineer:{
        subject: 'Front-End Engineer',
        level: 'Beginner friendly',
        lessons: '121 lessons',
        theme: 'Job Essentials'
      },
      Computer_Science:{
        subject: 'Computer Science',
        level: 'Beginner friendly',
        lessons: '83 lessons',
        theme: 'Foundations'
      },
      Full_Stack_Engineer:{
        subject: 'Full_Stack_Engineer',
        level: 'Beginner friendly',
        lessons: '145 lessons',
        theme: 'Job Essentials'
      },
      Data_Scientist:{
        subject: 'Data Scientist',
        level: 'Beginner friendly',
        lessons: '85 lessons',
        theme: 'Job Essentials'
      }
    }



  constructor() { }

  ngOnInit(): void {
  }

}
