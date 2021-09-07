import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cifrado = "AHÑUBIOVCJPWDKQXELRYFMSZGNT";
  mensaje = "";

  constructor() {}

  onClick(){

    let nuevoMsg = "";
    let letra="";

    for (let i=0; i<this.mensaje.length; i++){
      letra = this.mensaje[i];
      letra = letra.toLocaleUpperCase();
      // console.log("letra: ",letra);
      
      const pos = this.cifrado.indexOf(letra) + 1;
      (pos == 0)? letra=" " : letra = pos.toString() + "*";
      nuevoMsg += letra;
    }

    // console.log("nuevo msg: ", nuevoMsg);
    this.mensaje= nuevoMsg;   
   
  }

decode(){
  // console.log("decodificando: ", this.mensaje);
  let msgArr = this.mensaje.split("*") ;
  let newMsg = "";
  for( let i = 0; i< msgArr.length-1; i++){
    // console.log("analizndo: ", msgArr[i]);
    const indice = Number(msgArr[i]);
    // console.log("número: ", indice);
    
    msgArr[i].indexOf(" ") == 0? newMsg += " " + this.cifrado[indice-1] : newMsg += this.cifrado[indice-1];
    // console.log(newMsg);
    this.mensaje = newMsg;
  }
}

}
