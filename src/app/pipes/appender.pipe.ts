import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appender'
})
export class AppenderPipe implements PipeTransform {

  transform(input: string, position:string, textToAppend: string ):string {
    
    
    let output = 'mailto//'+input;
    return output;
  }

}