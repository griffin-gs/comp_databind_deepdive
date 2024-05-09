import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild
} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-server-element',
  standalone: true,
    imports: [
        NgForOf,
        NgIf
    ],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element!: { type: string; name: string; content: string; };
  @Input() name!: string;
  @ViewChild('heading', {static: true}) header!: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph !: ElementRef;

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit called");
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(): void {
    console.log("ngDoCheck called!");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called!");
    console.log("Text Content of paragraph: " + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called!");
    console.log('Text content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
