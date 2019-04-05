import { trigger, transition, animate, style, keyframes, useAnimation, query, animateChild, group, stagger } from '@angular/animations';
import { slideInAnimation, slideOutAnimation } from '../animations';
import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'note-app',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  animations: [
    trigger('noteItem', [
      transition(':enter', [
        useAnimation(slideInAnimation)
      ]),
      transition(':leave', [
        style({ backgroundColor: '#df3920' }),
        useAnimation(slideOutAnimation)
      ]),
    ]),

    trigger('notesWrapper', [
      transition(':enter', [
        group([
          query('h1', [
            style({ opacity: 0 }),
            animate(300)
          ]),
          query('input', [
            style({ opacity: 0 }),
            animate(300)
          ]),
          query('@noteItem',
            stagger(200, animateChild())
          )
        ])

      ])
    ]),
  ]
})

export class NoteComponent {
  notes: string[] = [
    'Create Mock Up',
    'Contact with client Mike',
    'Drink a cup of delicious coffee',
    'Plan for Sunday Morning'
  ];

  addNote(input: HTMLInputElement) {
    if (this.notes.indexOf(input.value) === -1) {
      this.notes = [input.value, ...this.notes];
    }
    input.value = '';
  }

  removeNote(note, i) {
    if (i > -1) {
      this.notes.splice(i, 1);
    }
  }

  reorderList(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex);
  }
}
