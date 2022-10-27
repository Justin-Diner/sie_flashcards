import { Router } from 'express';
import { getFlashcards, getFlashcardsById, addFlashcard, removeFlashcard, updateFlashcard } from './controller.js';

const router = Router();

router.post("/", addFlashcard); //Add Flashcard
router.get("/", getFlashcards); // Get all Flashcards
router.get("/:id", getFlashcardsById); //Get specific flashcard
router.delete("/:id", removeFlashcard); // Delete flashcard
router.put("/:id", updateFlashcard); //Updates a flashcard - to update its a PUT request


export default router;