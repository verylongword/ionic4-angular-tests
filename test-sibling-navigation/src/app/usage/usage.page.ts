import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usage',
  templateUrl: 'usage.page.html',
  styleUrls: ['usage.page.scss']
})
export class UsagePage {
  constructor( private route: ActivatedRoute, private router: Router) { }

  public goToAccounts(){

    console.log( 'USAGE goToAccounts( payments ): url = '+ this.router.url);
    this.router.navigate( ['../payments'], {relativeTo: this.route} );
  }
 
}
