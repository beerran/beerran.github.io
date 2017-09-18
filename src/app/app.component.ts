import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myData = [
    {
      myProperty: 'Hello',
      name: 'Lorem'
    },
    {
      myProperty: 'World',
      name: 'Ipsum'
    }
  ];
  myUnfetchedData = [];
  firstItem: any = null;
  secondItem: any = null;

  firstItemSelected(item: {myProperty: string, name: string}) {
    console.log('Yay, you chose', item);
    this.firstItem = item;
  }

  secondItemSelected(item: {firstName: string, lastName: string}) {
    console.log('Wohoo, you chose', item);
    this.secondItem = item;
  }

  fetchData() {
    this.myUnfetchedData = [
      {
        firstName: 'Emil',
        lastName: 'Larsson'
      },
      {
        firstName: 'Sonny',
        lastName: 'Nimelius'
      },
      {
        firstName: 'Anders',
        lastName: 'Sjöholm'
      },
      {
        firstName: 'Daniel',
        lastName: 'Klingzell'
      },
      {
        firstName: 'Sofia',
        lastName: 'Enqvist'
      },
      {
        firstName: 'Anna',
        lastName: 'Österberg'
      }
    ]
  }
}
