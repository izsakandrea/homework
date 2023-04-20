import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  cards = [
    { id: 1, title: 'Alstroemeria', content: 'The alstroemeria, also called the Peruvian lily, features streaked or speckled blossoms in a range of colors, including white, yellow, orange, pink, and red.', image: 'https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Alstroemerias-min-300x214.jpg' },
    { id: 2, title: 'Calla Lily', content: 'Calla lilies come in a variety of different colors, from snow white to bright pink. They feature a beautiful trumpet shape with smooth, sword-like foliage.', image: 'https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Calla-Lilies-min-420x420.jpg'},
    { id: 3, title: 'Daisy', content: 'Daisies are a bright and fun flower. The petals come in a variety of colors, including white, blue, and lavender. Daisies feature a yellow central disc with a long stem.', image: 'https://ediblebloglive.wpengine.com/wp-content/uploads/2020/09/Daisies-min-300x200.jpg'}
  ];

  constructor (private router: Router, private apiService: ApiServiceService){}
 // @Input() index: number = 0;
 // @Output() deleteUser = new EventEmitter();

 goBack(){
  this.router.navigate(['/login']);
 }
 
deleteCard(card: { id: number; title: string; content: string; image: string; }) {
  const index = this.cards.indexOf(card);
  if (index > -1) {
    this.cards.splice(index, 1);
  }
}

getFact(){
  this.apiService.getFact().pipe(first()).subscribe((x : any) => {
    const fact = document.getElementById('fact');
    if(fact != null) {
      fact.innerHTML = x.fact;
    }
  })
}

}
