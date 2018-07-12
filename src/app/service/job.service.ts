import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private apiService: ApiService, private http: Http) { }
  getList() {
    return new Promise((resolve, reject) => {

        this.apiService.get('Job').then(res => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        });
    });
}
paging(page , size) {
    return new Promise((resolve, reject) => {

        this.apiService.get('Job?_page=' + page + '&_limit=' + size).then(res => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        });
    });
}
getJob(id) {
  return new Promise((resolve, reject) => {

      this.apiService.get('Job/' + id).then(res => {
          resolve(res.json());
      }).catch(err => {
          reject(err);
      });
  });
}

}
