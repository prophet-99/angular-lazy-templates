import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('contentSlot', { read: ViewContainerRef })
  public contentSlot!: ViewContainerRef;
  public flowState$ = new BehaviorSubject<FlowStateType>('NOT_STARTED');

  public elementOnViewport(): void {
    this.flowState$.next('IN_PROGRESS');

    import('./components/about/about.component').then(
      (aboutRef) => {
        this.contentSlot.createComponent(aboutRef.AboutComponent);
        this.flowState$.next('COMPLETE');
      },
      (err) => this.flowState$.next('FAILED')
    );
  }
}

type FlowStateType = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED';
