import { Directive, ElementRef, HostListener, Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {

  @Input() case:string;

  @HostListener('blur') onBlur () {
   let changedValue:string=   this.case ==='upper' ? this.elRef.nativeElement.value.toUpperCase():
                                                      this.elRef.nativeElement.value.toLowerCase() ;
   this.renderer.setProperty(this.elRef.nativeElement, 'value', changedValue);
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { 
  
  }

  ngOnInit()
  {
    console.log(this.elRef.nativeElement.value)
  }



}