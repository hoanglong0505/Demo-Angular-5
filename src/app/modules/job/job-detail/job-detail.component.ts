import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/service/job.service';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  routerSubcription: any;
  id = 0;
  job: Job = new Job;
  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit() {

    this.routerSubcription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.loadJob();
  }
  loadJob() {
    this.jobService.getJob(this.id).then((res: Job) => {
      this.job = res;
      console.log(this.job);
    }).catch(err => {
      alert(err);
    });
  }

}
