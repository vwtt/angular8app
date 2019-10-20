import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {first, tap} from 'rxjs/operators';

import {FbService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  user: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private ps: FbService, private fb: FormBuilder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.angForm = this.fb.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ]
    });
  }

  login(email, password) {
    let b = this.ps.signin({email, password}).subscribe((res) => {
      this.ps.setAuth(res);
      this.router.navigateByUrl('/products');
    },(err) => {
      console.log(err);
      this.router.navigateByUrl('');
    });
  }

}
