import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { SidebarService } from 'src/app/@core/services/sidebar.service';
import * as AuthActions from '../../@core/stores/auth/auth.actions';
import * as authSelectors from '../../@core/stores/auth/auth.selectors';
import * as fromApp from '../../@core/stores/app.reducer';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
// import { UserService } from 'src/app/@core/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('dropdown', [
      state(
        'collapsed',
        style({
          height: '0px',
          overflow: 'hidden',
          visibility: 'hidden',
          // opacity: '0',
          // transform: 'translateY(-1px)',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
          overflow: 'visible',
          visibility: 'visible',
          // opacity: '1',
          // transform: 'translateY(0px)',
        })
      ),
      transition('expanded <=> collapsed', animate('350ms ease')),
    ]),
  ],
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  dropdownAnimationState1: string;
  dropdownAnimationState2: string;
  dropdownAnimationState3: string;
  dropdownAnimationState4: string;
  dropdownAnimationState5: string;
  dropdownAnimationState6: string;
  dropdownAnimationState7: string;
  dropdownAnimationState8: string;
  email: string = null;
  show: boolean;

  allPermissions: Observable<string[]>;
  allPermissionsSub: Subscription;
  canViewOrganization: boolean = false;
  canViewStaff: boolean = false;
  canViewConfiguration: boolean = false;
  canCreateConfiguration: boolean = false;
  canViewCustomer: boolean = false;
  canViewGuarantor: boolean = false;
  canViewLoan: boolean = false;
  canViewLoanRepayment: boolean = false;

  userSub: Subscription;

  @ViewChild('sidebar', { static: false }) sidebar: ElementRef;

  constructor(
    private renderer: Renderer2,
    private sidebarService: SidebarService,
    private store: Store<fromApp.AppState> // private userService: UserService
  ) {}

  ngOnInit() {
    // this.allPermissions = this.store.pipe(
    //   select(authSelectors.getUserPermissions)
    // );

    // this.allPermissionsSub = this.allPermissions.subscribe((permissions) => {
    //   if (permissions) {
    //     this.canViewOrganization = permissions.includes('View Organization');
    //     this.canViewStaff = permissions.includes('View Staff');
    //     this.canViewConfiguration = permissions.includes('View Configuration');
    //     this.canCreateConfiguration = permissions.includes(
    //       'Create Configuration'
    //     );
    //     this.canViewCustomer = permissions.includes('View Customers');
    //     this.canViewGuarantor = permissions.includes('View Guarantors');
    //     this.canViewLoan = permissions.includes('View Loan');
    //     this.canViewLoanRepayment = permissions.includes('View Loan Repayment');
    //   }
    // });

    // this.manageAccessLevelView();

    this.dropdownAnimationState1 = 'collapsed';
    this.dropdownAnimationState2 = 'collapsed';
    this.dropdownAnimationState3 = 'collapsed';
    this.dropdownAnimationState4 = 'collapsed';
    this.dropdownAnimationState5 = 'collapsed';
    this.dropdownAnimationState6 = 'collapsed';
    this.dropdownAnimationState7 = 'collapsed';
    this.dropdownAnimationState8 = 'collapsed';

    window.addEventListener('resize', () => {
      if (window.matchMedia('(max-width: 992px)')) {
        if (this.sidebar.nativeElement.classList.contains('open')) {
          this.renderer.removeClass(this.sidebar.nativeElement, 'open');
        }
      }
    });
  }

  ngAfterViewInit() {
    this.sidebarService.toggleSidebar.subscribe(() => {
      if (this.sidebar.nativeElement.classList.contains('open')) {
        this.sidebarService.closed.next();
        this.renderer.removeClass(this.sidebar.nativeElement, 'open');
      } else {
        this.sidebarService.opened.next();
        this.renderer.addClass(this.sidebar.nativeElement, 'open');
      }
    });
  }

  toggleDropdown(element, state) {
    let caret: HTMLElement = element.children[1].children[0];

    if (!caret.classList.contains('caret-open')) {
      this.expanded(state);
      this.renderer.addClass(caret, 'caret-open');
    } else {
      this.collapsed(state);
      if (caret.classList.contains('caret-open')) {
        this.renderer.removeClass(caret, 'caret-open');
      }
    }
  }

  expanded(state) {
    switch (state) {
      case 1:
        this.dropdownAnimationState1 = 'expanded';
        break;
      case 2:
        this.dropdownAnimationState2 = 'expanded';
        break;
      case 3:
        this.dropdownAnimationState3 = 'expanded';
        break;
      case 4:
        this.dropdownAnimationState4 = 'expanded';
        break;
      case 5:
        this.dropdownAnimationState5 = 'expanded';
        break;
      case 6:
        this.dropdownAnimationState6 = 'expanded';
        break;
      case 7:
        this.dropdownAnimationState7 = 'expanded';
        break;
      case 8:
        this.dropdownAnimationState8 = 'expanded';
        break;
      default:
        break;
    }
  }

  collapsed(state) {
    switch (state) {
      case 1:
        this.dropdownAnimationState1 = 'collapsed';
        break;
      case 2:
        this.dropdownAnimationState2 = 'collapsed';
        break;
      case 3:
        this.dropdownAnimationState3 = 'collapsed';
        break;
      case 4:
        this.dropdownAnimationState4 = 'collapsed';
        break;
      case 5:
        this.dropdownAnimationState5 = 'collapsed';
        break;
      case 6:
        this.dropdownAnimationState6 = 'collapsed';
        break;
      case 7:
        this.dropdownAnimationState7 = 'collapsed';
        break;
      case 8:
        this.dropdownAnimationState8 = 'collapsed';
        break;
      default:
        break;
    }
  }

  // manageAccessLevelView() {
  //   this.store.pipe(select(authSelectors.getUser)).subscribe((user) => {
  //     if (user !== null) {
  //       if (user.Role.AccessLevel <= 1) {
  //         this.show = true;
  //       } else {
  //         this.show = false;
  //       }
  //     }
  //   });
  // }

  onLogout() {
    // this.store.pipe(select(authSelectors.getUser)).subscribe((user) => {
    //   if (user !== null) {
    //     this.email = user.Email;
    //   }
    // });
    // if (this.email !== null) {
    //   this.store.dispatch(
    //     new AuthActions.Logout({
    //       email: this.email,
    //     })
    //   );
    // }
  }

  ngOnDestroy() {
    // if (this.allPermissionsSub) {
    //   this.allPermissionsSub.unsubscribe();
    // }
    // if (this.userSub) {
    //   this.userSub.unsubscribe();
    // }
  }
}
