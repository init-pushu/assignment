import { Component, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <h1>Dashboard</h1>
    <ng-container #vc></ng-container>
  `
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('vc', { read: ViewContainerRef }) vc!: ViewContainerRef;

  async ngAfterViewInit() {
    const { SearchComponent } = await import('search1/SearchComponent');
    this.vc.createComponent(SearchComponent);
  }
}
