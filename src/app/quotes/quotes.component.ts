import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent {
  quotes: string[] = [
    "Patience is a key element of success",
    "If you think your teacher is tough, wait till you get a boss",
    "Life is not fair — get used to it!",
    "Success is a lousy teacher. It seduces smart people into thinking they can’t lose",
    "Be nice to nerds. Chances are you’ll end up working for one"
  ];

  addQuote(quote: string) {
    this.quotes.push(quote);
  }
}
