import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  template: `
    <h2>Resume Search</h2>
    <form (ngSubmit)="search()" style="margin-bottom: 1rem;">
      <label>
        Name:
        <input [(ngModel)]="name" name="name">
      </label>
      <label>
        Mobile:
        <input [(ngModel)]="mobile" name="mobile">
      </label>
      <button type="submit">Search</button>
    </form>

    <table *ngIf="results.length > 0" border="1" cellpadding="5">
      <tr><th>Name</th><th>Mobile</th></tr>
      <tr *ngFor="let r of results">
        <td>{{ r.name }}</td>
        <td>{{ r.mobile }}</td>
      </tr>
    </table>
  `
})
export class SearchComponent {
  name = '';
  mobile = '';
  results: { name: string; mobile: string }[] = [];

  search() {
    // Mock search results
    this.results = [
      { name: 'John Doe', mobile: '9999999999' },
      { name: 'Jane Smith', mobile: '8888888888' }
    ].filter(r =>
      (!this.name || r.name.toLowerCase().includes(this.name.toLowerCase())) &&
      (!this.mobile || r.mobile.includes(this.mobile))
    );
  }
}
