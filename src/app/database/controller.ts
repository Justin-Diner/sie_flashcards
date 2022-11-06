import pool from '../../db.js';
import { NextFunction, Request, Response } from 'express';
import { QueryResult } from 'pg';
import { getAllFlashcards, getFlashcardById, checkQuestion, addFlashcards, deleteFlashcard, updateFlashcards } from './queries.js'

export const getFlashcards = async (req: Request, res: Response, next: NextFunction) => {
	const response: QueryResult = await pool.query(getAllFlashcards); 
	res.status(200).json(response.rows);
	};

export const getFlashcardsById = (req: Request, res: Response) => {
	const id = parseInt(req.params['id']); 
	pool.query(getFlashcardById, [id], (error, results) => {
		if (error) {
			throw error
		};
		res.status(200).json(results.rows);
	})
}

export const addFlashcard = (req: Request, res: Response) => {
	const { question, answer, learned, chapter } = req.body; 

	//check if question exists 
	pool.query(checkQuestion, [question], (error, results) => {
		if (results.rows.length >= 1) {
			res.send("Question already exists.")
		} else {
		//add flashcard to db
		pool.query(addFlashcards, [question, answer, learned, chapter], (error, results) => {
			if (error) {
				throw error;
			} else {
			res.status(201).send("Flashcard Created Successfully!");
			};
		})
	}
	});
}

export const removeFlashcard = (req: Request, res: Response) => {
	const id = parseInt(req.params['id']);

	pool.query(getFlashcardById, [id], (error, results) => {
		const noStudentFound = results.rows;
		if (noStudentFound.length < 1) {
			res.send("Flashcard does not exist in database.");
			console.log("Flashcard does not exist in database.")
		} 
		else {
			pool.query(deleteFlashcard, [id], (error, results) => {
				if (error) {
					throw error
				} else {
					res.status(200).send("Flashcard removed successfully.");
					console.log("Flashcard removed successfully.");
				}
			})
		}
	});
}

export const updateFlashcard = (req: Request, res: Response) => {
	const id = parseInt(req.params['id']);
	const { question } = req.body;

	pool.query(getFlashcardById, [id], (error, results) => {
		const noStudentFound = results.rows;
		if (noStudentFound.length < 1) {
			res.send("Flashcard does not exist in database.");
		} 
		else {
			pool.query(updateFlashcards, [question, id], (error, results) => {
				if (error) throw error;
				res.status(200).send("Flashcard Updated Successfully.")
			})
		}
	});
};
export default { getFlashcards, getFlashcardsById, addFlashcard, removeFlashcard, updateFlashcard };