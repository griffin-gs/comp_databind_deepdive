import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-cockpit',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverAdded: EventEmitter<{serverName: string, serverContent: string}> = new EventEmitter<{serverName: string; serverContent: string}>();
  @Output('bpAdded') blueprintAdded: EventEmitter<{serverName: string, serverContent: string}> = new EventEmitter<{serverName: string; serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput!: ElementRef;

  onAddServer(nameInput: HTMLInputElement) {
    this.serverAdded.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintAdded.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }
}
