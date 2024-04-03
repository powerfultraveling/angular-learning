import {
  EventEmitter,
  Component,
  ViewChild,
  ElementRef,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-products-filter',
  standalone: true,
  imports: [],
  templateUrl: './products-filter.component.html',
  styleUrl: './products-filter.component.css',
})
export class ProductsFilterComponent {
  @ViewChild('searchInput') searchInputEl: ElementRef;
  @Output() searchChanged = new EventEmitter<string>();

  onClick() {
    this.searchChanged.emit(this.searchInputEl.nativeElement.value);
  }
}
