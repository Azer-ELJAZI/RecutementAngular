import { Component } from '@angular/core';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent {
  openLink(){
    window.open("/liste")
  }
  openLink2(){
    window.open("/offre")
  }

}
