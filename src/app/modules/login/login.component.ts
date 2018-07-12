import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,

  ]);
  nameFormControl = new FormControl('', [
    Validators.required
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
exit = false;
user: User = new User ;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  submit() {
    this.userService.login(this.emailFormControl.value, this.passwordFormControl.value).then((res: User[]) => {
      console.log(res);
      if (res.length > 0 ) {
      alert('Hello ' + res[0].name);
      this.router.navigate(['/news']);
      } else {
        alert('Invalid !');
      }
    }).catch(err => {
      alert(err);
    });
  }
}
