import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {

  @HostListener('blur') onBlur () {
   let changedValue:string= this.elRef.nativeElement.value.toUpperCase();
   this.renderer.setProperty(this.elRef.nativeElement, 'value', changedValue);
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
  
  }

  ngOnInit()
  {
    console.log(this.elRef.nativeElement.value)
  }



}