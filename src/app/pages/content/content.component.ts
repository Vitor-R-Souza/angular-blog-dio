import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  photoCover: string = '';

  contentTitle: string = 'PLACEHOLDER';

  contentDescripion: string = '';

  private id: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const res = dataFake.filter((article) => article.id == id)[0];

    if (res) {
      this.contentTitle = res.title;
      this.contentDescripion = res.description;
      this.photoCover = res.photo;
    } else {
      console.log('NÃO EXISTE');
    }
  }
}
