import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth-service.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent},
//   { path: 'users', component: UsersComponent, children : [
//     { path: ':id/:name', component: UserComponent },
//   ] },  
//   { path: 'servers', component: ServersComponent, children: [
//     { path: ':id', component: ServerComponent },
//     { path: ':id/edit', component: EditServerComponent}]
//   },
//   { path: 'not-found', component: PageNotFoundComponent},
//   { path: '**', redirectTo: '/not-found'}
// ];
 
@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    HomeComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent,
    UserComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
