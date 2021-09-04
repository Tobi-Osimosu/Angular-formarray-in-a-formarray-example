import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-view-contract-configuration',
  templateUrl: './view-contract-configuration.component.html',
  styleUrls: ['./view-contract-configuration.component.scss'],
})
export class ViewContractConfigurationComponent
  implements OnInit, AfterViewInit
{
  constructor(private renderer: Renderer2) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // this.manageTabAccordions();
  }

  manageTabAccordions() {
    let tabHeader = document.getElementsByClassName('tab-header');

    for (let i = 0; i < tabHeader.length; i++) {
      tabHeader[i].addEventListener('click', function () {
        let tabContent = tabHeader[i].nextElementSibling as HTMLElement;
        if (tabContent.style.maxHeight) {
          tabContent.style.maxHeight = null;
        } else {
          tabContent.style.maxHeight = tabContent.scrollHeight + 'px';
        }
      });
    }
  }

  manageDynamicAccordions(event) {
    let accordionBtn = event.target as HTMLElement;
    let accordionContent = accordionBtn.nextElementSibling as HTMLElement;

    if (accordionContent.style.maxHeight === '0px') {
      accordionContent.style.maxHeight =
        accordionContent.scrollHeight + 1 + 'px';
    } else {
      accordionContent.style.maxHeight = '0px';
    }
  }
}
