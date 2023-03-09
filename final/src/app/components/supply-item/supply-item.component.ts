import { Component, Input } from '@angular/core';
import { ISupply } from 'src/app/models/interfaces';

@Component({
  selector: 'app-supply-item',
  templateUrl: './supply-item.component.html',
  styleUrls: ['./supply-item.component.css']
})
export class SupplyItemComponent {
  @Input() public supplyItem: ISupply | undefined;
}
