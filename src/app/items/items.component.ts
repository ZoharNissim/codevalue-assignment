import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  @Input() items: any = [];
  @Input() selectedItem = {};
  @Output() removeItemFromList = new EventEmitter();
  @Output() editItemInList = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  removeItem(id: number) {
    this.removeItemFromList.emit(id);
  }

  editItem(id: number) {
    this.editItemInList.emit(id);
  }
}
