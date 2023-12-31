import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { PatientAbmComponent } from './patient-abm/patient-abm.component';
import { RecuperarContrasenaComponent } from './recover-password/recuperar-contrasena.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbarIS/navbar.component';
import { NavbarRComponent } from './shared/navbarR/navbar-r.component';
import { SingUpComponent } from './sign-up/sing-up.component';
import { NavbarAdminComponent } from './shared/navbar-admin/navbar-admin.component';
import { AreaAbmComponent } from './area-abm/area-abm.component';
import { NurseAbmComponent } from './nurse-abm/nurse-abm.component';
import { DashboardAdmiComponent } from './dashboard-admi/dashboard-admi.component';
import { NurseFormComponent } from './nurse-form/nurse-form.component';
import { AreaFormComponent } from './area-form/area-form.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { NavbarUserComponent } from './shared/navbar-user/navbar-user.component';
import { AreaAbmUserComponent } from './area-abm-user/area-abm-user.component';
import { PatientAbmUserComponent } from './patient-abm-user/patient-abm-user.component';
import { NurseAbmUserComponent } from './nurse-abm-user/nurse-abm-user.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PatientFormComponent,
    UserFormComponent,
    LoginComponent,
    PatientAbmComponent,
    RecuperarContrasenaComponent,
    NavbarComponent,
    NavbarRComponent,
    SingUpComponent,
    NavbarAdminComponent,
    AreaAbmComponent,
    NurseAbmComponent,
    DashboardAdmiComponent,
    NurseFormComponent,
    AreaFormComponent,
    DashboardUserComponent,
    NavbarUserComponent,
    AreaAbmUserComponent,
    PatientAbmUserComponent,
    NurseAbmUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
