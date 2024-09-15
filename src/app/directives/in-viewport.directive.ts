import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appInViewport]',
})
export class InViewportDirective {
  @Output()
  appInViewport: EventEmitter<void> = new EventEmitter();

  constructor(private _elementRef: ElementRef) {}

  private _observer!: IntersectionObserver;

  ngAfterViewInit() {
    this._observer = new IntersectionObserver((entries) => {
      const entry = entries[entries.length - 1];
      if (entry.isIntersecting) {
        this.appInViewport.emit();
        this._observer.disconnect();
      }
    });

    this._observer.observe(this._elementRef.nativeElement);
  }

  ngOnDestroy(): void {
    this._observer.disconnect();
  }
}
