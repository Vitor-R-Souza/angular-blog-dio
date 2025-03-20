import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://i.pinimg.com/736x/fd/8e/05/fd8e051e99afeb4493b7daa96850405c.jpg';
  contentTitle: string = 'PLACEHOLDER';
  contentDescripion: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illum dolorum atque ab. Nostrum molestias nobis perspiciatis reprehenderit molestiae animi, rerum nemo deserunt, quas doloremque, eos alias omnis possimus dolorum.';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => console.log(value.get('id')));
  }
}
