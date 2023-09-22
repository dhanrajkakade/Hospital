import { Component } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  logout() {
    localStorage.clear()
   window.location.href="/register"
  }

  public isExact = {exact:false};

}
