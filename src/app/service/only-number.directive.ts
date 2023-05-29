import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})
export class OnlyNumberDirective {

  constructor(private el: ElementRef) { }

  @Input() OnlyNumber: string = '' ;

    @HostListener('keydown', ['$event']) onKeyDown(event:any) {
      let e = <KeyboardEvent> event;
      if (this.OnlyNumber == 'true') {
          if ((e.shiftKey || (e.keyCode < 35 || e.keyCode > 57)) &&

          (e.keyCode != 8) && (e.keyCode != 9) && (e.keyCode != 13) && (e.keyCode != 32) &&
          (e.keyCode < 96 || e.keyCode > 105)) {
              e.preventDefault();
          }
        }
    }
}
