import {Component, HostBinding} from '@angular/core';
import {Router} from '@angular/router';
import {slideInDownAnimation} from './animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [],
  animations: [slideInDownAnimation]
})
export class AppComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor(private router: Router) {
  }

  public toHome() {
    this.router.navigate(['/news'], {skipLocationChange: false});
  }

  public toLogin() {
    this.router.navigate(['/login'], {skipLocationChange: false})
  }
}