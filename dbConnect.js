const { MongoClient } = require("mongodb");

// Connection URI. Replace 'mongodb://localhost:27017' if your MongoDB instance is hosted elsewhere.
// If you are using MongoDB Atlas, paste your connection string here.
const uri = "mongodb://localhost:27017"; 

// Database Name
const dbName = "TS_Academy";

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB server");
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit the process if connection fails
  }
}

async function closeDatabaseConnection() {
  await client.close();
  console.log("MongoDB connection closed.");
}


async function findStudents(db) {
  const collection = db.collection('Backend');

  try {
    // Find all students
    console.log('All Backend Students:');
    const allStudents = await collection.find({}).toArray();
    console.log(allStudents);

    // Find students older than 23
    console.log('\nStudents older than 23:');
    const olderStudents = await collection.find({ age: { $gt: 23 } }).toArray();
    console.log(olderStudents);

  } catch (error) {
    console.error('Error finding documents:', error);
  }
}


async function updateStudent(db) {
  const collection = db.collection('Backend');

  try {
    const result = await collection.updateOne(
      { name: "New Node.js Student" },
      { $set: { email: "updated.nodejs.student@example.com", status: "Active" } }
    );
    console.log('Matched %d document(s) and modified %d document(s)', result.matchedCount, result.modifiedCount);
  } catch (error) {
    console.error('Error updating document:', error);
  }
}


async function deleteStudent(db) {
  const collection = db.collection('Backend');

  try {
    const result = await collection.deleteOne({ name: "New Node.js Student" });
    console.log('Deleted %d document(s)', result.deletedCount);
  } catch (error) {
    console.error('Error deleting document:', error);
  }
}

async function createStudent(db) {
  const collection = db.collection('Backend'); // Target the Backend collection

  try {
    const result = await collection.insertOne({
      name: "New Node.js Student",
      age: 26,
      email: "nodejs.student@example.com",
      course: "Backend Development",
      enrollment_date: new Date()
    });
    console.log('Inserted 1 document:', result.insertedId);
  } catch (error) {
    console.error('Error inserting document:', error);
  }
}

async function createAIStudents(db) {
  const collection = db.collection('AI');

  try {
    const students = [
      {
        name: "AI Student One",
        age: 25,
        email: "ai.student1@example.com",
        course: "Artificial Intelligence",
        enrollment_date: new Date()
      },
      {
        name: "AI Student Two",
        age: 27,
        email: "ai.student2@example.com",
        course: "Artificial Intelligence",
        enrollment_date: new Date()
      }
    ];

    const result = await collection.insertMany(students);
    console.log('Inserted AI students:', result.insertedIds);
  } catch (error) {
    console.error('Error inserting AI students:', error);
  }
}

async function createRoboticsStudents(db) {
  const collection = db.collection('Robotics');

  try {
    // Drop the collection if it exists to recreate with random names
    try {
      await collection.drop();
      console.log('Dropped existing Robotics collection');
    } catch (error) {
      // Collection might not exist, continue
    }

    const firstNames = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Harry', 'Ivy', 'Jack', 'Karen', 'Liam', 'Mia', 'Noah', 'Olivia', 'Peter', 'Quinn', 'Ryan'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];

    const students = [];
    for (let i = 1; i <= 18; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      students.push({
        name: `${firstName} ${lastName}`,
        age: 20 + (i % 5), // Ages between 20-24
        email: `robotics.student${i}@example.com`,
        course: "Robotics",
        enrollment_date: new Date()
      });
    }

    const result = await collection.insertMany(students);
    console.log('Inserted Robotics students:', result.insertedCount);
  } catch (error) {
    console.error('Error inserting Robotics students:', error);
  }
}





module.exports = { connectToDatabase, closeDatabaseConnection, findStudents, updateStudent, deleteStudent, createStudent, createAIStudents, createRoboticsStudents };