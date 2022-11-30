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
ContentChild,

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
AfterViewChecked,
ContentChild {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input('name') name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  constructor() {
  }
  descendants: boolean;
  emitDistinctChangesOnly: boolean;
  first: boolean;
  read: any;
  isViewQuery: boolean;
  selector: any;
  static?: boolean;

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit() {
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent)
    console.log('Text Content:' + this.header.nativeElement.textContent)
  }

  ngDoCheck() {
  }

  ngAfterContentInit() {
    console.log('Text Content:' + this.header.nativeElement.textContent)
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
