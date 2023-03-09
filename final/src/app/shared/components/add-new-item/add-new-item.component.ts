import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent {
 @Output() public addButtonClicked = new EventEmitter<void>();

 public onAddItemClick(): void {
  this.addButtonClicked.emit();
 }
}
