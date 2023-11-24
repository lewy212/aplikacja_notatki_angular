import {Note} from './Note';
const notes: Note[] = [];
let note = new Note('Meeting','Work','Meet with John in restaurant Bistro', new Date('2020-09-25'));
notes.push(note);
note = new Note('Test score','Study','25/30 points on practical part', new Date('2020-09-20'));
notes.push(note);
note = note = new Note('Go to the gym','To do','Leg day', new Date('2020-09-06'),'12:15',true);
notes.push(note);
export const Notes = notes;
const categories: string[] = [];
notes.map((el,index)=>{
  if(!categories.includes(el.category)){
    categories.push(el.category);
  }
})

export const Categories = categories;
