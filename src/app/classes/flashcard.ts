export class Flashcard {
	public id?: any;
	public question:string; 
	public answer: string;
	public learned: boolean = false;
	public chapter?: number;
	public displayed: boolean = true;

	constructor(question: string, answer: string, chapter?: number, learned?: boolean, id?: any, displayed?: boolean){
		this.question = question;
		this.answer = answer;
		this.chapter = chapter;
		this.id = id;
	}
}

export default Flashcard;
