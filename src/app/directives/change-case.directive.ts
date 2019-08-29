import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {

  @HostListener('blur') onBlur () {
    this.elRef.nativeElement.value = this.elRef.nativeElement.value.toUpperCase();
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
  
  }

  ngOnInit()
  {
    console.log(this.elRef.nativeElement.value)
  }



}