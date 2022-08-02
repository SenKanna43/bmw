import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmw';
  changeImage(color: string){
    console.log(color);
    if(color == 'black'){
      var a:any = document.getElementById('bike')
      a.style.backgroundImage = 'url(assets/BMW3.png)'
    }
    else if (color == 'blue'){
      var a:any = document.getElementById('bike')
      a.style.backgroundImage = 'url(assets/BMW2.png)'
    }
    else{
      var a:any = document.getElementById('bike')
      a.style.backgroundImage = 'url(assets/BMW1.png)'
    }
  }
}
