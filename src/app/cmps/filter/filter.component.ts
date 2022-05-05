import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  constructor() {}

  @Output('filter') onFilter = new EventEmitter<string>();

  filter: string = '';

  ngOnInit(): void {}

  onChangeFilter(): void {
    this.onFilter.emit(this.filter);
  }
}
