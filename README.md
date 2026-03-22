# MongoDB TS Academy Database Project
# TS-Academy-student-API
Student Record CRUD API using Node.js, Express, and MongoDB (TS Academy Assignment)

## Overview

This Node.js application demonstrates CRUD operations on a MongoDB database for the TS Academy. The database contains student records organized into different collections based on their courses: Backend Development, Artificial Intelligence, and Robotics.

## Features

- **Database Connection**: Establishes connection to MongoDB server
- **CRUD Operations**: Create, Read, Update, and Delete student records
- **Multiple Collections**: Separate collections for different academic disciplines
- **Student Management**: Add, find, update, and remove students from various courses

## Database Structure

### Database Name: `TS_Academy`

### Collections:

1. **Backend** - Students enrolled in Backend Development
2. **AI** - Students enrolled in Artificial Intelligence
3. **Robotics** - Students enrolled in Robotics

### Student Document Structure:
```json
{
  "_id": ObjectId,
  "name": "Student Name",
  "age": 25,
  "email": "student@example.com",
  "course": "Course Name",
  "enrollment_date": ISODate
}
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on default port 27017)
- npm (Node Package Manager)

## Installation

1. Clone or download the project files
2. Navigate to the project directory:
   ```bash
   cd MongoDB-TS-Academy
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Running the Application

Execute the main application:
```bash
node app.js
```

### What the Application Does

When you run `node app.js`, the application will:

1. **Connect to MongoDB** and establish a database connection
2. **Display Backend Students** - Shows all students in the Backend collection
3. **Filter Students** - Displays students older than 23 years
4. **Create Operations**:
   - Inserts a new Backend student
   - Adds 2 AI students
   - Creates 18 Robotics students with randomly generated names
5. **Update Operation** - Modifies the email of the newly created Backend student
6. **Delete Operation** - Removes the newly created Backend student
7. **Close Connection** - Properly closes the database connection

### Sample Output

```
Connected successfully to MongoDB server
All Backend Students:
[ ... student records ... ]
Students older than 23:
[ ... filtered students ... ]
Inserted 1 document: new ObjectId('...')
Matched 1 document(s) and modified 1 document(s)
Deleted 1 document(s)
Inserted AI students: { '0': new ObjectId('...'), '1': new ObjectId('...') }
Dropped existing Robotics collection
Inserted Robotics students: 18
MongoDB connection closed.
```

## Configuration

### Database Connection

The application connects to MongoDB at:
- **URI**: `*****************`
- **Database**: `TS_Academy`

To change the connection settings, modify the `uri` and `dbName` variables in `dbConnect.js`.

## Project Structure

```
MongoDB-TS-Academy/
├── app.js              # Main application entry point
├── dbConnect.js        # Database connection and operations
├── package.json        # Node.js dependencies and scripts
└── README.md          # This file
```

## Dependencies

- **mongodb**: MongoDB Node.js driver for database operations

## Error Handling

The application includes comprehensive error handling for:
- Database connection failures
- CRUD operation errors
- Collection drop operations

## Notes

- The Robotics collection is recreated each time with new random student names
- Backend and AI collections accumulate data across runs
- All operations are performed sequentially to maintain data integrity

## License

This project is created for educational purposes as part of a MongoDB and Node.js learning assignment.
