import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { DisplayStudentsComponent } from './display-students/display-students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BalancePipe } from './balance.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    DisplayStudentsComponent,
    BalancePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
