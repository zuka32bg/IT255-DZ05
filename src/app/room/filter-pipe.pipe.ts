import { Pipe, PipeTransform } from '@angular/core';
import { AppComponent } from '../app.component';

@Pipe({
  name: 'mypipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(items: any[], price: number): any {
    if (!items) return [];
    if (!price) return items;
    return items.filter(it => {
      return it.cena <= price;
    });
  }

}
