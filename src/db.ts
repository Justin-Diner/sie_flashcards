import pg from 'pg';

const pool = new pg.Pool({
	user: "postgres",
	host: "localhost",
	database: "flashcards",
	password: "telephone",
	port: 5432
});

 export default pool;

