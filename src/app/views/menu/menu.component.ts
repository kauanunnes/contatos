import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() modalSituation!:boolean;
  @Output() eventEmitter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  mostrarModalClick():void {
    this.eventEmitter.emit(this.modalSituation)
  }

}
