import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  toggleSidebar = new Subject();
  opened = new Subject();
  closed = new Subject();

  constructor() {}
}
