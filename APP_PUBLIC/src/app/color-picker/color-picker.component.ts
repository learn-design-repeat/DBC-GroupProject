import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
  styles: ['.aw-btn-selected { border: 3px lightblue; }', 'button { transition: transform 0.8s cubic-bezier(.17,.67,.08,1); }', 'button:hover { opacity: 0.8; transform: translateY(-5px);}']
})
export class ColorPickerComponent implements OnInit {
  @Input() colorArray: { Colour: String; imageColor: String; }[]

  @Input() selectedColor: number
  @Output() selectedColorChange = new EventEmitter<number>()

  buttonStyle = 'width: 42px; height:42px;';

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
