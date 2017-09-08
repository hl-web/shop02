import { Directive, forwardRef, ViewChild } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidatorFn, NG_VALIDATORS, NG_ASYNC_VALIDATORS, Validator, FormControl } from '@angular/forms';
import { Observable } from "rxjs/Rx";
import { XyzUserListService } from './home.service';
import { InfoComponent } from './info/info.component';

@Directive({
  selector: '[emailAvailable][formControlName],[emailAvailable][formControl],[emailAvailable][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => EmailAvailableValidatorDirective), multi: true
    }
  ]
})

export class EmailAvailableValidatorDirective implements Validator {
  id: string;
  @ViewChild(InfoComponent) infoComponent: InfoComponent;
  constructor(private usersService: XyzUserListService) {
    this.id = '0' || this.infoComponent.id;
  }


  validate(c: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    return this.validateEmailAvailableFactory(c.value);
  }

  validateEmailAvailableFactory(email: string) {
    return new Promise(resolve => {
      this.usersService.validate_email_user(email, this.id)
        .subscribe(
        data => {
          if (data.success === 'yes') {
            resolve({
              emailAvailable: true
            });
          }
          else {
            resolve(null);
          }

        },
        error => {
          resolve(null);
        });
    });

  }
}