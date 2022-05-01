import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  x = 7;
  constructor() { 
 	   // @ts-ignore
  	if(parseInt(localStorage.getItem("x"))==undefined || parseInt(localStorage.getItem("x"))==null || localStorage.getItem("x") == "NaN" ){
  		localStorage.setItem("x", (this.x).toString());
  	}else{
  	// @ts-ignore
  		this.x = parseInt(localStorage.getItem("x"));
  	}
  }

  ngOnInit(): void {
   // @ts-ignore
  	if(parseInt(localStorage.getItem("x"))===undefined || parseInt(localStorage.getItem("x"))===null || localStorage.getItem("x") === "NaN" ){
  		localStorage.setItem("x", (this.x).toString());
  	}else{
  	// @ts-ignore
  		this.x = parseInt(localStorage.getItem("x"));
  	}
  	
  }
  
  contar(){
  	// @ts-ignore
  	if(parseInt(localStorage.getItem("x"))===undefined || parseInt(localStorage.getItem("x"))===null || localStorage.getItem("x") === "NaN" ){
  		localStorage.setItem("x", (this.x).toString());
  		location.reload();
  	}else{
  	// @ts-ignore
  	this.x = parseInt(localStorage.getItem("x"))+1;
  	localStorage.setItem("x",(this.x).toString());
  	}
  	
  		
  }
  	

}
