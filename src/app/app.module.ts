import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './modules/landing/landing.component';
import { CheckpageComponent } from './modules/checkpage/checkpage.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { IconGeneratorService } from './services/icons-service/icons.service';
import { HeaderContentComponent } from './modules/landing/components/header-content/header-content.component';
import { LogoBlockComponent } from './modules/landing/components/logo-block/logo-block.component';
import { FeatureBoxComponent } from './modules/landing/components/feature-box/feature-box.component';
import { CommentBarComponent } from './modules/landing/components/comment-bar/comment-bar.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { FooterComponent } from './modules/landing/components/footer/footer.component';
import { UploadDialogComponent } from './modules/checkpage/components/upload-dialog/upload-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login/login.component';
import { PolicyDialogComponent } from './modules/checkpage/components/policy-dialog/policy-dialog.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CheckpageComponent,
    DashboardComponent,
    HeaderContentComponent,
    LogoBlockComponent,
    FeatureBoxComponent,
    CommentBarComponent,
    FooterComponent,
    UploadDialogComponent,
    LoginComponent,
    PolicyDialogComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    ScrollingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    IconGeneratorService,
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
  matIconRegistry.addSvgIcon(
    'outlined',
    domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/outlined.svg')
  );
}}
