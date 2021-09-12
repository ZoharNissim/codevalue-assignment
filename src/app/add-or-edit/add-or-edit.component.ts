import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.scss']
})
export class AddOrEditComponent implements OnInit {
  @Input() lastId = 0;
  @Input() selectedItem = {
    id: null,
    name: null,
    description: null,
    price: null
  };

  @Output() saveItem = new EventEmitter();

  name = '';
  description = '';
  price = 0;

  constructor() { }

  ngOnInit(): void { }

  save() {
    let obj = {
      id: this.selectedItem.id !== null && this.selectedItem.id! <= this.lastId ? this.selectedItem.id : this.lastId + 1,
      name: this.name,
      description: this.description,
      price: this.price
    }

    this.saveItem.emit(obj);
  }

}
