import { Component, ViewChild, ViewContainerRef } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

const delayFn = (timing: number) =>
  new Promise<void>((res) => {
    setTimeout(() => {
      res();
    }, timing);
  });

const loadDeps = () =>
  Promise.allSettled([
    import('./components/about/about.component'),
    import('./components/skills/skills.component'),
  ]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('contentSlot', { read: ViewContainerRef })
  public contentSlot!: ViewContainerRef;
  public flowState$ = new BehaviorSubject<FlowStateType>('NOT_STARTED');

  public async elementOnViewport(): Promise<void> {
    await delayFn(1000);
    this.flowState$.next('IN_PROGRESS');

    const [aboutRef, skillsRef] = await loadDeps();
    if (aboutRef.status === 'rejected' || skillsRef.status === 'rejected') {
      this.flowState$.next('FAILED');
      return;
    }

    await delayFn(3000);
    this.contentSlot.createComponent(aboutRef.value.AboutComponent);
    this.contentSlot.createComponent(skillsRef.value.SkillsComponent);
    this.flowState$.next('COMPLETE');
  }
}

type FlowStateType = 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETE' | 'FAILED';
