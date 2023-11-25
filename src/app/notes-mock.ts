import {Note} from './Note';
import {StatusNote} from "./StatusNote";
import {ShoppingListNote} from "./ShoppingListNote";
const notes: Note[] = [];
let note = new Note('Meeting','Work','Meet with John in restaurant Bistro', new Date('2020-09-25'));
notes.push(note);
note = new Note('Test score','Study','25/30 points on practical part', new Date('2020-09-20'));
notes.push(note);
note = new StatusNote('Go to the gym','Leg day', new Date('2020-09-06'),true,'12:15');
notes.push(note);
note = new StatusNote('General cleaning','Kitchen is the most important, the bathroom is the next',new Date('2020-09-10'),false);
notes.push(note);
note = new Note('GoldenEye','Meeting','Ann and Dorothy',new Date('2020-09-11'),'20:00');
notes.push(note);
note = new Note('Holiday!','Journey','I\'m not decided yet', new Date('2020-10-01'));
notes.push(note);
note = new ShoppingListNote('Supermarket','sugar flour bread butter fruits salad',new Date('2020-09-10'),200)
notes.push(note);
export const Notes = notes;
const categories: string[] = [];
notes.map((el,index)=>{
  if(!categories.includes(el.category)){
    categories.push(el.category);
  }
})

export const Categories = categories;
