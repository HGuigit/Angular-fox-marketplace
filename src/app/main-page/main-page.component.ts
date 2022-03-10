import { Component, OnInit, OnDestroy } from '@angular/core';
import { faFacebook, faGoogle, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  faFacebook = faFacebook;
  faGoogle = faGoogle;
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  constructor() { }


  ngOnInit(): void {

    //dynamic Styling of main page
                                                                                                                                                         
    let rocketMarginBottom : number = 0
    let lastScrollTop : number = 0
    let documentHeight : number = document.documentElement.scrollHeight
  
    window.addEventListener('scroll',(event) => {
      
      // Estilização dinâmica da navbar com eventlistener
    let elementClass : string = 'top-header'
    let header = document.getElementsByClassName(elementClass).item(0) as HTMLElement

    if(window.scrollY < 10){
      header.style.backgroundColor = `rgba(0, 0, 0,${0})`
    }
    if(window.scrollY >= 10) {
      header.style.backgroundColor = `rgba(0, 0, 0,${window.scrollY/250})`
      if(window.scrollY > 250){
        header.style.backgroundColor = `rgba(0, 0, 0,${1})`
      }
    }
    // Estilização de movimento do foguete
    let rocketId : string = 'rocket-img'
    let rocketImg = document.getElementById(rocketId) as HTMLElement
    // Vai começar a mexer quando estiver no intervalo entre metade do primeiro retangulo e final dos segundo retangulo (primeira seção e no final da segunda seção)
    if(window.scrollY > documentHeight/6  && window.scrollY < (documentHeight/3)*2 + documentHeight/6){ 
       //detectando sentido do scroll
       let st = document.documentElement.scrollTop

       if (st > lastScrollTop){
        rocketMarginBottom += 12
        rocketImg.style.marginBottom = rocketMarginBottom + 'px' 
      } else {
        rocketMarginBottom -= 12
        rocketImg.style.marginBottom = rocketMarginBottom + 'px' 
      }
      lastScrollTop = st;
    }

  });

  }

  ngOnDestroy(){
    window.removeEventListener('scroll' , () => null);
  }


}
