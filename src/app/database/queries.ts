export const getAllFlashcards = "SELECT * FROM sie_flashcards";
export const getFlashcardById = "SELECT * FROM sie_flashcards WHERE id = $1";
export const checkQuestion = "SELECT q FROM sie_flashcards q WHERE q.question = $1";
export const addFlashcards = 
	"INSERT INTO sie_flashcards (question, answer, learned, chapter) VALUES ($1, $2, $3, $4)";
export const deleteFlashcard = "DELETE FROM sie_flashcards WHERE id = $1";
export const updateFlashcards = "UPDATE sie_flashcards SET question = $1 WHERE id = $2";
export const getAllSubjects = "SELECT * FROM subjects";
export const getAllFlashcardBySubjectId = "SELECT * FROM sie_flashcards WHERE subject_id = $1";

export default { getAllFlashcards, getFlashcardById, checkQuestion, addFlashcards, deleteFlashcard, updateFlashcards, getAllSubjects, getAllFlashcardBySubjectId };

