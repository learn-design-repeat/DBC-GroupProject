import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {
  @Input() colorArray: { Colour: String; imageColor: String; }[]

  @Input() selectedColor: number
  @Output() selectedColorChange = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  public buttonTextColor(color: any) {
    return color === "Black" || color === "black" ? "white" : "black"
  }

  public changeSelectedColor(index: number) {
    this.selectedColorChange.emit(index)
  }

}
