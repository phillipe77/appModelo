import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario : string = "";
  senha : string = "";

  constructor() { }

  ngOnInit() {
  }

  login(){
    
    if( this.usuario ==  "" ){
      alert("Campo usuario vazio");
      console.log("Campo usuario Vazio");
    }

    if( this.senha ==  "" ){
      alert("Campo senha vazio");
      console.log("Campo senha Vazio");
    }

    alert(this.usuario);
    alert(this.senha);
    console.log(this.usuario);
    console.log(this.senha);

  }

}
