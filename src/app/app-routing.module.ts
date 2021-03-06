import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ChatComponent } from './chat/chat.component';
import { FreindsComponent } from './freinds/freinds.component';
import { PhotosComponent } from './photos/photos.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { RecoverpasswordComponent } from './recoverpassword/recoverpassword.component';
import { ListusersComponent } from './listusers/listusers.component';
import { UserdirectoryComponent } from './userdirectory/userdirectory.component';
import { NotificationComponent } from './notification/notification.component';
import { BlankcoverComponent } from './blankcover/blankcover.component';
import { GridpostComponent } from './gridpost/gridpost.component';
import { RegistrationemailComponent } from './registrationemail/registrationemail.component';
import { MobilechatComponent } from './mobilechat/mobilechat.component';
import { FreindrequestComponent } from './freindrequest/freindrequest.component';
import { SearchComponent } from './search/search.component';
import { AddfreindpageComponent } from './addfreindpage/addfreindpage.component';
import { AddfreindComponent } from './addfreind/addfreind.component';
import { FreindprofileComponent } from './freindprofile/freindprofile.component';
import { StrangerprofileComponent } from './strangerprofile/strangerprofile.component';
import { SettingComponent } from './setting/setting.component';
import { SinglepostComponent } from './singlepost/singlepost.component';
import { TermsComponent } from './terms/terms.component';
import { PolicyComponent } from './policy/policy.component';
import { FeedbackComponent } from './feedback/feedback.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    children: []
  },
  {
    path: 'navbar',
    pathMatch: 'full',
    component: HeaderComponent,
    children: []
  },
  {
    path: 'homepage',
    pathMatch: 'full',
    component: HomepageComponent,
    children: []
  },

  {
    path: 'profile',
    pathMatch: 'full',
    component: ProfileComponent,
    children: []
  },
  {
    path: 'chat',
    pathMatch: 'full',
    component: ChatComponent,
    children: []
  },
  {
    path: 'about',
    pathMatch: 'full',
    component:  AboutusComponent,
    children: []
  },
  {
    path: 'freinds',
    pathMatch: 'full',
    component:FreindsComponent,
    children: []
  },
  {
    path: 'photos',
    pathMatch: 'full',
    component: PhotosComponent,
    children: []
  },
  {
    path: 'edit_profile',
    pathMatch: 'full',
    component: EditprofileComponent,
    children: []
  },
  {
    path: 'recover_password',
    pathMatch: 'full',
    component: RecoverpasswordComponent,
    children: []
  },
  {
    path: 'list_user',
    pathMatch: 'full',
    component: ListusersComponent,
    children: []
  },
  {
    path: 'user_directory',
    pathMatch: 'full',
    component: UserdirectoryComponent,
    children: []
  },
  {
    path: 'notification',
    pathMatch: 'full',
    component: NotificationComponent,
    children: []
  },
  {
    path: 'blank_cover',
    pathMatch: 'full',
    component: BlankcoverComponent,
    children: []
  },
  {
    path: 'registration_email',
    pathMatch: 'full',
    component: RegistrationemailComponent,
    children: []
  },
  {
    path: 'grid_post',
    pathMatch: 'full',
    component: GridpostComponent,
    children: []
  },
  {
    path: 'mobile_chat',
    pathMatch: 'full',
    component: MobilechatComponent,
    children: []
  },
  {
    path: 'freind_request',
    pathMatch: 'full',
    component: FreindrequestComponent,
    children: []
  },
  {
    path: 'search',
    pathMatch: 'full',
    component: SearchComponent,
    children: []
  },
  {
    path: 'notification',
    pathMatch: 'full',
    component: NotificationComponent,
    children: []
  },
  {
    path: 'add_freind',
    pathMatch: 'full',
    component: AddfreindComponent,
    children: []
  },
  {
    path: 'freind_profile',
    pathMatch: 'full',
    component: FreindprofileComponent,
    children: []
  },
  {
    path: 'stranger_profile',
    pathMatch: 'full',
    component: StrangerprofileComponent,
    children: []
  },
  {
    path: 'setting',
    pathMatch: 'full',
    component: SettingComponent,
    children: []
  },
  {
    path: 'post',
    pathMatch: 'full',
    component: SinglepostComponent,
    children: []
  },
  {
    path: 'terms',
    pathMatch: 'full',
    component: TermsComponent,
    children: []
  },
  {
    path: 'policy',
    pathMatch: 'full',
    component: PolicyComponent,
    children: []
  },
  {
    path: 'feedback',
    pathMatch: 'full',
    component: FeedbackComponent,
    children: []
  },
 
 
  
 
    
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
