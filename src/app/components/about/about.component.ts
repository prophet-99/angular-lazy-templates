import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [],
})
export class AboutComponent {
  public roles = [
    { title: 'UI/UX Designer' },
    { title: 'Web Design' },
    { title: 'Frontend Developer' },
  ];
}
