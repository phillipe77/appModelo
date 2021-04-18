import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { ToastController } from '@ionic/angular';
import { Post } from 'src/services/post';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario : string = "";
  senha : string = "";

  constructor(  private router: Router, 
                private provider: Post, 
                public toast: ToastController,
                private storage: NativeStorage) { }

  ngOnInit() {
  }

  async mensagemLoginOk() {
    const toast = await this.toast.create({
      message: 'Conexão efetuada com sucesso',
      duration: 2000
    });
    toast.present();
  }
  
  async login(){

    if( this.usuario ==  "" ){
      const toast = await this.toast.create({
        message : 'Preencha o Usuário',
        duration: 2000,
        color: 'warning'
      });
      toast.present();
      return;
    }

    if( this.senha ==  "" ){
      const toast = await this.toast.create({
        message : 'Preencha a senha',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      return;
    }

    if( this.usuario != "" && this.senha != "" )
    {
      return new Promise( resolve => {

        let dados = {
          requisicao : 'login',
          usuario : this.usuario,
          senha : this.senha
        };

        this.provider.dadosApi(dados,'api.php').subscribe(async data => {

          var alert = data['msg'];

          if( data['success']){
            this.storage.setItem('session_storage',data['result']);
            this.router.navigate(['/dashboard']);
            const toast = await this.toast.create({
              message : 'Login efetuado com sucesso',
              duration: 2000,
              color: 'success'
            });
            toast.present();
            this.usuario = '';
            this.senha = '';
            console.log(data);
          }else{
            const toast = await this.toast.create({
              message : alert,
              duration: 2000,
              color: 'danger'
            });
            toast.present();
          }

          //this.router.navigate(['/dashboard']);
          //this.mensagemLoginOk();

        })

      });

    }

  }

  formCadastrarUsuario(){
    this.router.navigate(['/adicionar-usuario']);
  }

}
