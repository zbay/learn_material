import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyFormComponent} from './my-form/my-form.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserTableComponent } from './user-table/user-table.component';

const routes: Routes = [{path: '', pathMatch: 'full', component: MyFormComponent},
{path: 'dialogs', pathMatch: 'full', component: DialogDemoComponent},
{path: 'tooltip', pathMatch: 'full', component: TooltipDemoComponent},
{path: 'snackbar', pathMatch: 'full', component: SnackbarDemoComponent},
{path: 'sidenav', pathMatch: 'full', component: SideNavComponent},
{path: 'toolbar', pathMatch: 'full', component: ToolbarComponent},
{path: 'users', pathMatch: 'full', component: UserTableComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
