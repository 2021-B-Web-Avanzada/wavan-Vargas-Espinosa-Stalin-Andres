import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-banner-imagenes',
  templateUrl: './banner-imagenes.component.html',
  styleUrls: ['./banner-imagenes.component.scss']
})
export class BannerImagenesComponent implements OnInit {
  [x: string]: any;
  urlmarketing= 'https://cdn2.cocinadelirante.com/sites/default/files/images/2018/06/consejos-para-hacer-la-carne-jugosa-para-parrillada-4.jpg'
  logo = 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fast-food-logo-design-template-5e3d4fd2fb94e028469b27c3fc842c92_screen.jpg?ts=1570593625'
  imagen1_comida = 'https://www.hazteveg.com/img/recipes/full/201903/R23-46956.jpg'
  imagen2_comida = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLsQJUUF325vACPK3Yf6DkEeKvuxbaIeHrTw&usqp=CAU'
  imagen3_comida = 'https://www.vistazo.com/binrepository/852x600/126c0/600d600/none/12727/BRSH/gourmet_cocinacriolla-ecuador_VI31926_MG1709720.jpg'
  imagen4_comida = 'https://www.65ymas.com/uploads/s1/69/84/7/tres-cocteles-sin-alcohol-para-celebrar-la-llegada-del-buen-tiempo-big-stock_1_621x621.jpeg'
  formLogin = new FormGroup({user:new FormControl(''), password: new FormControl('')});
  constructor(

    private readonly router:Router,
    private readonly formBuilder: FormBuilder,

  ) { }



  ngOnInit(): void {

  }

  categorias(){
    if(this.formLogin.get("user")?.value == "admin" && this.formLogin.get("password")?.value == "admin") {

      this.router.navigate(['modulos'])
    }
      else{
        alert("Usuario o Contraseña incorrectos")
      }
    }




}
