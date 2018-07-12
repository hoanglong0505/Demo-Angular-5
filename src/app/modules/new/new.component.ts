import { Component, OnInit } from '@angular/core';
import { NewService } from '../../service/new.service';
import { New } from '../../models/new';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
news: New[] = [];
count: number;
  constructor(private newService: NewService, private router: Router) { }

  ngOnInit() {
    this.count = 1;
    this.loadNews();
  }
  loadNews() {
    this.newService.getList().then((res: any) => {
      this.news = res;
      console.log(this.news);
    }).catch(err => {
      alert(err);
    });
  }
  showmore() {
    this.count++;
  }
  detail(id) {
    this.router.navigate(['/new-detail/' + id]);
  }

}
