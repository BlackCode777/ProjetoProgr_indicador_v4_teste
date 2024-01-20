import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  //standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  //imports: [ CommonModule, RouterLink, RouterLinkActive ],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  @Input() collapsed = false
  @Input() screenWidth = 0

  getBodyClass(): any {
    let styleClass= '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if( this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }

}
