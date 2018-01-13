import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import 'hammerjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule, MatSidenavModule, MatIconModule,
   MatInputModule, MatButtonModule, MatDialogModule, MatCardModule,
   MatTooltipModule, MatSnackBarModule, MatToolbarModule, MatTableModule} from '@angular/material';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { SnackbarDemoComponent } from './snackbar-demo/snackbar-demo.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { UserTableComponent } from './user-table/user-table.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DialogDemoComponent,
    MyDialogComponent,
    TooltipDemoComponent,
    SnackbarDemoComponent,
    SideNavComponent,
    NavBarComponent,
    ToolbarComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule, MatButtonModule, MatDialogModule, MatCardModule,
    MatTooltipModule, MatSnackBarModule, MatMenuModule, MatIconModule,
    MatSidenavModule, MatToolbarModule, MatTableModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
