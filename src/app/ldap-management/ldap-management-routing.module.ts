import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LdapListComponent} from "./ldap-list/ldap-list.component";
import {LdapAddComponent} from "./ldap-add/ldap-add.component";
import {LdapEditComponent} from "./ldap-edit/ldap-edit.component";
import {AuthGuard} from "../security/auth.guard";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";

const routes: Routes = [
  {path: 'users',
    canActivate: [AuthGuard],
    children: [
      { path: 'list', component: LdapListComponent },
      { path: 'add', component: LdapAddComponent },
      { path: 'edit/:id', component: LdapEditComponent },
      { path: '', redirectTo: 'users/list', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LdapManagementRoutingModule { }
