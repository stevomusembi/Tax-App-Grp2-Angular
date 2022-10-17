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
import { BillsListComponent } from './bills-list/bills-list.component';
import { BillItemComponent } from './bills-list/bill-item/bill-item.component';
import { EditBillComponent } from './edit-bill/edit-bill.component';
import { AddBillItemComponent } from './add-bill-item/add-bill-item.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaxCalculatorComponent,
    BillManagerComponent,
    TeamMembersComponent,
    BillsListComponent,
    BillItemComponent,
    EditBillComponent,
    AddBillItemComponent,
    FooterComponent,
    
   
  ],
  imports:[
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule,
      
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
