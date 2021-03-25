import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario : string = "";
  senha : string = "";

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  login(){
    if( this.usuario ==  "" ){
      alert("Campo usuario vazio");
    }

    if( this.senha ==  "" ){
      alert("Campo senha vazio");
    }
  }

  formCadastrarUsuario(){
    this.router.navigate(['/adicionar-usuario']);
  }

}
