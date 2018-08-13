import { Component, OnInit, Input, OnChanges, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  visible = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {

  }
  open() {
    // this.renderer.setStyle(this.el.nativeElement, "display", "block");
    // this.renderer.setStyle(this.el.nativeElement, "display", "block");
    this.visible = true;
  }
  close() {
    this.visible = false;
    // this.renderer.setStyle(this.el.nativeElement, "display", "nonde");
  }
  ngOnInit() {

  }

}
