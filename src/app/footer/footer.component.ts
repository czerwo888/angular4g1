import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <p class="text-center">
      stworzone przez dodanie opcji --inlineTemplate
    </p>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
