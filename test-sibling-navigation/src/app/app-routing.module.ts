import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ 
  path: '', redirectTo: 'home', pathMatch: 'full'
  },{ path: 'home', loadChildren: './home/home.module#HomePageModule'
  },{ path: 'accounts/:d/usage', loadChildren: './usage/usage.module#UsagePageModule'
  },{ path: 'accounts/:d/payments', loadChildren: './payments/payments.module#PaymentsPageModule'
}];
@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(routes,
    { 
      enableTracing: true,        // <-- debugging only
      initialNavigation: true,
      relativeLinkResolution: 'corrected'   // Fix Router BUG
    }
  )],
  exports: [RouterModule]

})
export class AppRoutingModule {}
