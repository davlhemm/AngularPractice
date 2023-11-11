import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  @Input() links?: string[] = ["https://bit.ly/3flyaMj", "https://bit.ly/3lmYVna"];

  public removeLink(link: string) {
    console.log(link);
    //NOTE: Slow...should splice instead
    this.links = this.links?.filter(x => x !== link);
    console.table(this.links);
  }
}
