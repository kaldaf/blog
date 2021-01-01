import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  sticky = false;

  // tslint:disable-next-line: member-ordering
  menu: boolean = false;
  navScrolled:boolean = false;

  toggle() {
    this.menu = !this.menu;
  }

  scrollScript(component) {
    this.menu = !this.menu;
    var menu = document.getElementById("menu");
    var element = document.getElementById(component);
    var body = document.body.getBoundingClientRect().top;
    var positionRect = element.getBoundingClientRect().top;
    var position = positionRect - body - menu.offsetHeight;
    window.scrollTo({
      top: position,
      behavior: "smooth"
    });
  }


  @HostListener('window:scroll')
  onScroll(): void {
    const windowScroll = window.pageYOffset;

    const nav = document.getElementById("menu").offsetTop;
    if (windowScroll > nav) {
      this.sticky = true;
      this.navScrolled = true;
    } else {
      this.sticky = false;
      this.navScrolled = false;

    }
  }
}
