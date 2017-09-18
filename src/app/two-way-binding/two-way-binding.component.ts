import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent {
  enableButton: boolean = false;
  @Input() username: string = '';


  onChange(newValue) {
    this.username = newValue;
    if ( this.username.length > 0) {
      this.enableButton = true;
    } else {
      this.enableButton = false;
    }
  }

  onClick() {
    this.username = '';
    this.enableButton = false;
  }
}
