import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status: string;
  async ngOnInit () {
    while (!this.router.routerState.root.firstChild) {
      await new Promise(resolve => setTimeout(resolve, 250));
    }
    this.status = this.router.routerState.root.firstChild.url.first ? 'success' : 'failure';
  }
  constructor (private readonly router: Router) {}
}
