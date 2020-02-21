import { Component, OnInit, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "counter-input",
  templateUrl: "./counter-input.component.html",
  styleUrls: ["./counter-input.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CounterInputComponent),
      multi: true
    }
  ]
})
export class CounterInputComponent implements ControlValueAccessor {
 
  _counterValue:{value:number,test:string}={value:0,test:"test"};

  writeValue(value: {value:number,test:string}) {
    if (value !== undefined) {
      this.counterValue = value;
    }
  }
  propagateChange = (_: {value:number,test:string}) => {};

  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched() {}

  setDisabledState?(isDisabled: boolean): void {
  }

  get counterValue() {
    return this._counterValue;
  }

  set counterValue(val) {
    this._counterValue = val;
    this.propagateChange(this._counterValue);
  }

  increment() {
    this.counterValue.value--;
  }

  decrement() {
    this.counterValue.value++;
  }
}
