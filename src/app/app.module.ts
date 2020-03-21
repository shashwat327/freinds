import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { NgxUiLoaderModule } from  'ngx-ui-loader';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import html2canvas from 'html2canvas';
 

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { FreindsComponent } from './freinds/freinds.component';
import { ChatComponent } from './chat/chat.component';
import { PhotosComponent } from './photos/photos.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { ListusersComponent } from './listusers/listusers.component';
import { UserdirectoryComponent } from './userdirectory/userdirectory.component';
import { NotificationComponent } from './notification/notification.component';
import { BlankcoverComponent } from './blankcover/blankcover.component';
import { RegistrationemailComponent } from './registrationemail/registrationemail.component';
import { GridpostComponent } from './gridpost/gridpost.component';
import { SidebaruserComponent } from './sidebaruser/sidebaruser.component';
import { MobilechatComponent } from './mobilechat/mobilechat.component';
import { ProfilecoverComponent } from './profilecover/profilecover.component';
import { FreindrequestComponent } from './freindrequest/freindrequest.component';
import { AddfreindComponent } from './addfreind/addfreind.component';
import { PostpageComponent } from './postpage/postpage.component';
import { SearchComponent } from './search/search.component';
import { AddfreindpageComponent } from './addfreindpage/addfreindpage.component';
import { MyfreindpageComponent } from './myfreindpage/myfreindpage.component';
import { FreindprofileComponent } from './freindprofile/freindprofile.component';
import { StrangerprofileComponent } from './strangerprofile/strangerprofile.component';
import { SettingComponent } from './setting/setting.component';
import { SinglepostComponent } from './singlepost/singlepost.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutusComponent,
    LoginComponent,
    ProfileComponent,
    FreindsComponent,
    ChatComponent,
    PhotosComponent,
    EditprofileComponent,
    RecoverpasswordComponent,
    ListusersComponent,
    UserdirectoryComponent,
    NotificationComponent,
    BlankcoverComponent,
    RegistrationemailComponent,
    GridpostComponent,
    SidebaruserComponent,
    MobilechatComponent,
    ProfilecoverComponent,
    FreindrequestComponent,
    AddfreindComponent,
    PostpageComponent,
    SearchComponent,
    AddfreindpageComponent,
    MyfreindpageComponent,
    FreindprofileComponent,
    StrangerprofileComponent,
    SettingComponent,
    SinglepostComponent,

  ],
  imports: [
    BrowserModule,
    SidebarModule, AppRoutingModule, AccordionModule,
    InputTextModule, BrowserAnimationsModule, MatSliderModule,
    MatSidenavModule,  FormsModule , MatCheckboxModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatRadioModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,  AngularFireStorageModule,
    OwlDateTimeModule, OwlNativeDateTimeModule,  NgxUiLoaderModule,
    MatDatepickerModule, MatNativeDateModule, NgMultiSelectDropDownModule.forRoot(),
    NgbModule, NgImageSliderModule, AngularFireAuthModule, HttpClientModule
   
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
