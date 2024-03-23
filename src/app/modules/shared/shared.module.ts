import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { TspDatepickerComponent } from './components/tsp-datepicker/tsp-datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TspDesignsysComponent } from './components/tsp-design-sys/tsp-design-sys.component';
import { MatIconModule } from '@angular/material/icon';
import { IconGeneratorService } from '../../services/icons-service/icons.service';
import { InputControlDirective } from './directives/input-control.directive';
import { OtpEntryComponent } from './components/otp-entry/otp-entry.component';
import { MaxLengthJumpDirective } from './directives/max-length-jump.directive';
import { PersianDigitPipe } from './pipes/persian-digit.pipe';
import { TspToasterComponent } from './components/tsp-toaster/tsp-toaster.component';
import { CommaSeparatorComponent } from './components/comma-separator/comma-separator.component';
import { CommaSeparatorPipe } from './pipes/comma-separator.pipe';
@NgModule({
  declarations: [
    TspDatepickerComponent,
    TspDesignsysComponent,
    OtpEntryComponent,
    CommaSeparatorComponent,
    InputControlDirective,
    MaxLengthJumpDirective,
    PersianDigitPipe,
    CommaSeparatorPipe,
  ],
  imports: [
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [IconGeneratorService],
  exports: [
    TspDatepickerComponent,
    TspDesignsysComponent,
    InputControlDirective,
    MaxLengthJumpDirective,
    OtpEntryComponent,
    PersianDigitPipe,
    CommaSeparatorComponent,
    CommaSeparatorPipe,
  ],
})
export class SharedModule {}
