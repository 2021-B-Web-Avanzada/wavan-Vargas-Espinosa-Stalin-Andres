import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-imagenes-personas',
  templateUrl: './banner-imagenes-personas.component.html',
  styleUrls: ['./banner-imagenes-personas.component.scss']
})
export class BannerImagenesPersonasComponent implements OnInit {
urlPersona1 = 'https://images.ctfassets.net/go6kr6r0ykrq/1HRZqDGLeXXKvgDDvCLMtb/d93f59bd74c075a79788a0c46335553c/GiacomoSorbi.jpeg'
  urlPersona2 = 'https://images.ctfassets.net/go6kr6r0ykrq/7EnAeoXDH50HmJG1BVJHFs/d8a3620dd34a336c2e1464d677b9052b/AlisonVoghel.jpg'
  urlPersona3 = 'https://images.ctfassets.net/go6kr6r0ykrq/PsoQ94ZyA6wDGnzSr4CjF/f94e1023dc2fd8a146b1bcccc72879e6/ManuelSousa.jpg'
  urlPersona4 = 'https://images.ctfassets.net/go6kr6r0ykrq/3ObHLUqjmfzpkrQLuMzF2n/ec9ad9ff4f6cea017a3057c8336eec3f/Rosita.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
