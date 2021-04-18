import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-adicionar-usuario',
  templateUrl: './adicionar-usuario.page.html',
  styleUrls: ['./adicionar-usuario.page.scss'],
})
export class AdicionarUsuarioPage implements OnInit {

  nome: string = "";
  usuario: string = "";
  senha: string = "";

  constructor( private router: Router, 
                private provider: Post , 
                public toastController: ToastController
              ) { }

  ngOnInit() {
  }

  async mensagemSalvar() {
    const toast = await this.toastController.create({
      message: 'Salvo com sucesso',
      duration: 2000
    });
    toast.present();
  }

  async mensagemValor() {
    const toast = await this.toastController.create({
      message: 'Informe um campo',
      duration: 2000
    });
    toast.present();
  }

  voltarTelaLogin(){
    this.router.navigate(['/']);
  }

  cadastrarUsuario(){
    
    if( this.nome == ""){
      this.mensagemValor();
    }

    if( this.usuario == ""){
      this.mensagemValor();
    }
    
    if( this.senha == ""){
      this.mensagemValor();
    }

    //Se todo os campos estiverem certinhos 
    if( this.nome != "" && this.usuario != ""  && this.senha != "" )
    {
      return new Promise( resolve => {

        let dados = {
          requisicao : 'add',
          nome : this.nome,
          usuario : this.usuario,
          senha : this.senha
        };

        this.provider.dadosApi(dados,'api.php').subscribe(data => {
          this.router.navigate(['/']);
          this.mensagemSalvar();
        })

      });

    }


  }
}