import { NgModule } from '@angular/core';
import { MatButtonModule,MatToolbarModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';


const Material = [
 MatButtonModule,
 MatToolbarModule,
 MatIconModule,
 MatCardModule,
 MatFormFieldModule

];


@NgModule({
  
  imports: [ Material ],
  exports:[ Material]
})
export class MaterialModule { }
