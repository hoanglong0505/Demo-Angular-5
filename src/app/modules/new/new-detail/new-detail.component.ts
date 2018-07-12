import { Component, OnInit } from '@angular/core';
import { New } from '../../../models/new';
import { ActivatedRoute } from '@angular/router';
import { NewService } from 'src/app/service/new.service';

@Component({
  selector: 'app-new-detail',
  templateUrl: './new-detail.component.html',
  styleUrls: ['./new-detail.component.css']
})
export class NewDetailComponent implements OnInit {
  routerSubcription: any;
  id = 0;
  new: New = new New;
  constructor(private route: ActivatedRoute, private newService: NewService) { }
  ngOnInit() {
    this.routerSubcription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
    });
    this.loadNew();
  }
  loadNew() {
    this.newService.getNew(this.id).then((res: New) => {
      this.new = res;
      console.log(this.new);
    }).catch(err => {
      alert(err);
    });
  }
}
