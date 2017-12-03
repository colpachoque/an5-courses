import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'header',
  providers: [
  ],
  styleUrls: [ 'header.component.css' ],
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {

  public ngOnInit() {
    console.log('hello `Header` component');
  }

}

