export class Flashcard {
	public id?: any;
	public question:string; 
	public answer: string;
	public learned: boolean = false;
	public chapter?: number;
	public displayed?: boolean = true;

	constructor(question: string, answer: string, chapter?: number, id?: any){
		this.question = question;
		this.answer = answer;
		this.chapter = chapter;
		this.id = id;
	}
}
