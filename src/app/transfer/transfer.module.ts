import { NgModule } from '@angular/core';

import { TransferRoutingModule } from './transfer-routing.module';
import { TransferListComponent } from './transfer-list.component';
import { TransferEditComponent } from './transfer-edit.component';

@NgModule({
  imports: [
    TransferRoutingModule,
  ],
  declarations: [
    TransferListComponent,
    TransferEditComponent,
  ]
})

export class TransferModule { }

