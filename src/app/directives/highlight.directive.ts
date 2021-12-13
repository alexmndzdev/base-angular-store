import { Directive, ElementRef } from '@angular/core';

// Custom Directive
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = '#9996A5';
  }

}
