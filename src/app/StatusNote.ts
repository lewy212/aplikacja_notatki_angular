import {Note} from "./Note";

export class StatusNote extends Note{
  // @ts-ignore
  constructor(public title: string, public content: string, public date: Date, public status: boolean ,public time?: string) {
    super(title,'To do',content,date,time);
  }
}
