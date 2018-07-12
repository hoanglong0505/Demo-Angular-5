import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private apiService: ApiService) { }
  getList() {
    return new Promise((resolve, reject) => {
        this.apiService.get('New').then(res => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        });
    });
}
getNew(id) {
  return new Promise((resolve, reject) => {

      this.apiService.get('New/' + id).then(res => {
          resolve(res.json());
      }).catch(err => {
          reject(err);
      });
  });
}
}
