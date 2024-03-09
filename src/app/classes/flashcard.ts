export class Flashcard {
	public id?: any;
	public question:string; 
	public answer: string;
	public learned: boolean = false;
	public chapter?: number;
	public displayed: boolean = true;
  public subject_id: number;

	constructor(question: string, answer: string, subject_id: number, chapter?: number, learned?: boolean, id?: any, displayed?: boolean ){
		this.question = question;
		this.answer = answer;
		this.chapter = chapter;
		this.id = id;
		this.displayed = true;
    this.subject_id = subject_id;
	}
}

export default Flashcard;
