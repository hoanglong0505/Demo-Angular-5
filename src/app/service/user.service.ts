import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiService: ApiService) { }
  checkEmail(email) {
    return new Promise((resolve, reject) => {
        this.apiService.get('User?email=' + email).then(res => {
            resolve(res.json());
        }).catch(err => {
            reject(err);
        });
    });
}
register(user) {
    return new Promise((resolve, reject) => {
        this.apiService.post('User', user).then(res => {
            console.log(user.json);
            resolve(res.json());
        }).catch(err => {
            reject(err);
        });
    });
}
}
