import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-add-contract-configuration',
  templateUrl: './add-contract-configuration.component.html',
  styleUrls: ['./add-contract-configuration.component.scss'],
})
export class AddContractConfigurationComponent
  implements OnInit, AfterViewInit
{
  addContractConfigurationForm: FormGroup;
  activePage: number = 1;
  contractFilename: string = null;
  contractFile: string = null;
  contractFileSize: number = null;

  @ViewChild('settingContainer1', { static: false })
  settingContainer1: ElementRef;

  @ViewChild('settingContainer2', { static: false })
  settingContainer2: ElementRef;

  @ViewChild('settingContainer3', { static: false })
  settingContainer3: ElementRef;

  @ViewChildren('internalUsersOption')
  internalUsersOption: QueryList<ElementRef>;

  @ViewChildren('externalUsersOption')
  externalUsersOption: QueryList<ElementRef>;

  @ViewChildren('sequentialOption')
  sequentialOption: QueryList<ElementRef>;

  @ViewChildren('nonSequentialOption')
  nonSequentialOption: QueryList<ElementRef>;

  // @ViewChildren('tab') allTabs: QueryList<ElementRef>;

  constructor(private renderer: Renderer2, private fb: FormBuilder) {}

  ngOnInit() {
    this.createAddContractConfigurationForm();
  }

  ngAfterViewInit() {
    this.manageTabAccordions();
  }

  createAddContractConfigurationForm() {
    this.addContractConfigurationForm = this.fb.group({
      contract_type: [null, [Validators.required]],
      no_of_organization_signatories: [null],
      no_of_third_party_signatories: [null],
      no_of_witness_signatories: [null],
      contract_file: [null, [Validators.required]],
      phase: this.fb.array([]),
    });
  }

  get addContractConfigurationFormControls() {
    return this.addContractConfigurationForm.controls;
  }

  getErrorMessage(instance: string) {
    if (
      instance === 'no_of_organization_signatories' &&
      this.addContractConfigurationFormControls.no_of_organization_signatories.hasError(
        'required'
      )
    ) {
      return 'Warning: Required';
    }
    if (
      instance === 'no_of_third_party_signatories' &&
      this.addContractConfigurationFormControls.no_of_third_party_signatories.hasError(
        'required'
      )
    ) {
      return 'Warning: Required';
    }
    if (
      instance === 'no_of_witness_signatories' &&
      this.addContractConfigurationFormControls.no_of_witness_signatories.hasError(
        'required'
      )
    ) {
      return 'Warning: Required';
    }
  }

  selectActivePage(tab: number, event) {
    this.activePage = tab;
    // console.log(this.phaseFormArray.controls[0].get("workflow"))

    if (this.activePage === 2) {
      if (this.phaseFormArray.length === 0) {
        this.pushPhase();
      }
    }

    if (this.activePage === 3) {
      let workflowFormArray = this.phaseFormArray.controls[0].get(
        'workflow'
      ) as FormArray;

      if (workflowFormArray.length === 0) {
        this.pushWorkflow(0);
      }
    }
  }

  onToggleSetting(instance, event: MatSlideToggleChange) {
    if (instance === 1) {
      this.toggleSettingContainerClass(this.settingContainer1, event);
      this.manageNoOfOrganizationSignatoriesValidation(this.settingContainer1);
    }
    if (instance === 2) {
      this.toggleSettingContainerClass(this.settingContainer2, event);
      this.manageNoOfThirdPartySignatoriesValidation(this.settingContainer2);
    }
    if (instance === 3) {
      this.toggleSettingContainerClass(this.settingContainer3, event);
      this.manageNoOfWitnessSignatoriesValidation(this.settingContainer3);
    }
  }

  toggleSettingContainerClass(
    settingContainer: ElementRef,
    event: MatSlideToggleChange
  ) {
    if (event.checked === true) {
      this.renderer.addClass(settingContainer.nativeElement, 'setting-active');
    } else {
      if (settingContainer.nativeElement.classList.contains('setting-active')) {
        this.renderer.removeClass(
          settingContainer.nativeElement,
          'setting-active'
        );
      }
    }
  }

  manageNoOfOrganizationSignatoriesValidation(settingContainer: ElementRef) {
    if (settingContainer.nativeElement.classList.contains('setting-active')) {
      this.addContractConfigurationFormControls.no_of_organization_signatories.setValidators(
        [Validators.required]
      );
      this.addContractConfigurationForm
        .get('no_of_organization_signatories')
        .updateValueAndValidity();
    } else {
      this.addContractConfigurationForm.patchValue({
        no_of_organization_signatories: null,
      });

      this.addContractConfigurationForm
        .get('no_of_organization_signatories')
        .updateValueAndValidity();

      this.addContractConfigurationForm
        .get('no_of_organization_signatories')
        .clearValidators();

      this.addContractConfigurationForm
        .get('no_of_organization_signatories')
        .updateValueAndValidity();
    }
  }

  manageNoOfThirdPartySignatoriesValidation(settingContainer: ElementRef) {
    if (settingContainer.nativeElement.classList.contains('setting-active')) {
      this.addContractConfigurationFormControls.no_of_third_party_signatories.setValidators(
        [Validators.required]
      );
      this.addContractConfigurationForm
        .get('no_of_third_party_signatories')
        .updateValueAndValidity();
    } else {
      this.addContractConfigurationForm.patchValue({
        no_of_third_party_signatories: null,
      });

      this.addContractConfigurationForm
        .get('no_of_third_party_signatories')
        .updateValueAndValidity();

      this.addContractConfigurationForm
        .get('no_of_third_party_signatories')
        .clearValidators();

      this.addContractConfigurationForm
        .get('no_of_third_party_signatories')
        .updateValueAndValidity();
    }
  }

  manageNoOfWitnessSignatoriesValidation(settingContainer: ElementRef) {
    if (settingContainer.nativeElement.classList.contains('setting-active')) {
      this.addContractConfigurationFormControls.no_of_witness_signatories.setValidators(
        [Validators.required]
      );
      this.addContractConfigurationForm
        .get('no_of_witness_signatories')
        .updateValueAndValidity();
    } else {
      this.addContractConfigurationForm.patchValue({
        no_of_witness_signatories: null,
      });

      this.addContractConfigurationForm
        .get('no_of_witness_signatories')
        .updateValueAndValidity();

      this.addContractConfigurationForm
        .get('no_of_witness_signatories')
        .clearValidators();

      this.addContractConfigurationForm
        .get('no_of_witness_signatories')
        .updateValueAndValidity();
    }
  }

  onUploadContract(event, type: string) {
    const file = (event.target as HTMLInputElement).files[0];

    // if (file && file.size <= 100000 && file.name.match(/.(jpg|jpeg|png)$/i)) {
    // if (type === 'signature') {
    this.contractFilename = null;
    this.contractFileSize = null;

    const reader = new FileReader();

    reader.onload = () => {
      let fullBase64String = reader.result.toString();
      let base64String = fullBase64String.split(',');

      this.addContractConfigurationForm.patchValue({
        contract_file: base64String[1],
      });
      this.addContractConfigurationForm
        .get('contract_file')
        .updateValueAndValidity();

      this.contractFile = fullBase64String;
    };

    reader.readAsDataURL(file);

    this.contractFilename = file.name;
    this.contractFileSize = file.size;
    // }
    // }
  }

  onRemoveContract() {
    this.contractFile = null;
    this.contractFilename = null;
    this.contractFileSize = null;

    this.addContractConfigurationForm.patchValue({
      contract_file: null,
    });

    this.addContractConfigurationForm
      .get('contract_file')
      .updateValueAndValidity();
  }

  createPhase(): FormGroup {
    return this.fb.group({
      phase_name: [null, [Validators.required]],
      user_category: [null, [Validators.required]],
      user_notification_type: [null, [Validators.required]],
      workflow: this.fb.array([this.createWorkflow()]),
    });
  }

  get phaseFormArray() {
    return this.addContractConfigurationForm.get('phase') as FormArray;
  }

  pushPhase() {
    this.phaseFormArray.push(this.createPhase());
  }

  popPhase(index: number) {
    this.phaseFormArray.removeAt(index);
  }

  createWorkflow(): FormGroup {
    return this.fb.group({
      user_role: [null, [Validators.required]],
      action: [null, [Validators.required]],
      rank: [null, [Validators.required]],
    });
  }

  // get workflowFormArray() {
  //   return this.phaseFormArray.controls[0].get('workflow') as FormArray;
  // }

  pushWorkflow(index) {
    let workflowFormArray = this.phaseFormArray.controls[index].get(
      'workflow'
    ) as FormArray;

    workflowFormArray.push(this.createWorkflow());

    console.log(
      (
        this.phaseFormArray.controls[0].get('workflow') as FormArray
      ).controls[0].get('user_role').errors
    );

    console.log(this.addContractConfigurationForm.value);
  }

  popWorkflow(phaseIndex: number, workflowIndex: number) {
    let workflowFormArray = this.phaseFormArray.controls[phaseIndex].get(
      'workflow'
    ) as FormArray;

    workflowFormArray.removeAt(workflowIndex);
  }

  onPhaseOptionChange1(event: MatRadioChange, index) {
    this.unselectPhaseOption1(index);
    this.selectPhaseOption1(event, index);
  }

  unselectPhaseOption1(index) {
    this.internalUsersOption.forEach((option, optionIndex) => {
      if (optionIndex === index) {
        if (option.nativeElement.classList.contains('selected')) {
          this.renderer.removeClass(option.nativeElement, 'selected');
        }
      }
    });

    this.externalUsersOption.forEach((option, optionIndex) => {
      if (optionIndex === index) {
        if (option.nativeElement.classList.contains('selected')) {
          this.renderer.removeClass(option.nativeElement, 'selected');
        }
      }
    });
  }

  selectPhaseOption1(event, index) {
    if (event.value === 'internal users') {
      if ((event.source.checked = true)) {
        this.internalUsersOption.forEach((option, optionIndex) => {
          if (optionIndex === index) {
            this.renderer.addClass(option.nativeElement, 'selected');
          }
        });
      }
    }

    if (event.value === 'external users') {
      if ((event.source.checked = true)) {
        this.externalUsersOption.forEach((option, optionIndex) => {
          if (optionIndex === index) {
            this.renderer.addClass(option.nativeElement, 'selected');
          }
        });
      }
    }
  }

  onPhaseOptionChange2(event: MatRadioChange, index) {
    this.unselectPhaseOption2(index);
    this.selectPhaseOption2(event, index);
  }

  unselectPhaseOption2(index) {
    this.sequentialOption.forEach((option, optionIndex) => {
      if (optionIndex === index) {
        if (option.nativeElement.classList.contains('selected')) {
          this.renderer.removeClass(option.nativeElement, 'selected');
        }
      }
    });

    this.nonSequentialOption.forEach((option, optionIndex) => {
      if (optionIndex === index) {
        if (option.nativeElement.classList.contains('selected')) {
          this.renderer.removeClass(option.nativeElement, 'selected');
        }
      }
    });
  }

  selectPhaseOption2(event, index) {
    if (event.value === 'sequential') {
      if ((event.source.checked = true)) {
        this.sequentialOption.forEach((option, optionIndex) => {
          if (optionIndex === index) {
            this.renderer.addClass(option.nativeElement, 'selected');
          }
        });
      }
    }

    if (event.value === 'non-sequential') {
      if ((event.source.checked = true)) {
        this.nonSequentialOption.forEach((option, optionIndex) => {
          if (optionIndex === index) {
            this.renderer.addClass(option.nativeElement, 'selected');
          }
        });
      }
    }
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
    let tabHeader = event.target as HTMLElement;
    let tabContent = tabHeader.nextElementSibling as HTMLElement;

    if (tabContent.style.maxHeight) {
      tabContent.style.maxHeight = null;
    } else {
      tabContent.style.maxHeight = tabContent.scrollHeight + 'px';
    }
  }

  onSubmit() {
    console.log(this.addContractConfigurationForm.value);
    console.log(this.addContractConfigurationForm.value.phase[0].workflow);
  }
}
