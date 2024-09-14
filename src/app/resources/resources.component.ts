import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  resources: { name: string, url: string }[] = [
    { name: 'Bill Gates on Wikipedia', url: 'https://en.wikipedia.org/wiki/Bill_Gates' },
    { name: 'Bill & Melinda Gates Foundation', url: 'https://www.gatesfoundation.org/' },
    { name: 'Gates Notes', url: 'https://www.gatesnotes.com/' },
    { name: 'Bill Gates on Twitter', url: 'https://twitter.com/billgates' }
  ];

  addResource(name: string, url: string) {
    this.resources.push({ name, url });
  }
}
