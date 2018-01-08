import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
  user: User;
  gender: any[];

  constructor() {
      this.gender = ['Male', 'Female', 'Others'];
      this.user = new User({
          email: '', password: { pwd: '' , confirm_pwd: ''},
          gender: this.gender[0], terms: false});
  }

  ngOnInit() {
  }
    onFormSubmit({ value, valid}: { value: User, valid: boolean }) {
        this.user = value;
        console.log( this.user);
        console.log('valid: ' + valid);
    }
}
