import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
    name: 'dollar'
})
export class DollarPipe implements PipeTransform {
transform (val: number) : string{
    return `$ ${val.toFixed(2)}`;
}
} 