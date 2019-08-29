import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appender'
})
export class AppenderPipe implements PipeTransform {

  transform(input: string, position:string, textToAppend: string ):string {
    return position == 'pre' ? textToAppend + input : input + textToAppend;
    
    
    // let output = 'mailto//'+input;
    // return output;
  }

}