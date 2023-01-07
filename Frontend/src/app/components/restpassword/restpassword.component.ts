import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restpassword',
  templateUrl: './restpassword.component.html',
  styleUrls: ['./restpassword.component.css']
})
export class RestpasswordComponent{

  isLinear = false;

  @Output() onEmailSubmit: EventEmitter<string> = new EventEmitter();
  @Output() onCodeSubmit = new EventEmitter();

  @Input()
  emailSubmitted: boolean = false;

  @Input()
  passwordResetSuccessful: boolean = false;

  emailForm: FormGroup = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  });

  confirmCodeForm: FormGroup = this.createCodeForm();

  submitEmail() {
    if (this.emailForm.valid) {
      const email = this.emailForm.get('email')!.value;
      this.confirmCodeForm.setValue({
        email,
        newPassword: '',
        confirmationCode: '',
      });
      this.confirmCodeForm = this.createCodeForm(email);
      //console.log('THE EMAIL IS: ', confirmCodeForm.get('email').value);
      this.onEmailSubmit.emit(email);
    }
  }

  submitCode() {
    if (this.confirmCodeForm.valid) {
      this.onCodeSubmit.emit(this.confirmCodeForm.value);
    }
  }

  createCodeForm(email: string = ''): FormGroup {
    return new FormGroup({
      email: new FormControl(email, [Validators.required, Validators.email]),
      newPassword: new FormControl('', [Validators.required]),
      confirmationCode: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
  }
}
