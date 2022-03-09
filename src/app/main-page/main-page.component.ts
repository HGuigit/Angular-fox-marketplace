import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {

    // Estilização dinâmica da navbar com eventlistener
    window.addEventListener('scroll',(event) => {
    let elementClass = 'top-header'
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
  });

  }

  ngOnDestroy(): void{
    window.removeEventListener('scroll' , () => null);
  }


}
