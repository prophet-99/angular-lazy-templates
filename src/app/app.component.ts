import { Component } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public flowState$ = new BehaviorSubject<FlowStateType>('NOT_STARTED');
}

type FlowStateType = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED';
