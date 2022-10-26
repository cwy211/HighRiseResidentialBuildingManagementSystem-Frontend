import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Input() term: string = '';
  @Output() onSearch: EventEmitter<any> = new EventEmitter;

  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    this.onSearch.emit(this.searchTerm);
  }

}
