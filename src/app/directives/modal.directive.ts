import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';
import { hostElement } from '@angular/core/src/render3/instructions';
import { ModalComponent } from '../modal/modal.component';

@Directive({
  selector: '[appModal]'
})

export class ModalDirective {
  @HostBinding('style.display') private display: string;
  @HostBinding('style.overflow') private overflow: string;

  constructor(private modal: ModalComponent,
    private el: ElementRef,
    private renderer: Renderer2) {

  }

  @HostListener("click", ["$event"]) onclick($event: MouseEvent) {
    if ($event.target == this.el.nativeElement) {
      this.modal.close()
    }
  }

}
