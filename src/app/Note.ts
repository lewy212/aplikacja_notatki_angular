export class Note {
  constructor(public title: string,public category: string, public content: string, public date: Date,public time?: string, public status?:boolean) {

  }


  get Data():string{
    let retDate ='';
    let tmp = this.date.getDate() + 1;
    tmp<10? retDate='0' + tmp : retDate +=tmp;
    tmp = this.date.getMonth()+1;
    tmp <10 ? retDate +='-0'+tmp:retDate +='-'+tmp;
    retDate +='-' + this.date.getFullYear();
    return retDate;
  }
}
