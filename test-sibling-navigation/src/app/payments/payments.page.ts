import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: 'payments.page.html',
  styleUrls: ['payments.page.scss']
})
export class PaymentsPage {
  constructor( private route: ActivatedRoute, private router: Router) { }

  public goToAccounts(){

    console.log( 'PAYMENTS goToAccounts( usage ): url = '+ this.router.url);
    this.router.navigate( ['../usage'], {relativeTo: this.route}  );
  }

}
