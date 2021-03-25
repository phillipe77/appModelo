import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.page.html',
  styleUrls: ['./adicionar-usuario.page.scss'],
})
export class AdicionarUsuarioPage implements OnInit {

  nome: string = "";
  email: string = "";
  senha: string = "";

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  voltarTelaLogin(){
    this.router.navigate(['/']);
  }

  cadastrarUsuario(){
    if( this.nome == ""){
      alert("Faltou o nome");
    }
    if( this.email == ""){
      alert("Faltou o email");
    }
    if( this.senha == ""){
      alert("Faltou o senha");
    }
    console.log(this.nome);
    console.log(this.email);
    console.log(this.senha);
  }
}