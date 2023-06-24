const express = require("express");
const app = express();
app.use(express.json());

const persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

// To get all the data of the persons
app.get("/api/persons", (req, res) => {
  res.json(person);
});

// To send the data for the info page
app.get("/info", (req, res) => {
  const date = new Date();
  res.send(
    `<p>Phonebook has info for ${person.length} people</p>
    <p>${date}</p>`
  );
});

// To get the data of a single person
app.get("/api/persons/:id", (req, res) => {
  const params = req.params.id;
  const person = persons.find((person) => person.id === Number(params));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});