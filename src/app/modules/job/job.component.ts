import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from '../../service/job.service';
import { Job } from '../../models/job';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
jobs: Job[] = [];
count: number;
  constructor(private jobService: JobService, private router: Router) { }

  ngOnInit() {
    this.count = 1;
    this.loadJobs();
  }
  loadJobs() {
    this.jobService.paging(1, this.count * 4 ).then((res: Job[]) => {
      this.jobs = res;
      console.log(this.jobs);
    }).catch(err => {
      alert(err);
    });
  }
  showmore() {
    this.count++;
    this.loadJobs();
  }
  detail(id) {
    this.router.navigate(['/job-detail/' + id]);
  }
}
