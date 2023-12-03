import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferListComponent } from './transfer-list.component';
import { TransferEditComponent } from './transfer-edit.component';

const routes: Routes = [
  { path: '', component: TransferListComponent },
  { path: 'edit', component: TransferEditComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ],
})

export class TransferRoutingModule { }
