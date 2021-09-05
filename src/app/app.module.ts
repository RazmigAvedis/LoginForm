import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { Routes} from '@angular/router';
import { initializeKeycloak } from './utility/app.init';
import { AppComponent } from './app.component';   

import { LoginComponent } from './login/login.component';
import { FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
;

const routes: Routes = [ 
  {path:'', component:LoginComponent}
] ;

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      BrowserModule,
      FormsModule,
      FlexLayoutModule,
      MatFormFieldModule,
      MatInputModule ,
      MatButtonModule ,
      MatCardModule,
      MatToolbarModule  
  ],
  exports: [RouterModule],
  declarations: [
      AppComponent,  
      LoginComponent, HomeComponent, ProfileComponent
  ],
  bootstrap: [AppComponent]
  })

export class AppModule { }
