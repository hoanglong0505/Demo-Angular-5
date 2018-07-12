import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
this.checkEmail(this.emailFormControl.value);
}
checkEmail(email) {
  this.userService.checkEmail(email).then((res: any) => {
    if (res.length > 0 ) {
      this.exit = true;
    } else {
this.user.email = this.emailFormControl.value;
this.user.name = this.nameFormControl.value;
this.user.password = this.passwordFormControl.value;
this.userService.register(this.user);
this.router.navigate(['']);
    }
  }).catch(err => {
    alert(err);
  });
}
}
