export class Flashcard {
	public learned: boolean = false;
	public displayed: boolean = true;

	constructor(
		public question:string, 
		public answer: string,
		public id?: any,		 
		public chapter?: number,
		){}
}
