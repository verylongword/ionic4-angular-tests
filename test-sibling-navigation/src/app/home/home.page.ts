import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  constructor( private route: ActivatedRoute, private router: Router) { }

  public goToAccounts(){
    const url =  '/accounts/1234567891bcdefghijklmnopqrstuvwxyz/usage';

    console.log( 'HOME goToAccounts( usage ): url = '+ url);
    this.router.navigateByUrl( url );
  }
}
