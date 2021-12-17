import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    'https://dircomfidencial.com/wp-content/uploads/2016/11/logo-1330779_960_720.png.webp',
    'https://dircomfidencial.com/wp-content/uploads/2016/11/logo-1330779_960_720.png.webp',
    'https://dircomfidencial.com/wp-content/uploads/2016/11/logo-1330779_960_720.png.webp',
    //'assets/images/banner-1.jpg',
    //'assets/images/banner-2.jpg',
    //'assets/images/banner-3.jpg',
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
