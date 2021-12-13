import { Component, OnInit } from '@angular/core';
import { Deal } from '../interfaces/deal-interface';
import { MatTableDataSource } from '@angular/material/table';
import { DealsService } from '../services/deals-service/deals-service.service';
import { debounceTime, distinctUntilChanged, Observable, Subject, switchMap, of } from 'rxjs';

@Component({
  selector: 'app-deals-table',
  templateUrl: './deals-table.component.html',
  styleUrls: ['./deals-table.component.scss']
})
export class DealsTableComponent implements OnInit {
  deals$!: Observable<Deal[]>;
  displayedColumns: string[] = ['image', 'name', 'sale_price', 'price'];
  dataSource = new MatTableDataSource<Deal>();
  private searchTerms = new Subject<string>();

  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {
    this.deals$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.dealsService.getDeals(term))
    )
  }

  getDeals(gameName: string){
    this.dealsService.getDeals(gameName)
    .subscribe(deals => this.deals$ = of(deals));
  }

  searchGame(gameName: string) : void {
    this.searchTerms.next(gameName);
  }
}
