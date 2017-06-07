import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[adsScrollImage]',
})
export class ScrollImageDirective implements OnInit {
  @Input() adsScrollImage: [number, number];
  @HostBinding('style.transform') transform: string;
  top: number;
  bottom: number;

  constructor(private el: ElementRef) {
  }

  @HostListener('window:resize')
  ngOnInit(): void {
    let el = this.el.nativeElement;
    const { height } = el.getBoundingClientRect();
    this.top = 0;
    while (el.offsetParent) {
      this.top += el.offsetTop;
      el = el.offsetParent;
    }
    this.bottom = this.top + height;
  }

  @HostListener('window:scroll')
  private onScroll(): void {
    if (!this.isInView()) {
      return;
    }

    const maxScroll = this.bottom;
    const minScroll = this.top > window.innerHeight ?
      this.top - window.innerHeight :
      0;
    const percent = this.adsScrollImage[0] +
      (this.adsScrollImage[1] - this.adsScrollImage[0]) *
      (window.scrollY - minScroll) / (maxScroll - minScroll);
    this.transform = `translateY(${percent}%)`;
  }

  private isInView(): boolean {
    return window.scrollY + window.innerHeight > this.top &&
      window.scrollY < this.bottom;
  }
}
