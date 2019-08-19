import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material Libs
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [],
  exports:[
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    MatTableModule,
    MatSnackBarModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
