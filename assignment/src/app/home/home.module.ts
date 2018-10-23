import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatSnackBarModule,
  MatToolbarModule,
  MatMenuModule  } from '@angular/material';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonService } from '../login/service/common.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    CommonService
  ],
  declarations: [HomeComponent],
  providers: [CommonService]
})
export class HomeModule { }
