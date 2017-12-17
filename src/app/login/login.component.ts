import {
  Component,
  OnInit
} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'login',
  providers: [
  ],
  styleUrls: [ 'login.component.css' ],
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  username: string;
  password: string;

  public ngOnInit() {
    console.log('hello `Login` component');
  }

  public login() {
    this.authService.login(this.username, this.password);
  }
}


