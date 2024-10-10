import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: ` 
    <h1>Welcome to {{ title }}!</h1> 
    <ul>
    @for (product of productTitles; track product){
      <li><a [routerLink]="['details/', $index]">{{product}}</a></li>
    }
    </ul>
    <span>
      <router-outlet/>
    </span>
    `,
})
export class AppComponent {
  title = '08-routing-recap';

  productTitles = ['Product 1', 'Product 2', 'Product 3'];
}
