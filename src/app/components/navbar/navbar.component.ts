import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isShowHide:boolean=false;
  isShow(evt){
    this.isShowHide=evt
    if(this.isShowHide==false){
      this.isShowHide=true
    }
    else if(this.isShowHide==true){
      this.isShowHide=false
    }
   
    console.log(this.isShowHide);
    
    

  }

  public navigateToSection(section: string) {
    window.location.hash = '';
    window.location.hash = section;
}
}
