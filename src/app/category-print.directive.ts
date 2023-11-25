import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCategoryPrint]'
})
export class CategoryPrintDirective implements OnInit{
  @Input() category: string;
  @Input() size?: string;
  @Input() color?: string;
  categoryIconName: string;
  constructor(private renderer: Renderer2, private element: ElementRef) { }
  ngOnInit() {
    const valTrans = this.category.toLowerCase();
    if(!this.size){
      this.size = '60px';
    }
    if(!this.color){
      this.color = 'rgb(105,33,33)'
    }
    this.renderer.setStyle(this.element.nativeElement,'color',this.color);
    this.renderer.setStyle(this.element.nativeElement,'font-size',this.size);
    this.categoryIconName='';
    switch(valTrans){
      case 'work': this.categoryIconName = 'work_outline';break;
      case 'to do': this.categoryIconName = 'list_alt';break;
      case 'shopping list': this.categoryIconName = 'shopping_cart';break;
      case 'study': this.categoryIconName = 'school';break;
      case 'friends': this.categoryIconName = 'people_outline';break;
      case 'meeting': this.categoryIconName = 'meeting_room';break;
      case 'journey': this.categoryIconName = 'card_travel';break;
    }
    const textEl = this.renderer.createText(this.categoryIconName);
    this.renderer.appendChild(this.element.nativeElement,textEl)
  }

}
