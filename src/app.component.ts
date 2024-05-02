import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  price = {
    stingPrice: "",
    isClicked: false
  };
  youtubelink = {
    link: "",
    isClicked: false
  }
  youtubelink2 = {
    link: "",    
    isClicked: false
  }
  youtubeInfo = {
    info: "",
    isClicked: false
  }
  hobbies = {
    hobbies: "",
    isClicked: false
  }
  aboutInfo = {
    about: "",
    isClicked: false
  }
  showInformation(index: number){      
    this.price.stingPrice = ""
    this.youtubeInfo.info = ""
    this.youtubelink.link = ""
    this.youtubelink2.link = ""
    this.aboutInfo.about = ""
    this.hobbies.hobbies = ""    
    switch(index){
      case 0: this.aboutInfo.isClicked? this.aboutInfo.about = "" : this.aboutInfo.about = "I am me and that's all you need to know about me!";
              this.aboutInfo.isClicked = !this.aboutInfo.isClicked; break;
      case 1: this.hobbies.isClicked? this.hobbies.hobbies = "": this.hobbies.hobbies = "My hobbies are playing games and habing fun!";
              this.hobbies.isClicked =  !this.hobbies.isClicked; break;
      case 2: this.youtubelink.isClicked? this.youtubelink.link = "":  this.youtubelink.link= "SchaffrillasProductions";
              this.youtubelink.isClicked? this.youtubelink2.link = "":  this.youtubelink2.link= "My favourite video!";
              this.youtubelink.isClicked = !this.youtubelink.isClicked;
              this.youtubelink2.isClicked = !this.youtubelink2.isClicked; break;
      case 3: this.youtubeInfo.isClicked? this.youtubeInfo.info = "": this.youtubeInfo.info = "It is a movie review channel"; 
              this.youtubeInfo.isClicked = !this.youtubeInfo.isClicked; break;
      case 4: this.price.isClicked? this.price.stingPrice = "": this.price.stingPrice = "I will cost you the measily 200$"; 
              this.price.isClicked = !this.price.isClicked; break;
      default: break;
    }
  }
}
