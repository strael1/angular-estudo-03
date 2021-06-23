import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'projeto01';
  name: string = '';
  email: string = '';
  phone: string = '';

  nameError = false;
  emailError = false;
  phoneError = false;

  // name_msg_error = '';
  // email_msg_error = '';
  // phone_msg_error = '';

  disabled: boolean = true;
  clientes: any[] = [];


  // Não fazer!!!
  // onEnterValue(evt: any){
  //   const name = evt.target.value;
  //   const email = evt.target.value;
  //   const phone = evt.target.value;

  //   if(name != '' && email != '' && phone != ''){
  //     this.disabled = false;
  //   }else {
  //     this.disabled = true;
  //   }
  // }

  inserirCliente() {
    if(this.name.length <= 0 && this.email.length <= 0 && this.phone.length <= 0){
      this.nameError = true;
      this.emailError = true;
      this.phoneError = true;
    }else if(this.email.length <= 0){
      this.emailError = true;
      this.phoneError = false;
      this.nameError = false;
    }else if (this.phone.length <= 0) {
      this.phoneError = true;
      
    } else if (this.name.length <= 0) {
      this.nameError = true;
    } else {
      this.clientes.push({
        name: this.name,
        email: this.email,
        phone: this.phone
      })
  
      this.name = '';
      this.email = '';
      this.phone = '';
    }
  }

  // inserirCliente() {
  //   this.clientes.push({
  //     name: this.name,
  //     email: this.email,
  //     phone: this.phone
  //   })
    // if (this.name == '') {
    //   this.name_msg_error = 'O campo Nome é obrigatório!';
    // } else if (this.email == '') {
    //     this.email_msg_error = 'O campo Email é obrigatório!';
    // } else if (this.phone == '') {
    //   this.phone_msg_error = 'O campo Telefone é obrigatório!';
    // } 
  //   this.name = '';
  //   this.email = '';
  //   this.phone = '';
  // }
}
