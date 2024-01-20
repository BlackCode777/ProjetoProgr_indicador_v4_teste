import { Component } from '@angular/core';

interface SideNavToggle{
  collapsed: boolean;
  screenWidth: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjProgr_indicador_v4';

  isSieNavCollapsed = false;
  screenWihdth = 0;

  onToggleSideNav(data: SideNavToggle) {
    this.screenWihdth = data.screenWidth;
    this.isSieNavCollapsed = data.collapsed;
  }
}
