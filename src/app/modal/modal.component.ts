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
    document.body.style.overflow = "hidden";
  }
  close() {
    this.visible = false;
    document.body.style.overflow = "auto";
    // this.renderer.setStyle(this.el.nativeElement, "display", "nonde");
  }
  ngOnInit() {

  }

}
