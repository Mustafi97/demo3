import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/components/shared/shared.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from 'src/app/shared/components/register/register.component';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { CreateComponent } from 'src/app/shared/components/create/create.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';p
import  { HttpClientModule } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/_services/auth.service';





@NgModule({
  declarations: [
    DefaultComponent,
    RegisterComponent,
    LoginComponent,
    CreateComponent,

    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService,
    AuthService,
    ]
   
})
export class DefaultModule { }
