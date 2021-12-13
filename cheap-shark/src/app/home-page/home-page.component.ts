import { Component, OnInit } from '@angular/core';
import { Deal } from '../interfaces/deal-interface';
import { DealsService } from '../services/deals-service/deals-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  deals?: Deal[];
  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {
    this.getDeals()
  }

  getDeals(){
    this.dealsService.getDeals()
    .subscribe(deals => this.deals = deals);
  }
}
