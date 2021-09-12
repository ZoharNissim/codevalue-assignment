import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  @Output() addItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  openAddOrEdit() {
    this.addItem.emit();
  }

}
