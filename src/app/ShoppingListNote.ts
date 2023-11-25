import { Note } from "./Note";

export class ShoppingListNote extends Note {
  // @ts-ignore
  constructor(public title: string, public content: string, public date: Date, public amount: number, public time?: string) {
    super(title, 'Shopping list', content, date, time);
  }

  // @ts-ignore
  override get Content(): string[] {
    let contentList: string[];
    contentList = this.content.split(' ');
    return contentList;
  }
}

