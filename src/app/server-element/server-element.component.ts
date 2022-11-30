import { createViewChild } from '@angular/compiler/src/core';
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
ViewChild,
ElementRef,

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
  @ViewChild('heading') header: ElementRef;
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
    console.log('Text Content:' + this.header.nativeElement.textContent)
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
