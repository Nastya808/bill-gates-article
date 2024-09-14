import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BiographyComponent } from './biography/biography.component';
import { QuotesComponent } from './quotes/quotes.component';
import { ResourcesComponent } from './resources/resources.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, BiographyComponent, QuotesComponent, ResourcesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(QuotesComponent) quotesComponent!: QuotesComponent;
  @ViewChild(ResourcesComponent) resourcesComponent!: ResourcesComponent;

  newQuote = '';
  newResourceName = '';
  newResourceUrl = '';

  addQuote() {
    if (this.newQuote) {
      this.quotesComponent.addQuote(this.newQuote);
      this.newQuote = '';
    }
  }

  addResource() {
    if (this.newResourceName && this.newResourceUrl) {
      this.resourcesComponent.addResource(this.newResourceName, this.newResourceUrl);
      this.newResourceName = '';
      this.newResourceUrl = '';
    }
  }
}
