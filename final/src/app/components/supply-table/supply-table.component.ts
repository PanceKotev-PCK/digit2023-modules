import { Component, ViewEncapsulation } from '@angular/core';
import { ISupply } from 'src/app/models/interfaces';
import { SuppliesService } from 'src/app/services/supplies.service';

@Component({
  selector: 'app-supply-table',
  templateUrl: './supply-table.component.html',
  styleUrls: ['./supply-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SupplyTableComponent {
  public supplyItems: ISupply[] = [];

  public constructor(private readonly _service: SuppliesService){
    this.supplyItems = _service.getSupplies();
  }
}
