import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { XyzUserListService } from './home.service';
import { CategoryComponent } from './category/category.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { InfoComponent } from './info/info.component';
import { EqualValidatorDirective } from './equal-validator.directive';
import { AuthGuard } from './guard/auth.guard';
import { CanDeactivateGuard } from './saveinfo.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseComponent } from './collapse/collapse.component';
import { CollapseGroupComponent } from './collapse-group/collapse-group.component';
import { FaqComponent } from './faq/faq.component';
import { TempConverterPipe } from './pipes/temp-converter.pipe';
import { DialogComponent } from './dialog/dialog.component';

import { AngularFireModule } from 'angularfire2';
import { DecimalPipe } from '@angular/common';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SpinnerComponent } from './spinner/spinner.component';
import { ReplacePipe } from './replace.pipe';
import { FormatNumVNPipe } from './format-num-vn.pipe';
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCEPpvtiiK5D4r7HqD74yXA9OIyZf_lzmE",
  authDomain: "jovial-archive-135623.firebaseapp.com",
  databaseURL: "https://jovial-archive-135623.firebaseio.com",
  projectId: "jovial-archive-135623",
  storageBucket: "jovial-archive-135623.appspot.com",
  messagingSenderId: "833649048596"
};

const routes: Routes = [
  { path: 'loai-san-pham/:id/:cate', component: CategoryComponent },
  { path: 'chi-tiet-san-pham/:id/:tensp', component: DetailComponent },
  { path: 'lien-he', component: ContactComponent },
  { path: 'gio-hang', component: CartComponent },
  { path: 'thanh-toan', component: CheckoutComponent },
  { path: 'dang-nhap', component: SigninComponent },
  { path: 'dang-ky', component: SignupComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'thong-tin', component: InfoComponent, canActivate: [AuthGuard], canDeactivate: [CanDeactivateGuard] },
  { path: '', component: HomeComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    HomeComponent,
    DetailComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    CheckoutComponent,
    SigninComponent,
    SignupComponent,
    InfoComponent,
    EqualValidatorDirective,
    CollapseComponent,
    CollapseGroupComponent,
    FaqComponent,
    TempConverterPipe,
    DialogComponent,
    SpinnerComponent,
    ReplacePipe,
    FormatNumVNPipe

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [XyzUserListService, AuthGuard, CanDeactivateGuard,ReplacePipe,FormatNumVNPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
