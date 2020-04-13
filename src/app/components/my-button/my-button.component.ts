import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.scss'],
})
export class MyButtonComponent implements OnInit {
  @Input() type: 'primary' | 'secondary' = 'primary';
  @Input() disabled: boolean = false;

  constructor() {}

  ngOnInit(): void {
    console.log(this.disabled);
  }
}
