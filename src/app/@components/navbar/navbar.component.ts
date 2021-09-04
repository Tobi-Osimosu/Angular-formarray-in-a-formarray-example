import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SidebarService } from 'src/app/@core/services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('header', { static: false }) header: ElementRef;

  constructor(
    private renderer: Renderer2,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 992px)')) {
        if (this.header.nativeElement.classList.contains('open')) {
          this.renderer.removeClass(this.header.nativeElement, 'open');
        }
      }
    });
  }

  ngAfterViewInit() {
    this.sidebarService.opened.subscribe(() => {
      this.renderer.addClass(this.header.nativeElement, 'open');
    });
    this.sidebarService.closed.subscribe(() => {
      if (this.header.nativeElement.classList.contains('open')) {
        this.renderer.removeClass(this.header.nativeElement, 'open');
      }
    });
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar.next();
  }
}
