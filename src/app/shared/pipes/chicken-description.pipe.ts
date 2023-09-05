import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'chickenDescription'
})
export class ChickenDescriptionPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/([кК]ур(?:иц|ин|o)[а-я]+)/g,
      (match: string) => match.toUpperCase());
  }

}
