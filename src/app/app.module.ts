import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TaxCalculatorComponent } from './tax-calculator/tax-calculator.component';
import { BillManagerComponent } from './bill-manager/bill-manager.component';
import { TeamMembersComponent } from './team-members/team-members.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaxCalculatorComponent,
    BillManagerComponent,
    TeamMembersComponent,
   
  ],
  imports:[
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot([
      {path: 'tax-calculator', component: TaxCalculatorComponent},
      {path: 'bill-manager', component: BillManagerComponent},
      {path: 'team-members', component: TeamMembersComponent},
      {path: '', redirectTo: '/tax-calculator', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
