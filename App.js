const { connectToDatabase, closeDatabaseConnection, findStudents, updateStudent, deleteStudent, createStudent, createAIStudents, createRoboticsStudents } = require('./dbConnect');

async function main() {
  const db = await connectToDatabase();

  try {
    await findStudents(db);
    await createStudent(db);
    await updateStudent(db);
    await deleteStudent(db);
    await createAIStudents(db);
    await createRoboticsStudents(db);
  } finally {
    await closeDatabaseConnection();
  }
}

main();