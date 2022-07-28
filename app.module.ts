import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { OneComponent } from './one/one.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

import { StaffComponent } from './staff/staff.component';


import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';



const routes: Routes = [
  {path:'one',component:OneComponent},
{path:'two',component:StudentComponent},
{path:'staff',component:StaffComponent},
];



 
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    StudentComponent,
    StaffComponent,
  ],
  imports: [

BrowserModule,FormsModule ,

AppRoutingModule,MatIconModule,MatButtonModule,RouterModule.forRoot(routes),MatSelectModule,MatRadioModule,MatDatepickerModule,
    BrowserAnimationsModule,MatToolbarModule,MatSidenavModule,MatListModule,MatFormFieldModule,MatInputModule,MatSliderModule,
    MatNativeDateModule,
  
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
