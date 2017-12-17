import {
  Component,
  OnInit
} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'header',
  providers: [
  ],
  styleUrls: [ 'header.component.css' ],
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {
  }
  
  public ngOnInit() {
    console.log('hello `Header` component');
  }

  public logoff() {
    this.authService.logout();
  }
}

