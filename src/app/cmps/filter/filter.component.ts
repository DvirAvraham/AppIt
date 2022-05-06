import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  @Output('filter') onFilter = new EventEmitter<string>();
  @Input() isContactPage: boolean = false;

  filter: string = '';
  placeHolder: string = '  Search for artists, venues, and events';

  ngOnInit(): void {
    if (this.isContactPage) this.placeHolder = '  Search contact';
  }

  onChangeFilter(): void {
    this.onFilter.emit(this.filter);
  }
}
