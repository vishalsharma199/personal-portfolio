import { Component, OnInit,Renderer2 } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  link:any;
  data:any;
  value:number = 0;
  dataVal:any;

  constructor( private render: Renderer2 ){}
  ngOnInit(): void {
    this.showData();
    this.progressData()
    this.progressBar()
  }
  download(){
    this.link='https://drive.google.com/file/d/1KTW1iPxxocNTOnxBOLR5FF1i0r2LDwdr/view?usp=sharing'
    console.log('clicked');
    const link = this.render.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', this.link);
    link.setAttribute('download', `Vishal_cv`);
    link.click();
    link.remove();
    
  }

  showData(){
    this.data=[
      {heading:'Dgliger Consultancy Private Limited',period:'Feb 2022 to Present (Gurugram)',position:'Angular Developer',exp:'Working as a Frontend angular developer',exp2:'Responsible for handling the UI in Angular'},
      {heading:'W3 Origin',period:'Oct 2020 to Dec 2021 ',position:'Frontend Developer',exp:'Working as a Frontend developer',exp2:'Responsible for handling the UI using Html, Css, Javascript Etc'}
    ]
  }
  progressData(){
    this.dataVal=[
      {values:'Angular',value:'85'},
      {values:'Html',value:'80'},
      {values:'Css',value:'82'},
      {values:'Javascript',value:'70'},
      {values:'Jquery',value:'75'},
      {values:'Bootstrap',value:'65'},
      {values:'TypeScript',value:'80'},
    ]
  }




  progressBar(){
    console.log(this.dataVal);
    this.dataVal.forEach(element => {
      console.log(element.values);
    }); 
  }
}
