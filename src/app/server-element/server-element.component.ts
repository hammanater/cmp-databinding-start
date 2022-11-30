import { Component,
OnInit,
Input,
ViewEncapsulation,
OnChanges,
SimpleChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,

} from '@angular/core';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
OnDestroy,
AfterViewChecked {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input('name') name: string;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
  }

  ngDoCheck() {
  }

  ngAfterContentInit() {
  }

  ngAfterContentChecked() {
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
  }

  ngOnDestroy() {
  }
}
