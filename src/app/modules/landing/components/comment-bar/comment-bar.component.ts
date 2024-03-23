import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-comment-bar',
  templateUrl: './comment-bar.component.html',
  styleUrl: './comment-bar.component.scss',
})
export class CommentBarComponent {
  @ViewChild('widgetsContent', { read: ElementRef }) 
  
  public widgetsContent: ElementRef<any> = new ElementRef<any>(null);


  public scrollRight(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft + 420), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.widgetsContent.nativeElement.scrollTo({ left: (this.widgetsContent.nativeElement.scrollLeft - 420), behavior: 'smooth' });
  }
}
