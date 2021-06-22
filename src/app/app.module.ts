import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { SpecialTestComponent } from './special-test/special-test.component';
import { InsurranceCompanyComponent } from './insurrance-company/insurrance-company.component';
import { CenterTypeComponent } from './center-type/center-type.component';
import { CenterComponent } from './center/center.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: CenterComponent},
  { path: 'page-1', component: SpecialTestComponent},
  { path: 'page-2', component: InsurranceCompanyComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    SpecialTestComponent,
    InsurranceCompanyComponent,
    CenterTypeComponent,
    CenterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    AppRoutingModule, 
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
