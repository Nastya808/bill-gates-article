import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuotesComponent } from './quotes/quotes.component';
import { BiographyComponent } from './biography/biography.component';
import { ResourcesComponent } from './resources/resources.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, QuotesComponent, BiographyComponent, ResourcesComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bill-gates-article';

  quotes: string[] = [
    "Patience is a key element of success",
    "If you think your teacher is tough, wait till you get a boss",
    "Life is not fair — get used to it!",
    "Success is a lousy teacher. It seduces smart people into thinking they can’t lose",
    "Be nice to nerds. Chances are you’ll end up working for one"
  ];
  
  resources: { name: string, url: string }[] = [
    { name: 'Bill Gates on Wikipedia', url: 'https://en.wikipedia.org/wiki/Bill_Gates' },
    { name: 'Bill & Melinda Gates Foundation', url: 'https://www.gatesfoundation.org/' },
    { name: 'Gates Notes', url: 'https://www.gatesnotes.com/' },
    { name: 'Bill Gates on Twitter', url: 'https://twitter.com/billgates' }
  ];

  newQuote: string = '';
  newResourceName: string = '';
  newResourceUrl: string = '';

  addQuote() {
    if (this.newQuote) {
      this.quotes.push(this.newQuote);
      this.newQuote = ''; 
    }
  }

  addResource() {
    if (this.newResourceName && this.newResourceUrl) {
      this.resources.push({ name: this.newResourceName, url: this.newResourceUrl });
      this.newResourceName = ''; 
      this.newResourceUrl = ''; 
    }
  }
}
