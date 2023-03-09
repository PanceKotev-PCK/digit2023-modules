import { Component, ViewEncapsulation } from '@angular/core';
import { SuppliesService } from 'src/app/services/supplies.service';
import { ISupply } from '../../models';

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
