const data = [
  {
    question: "What does Power BI stand for?",
    incorrectAnswers: [
      "Powerful Business Insights",
      "Professional Business Integration",
      "Power Business Inteligence",
    ],
    correctAnswer: "Personal Business Intelligence",
  },

  {
    question:
      "Which of the following data sources can Power BI connect to?",
    incorrectAnswers: [
      "Only Microsoft Excel files",
      "Only online cloud storage",
      "Only Power BI datasets",
    ],
    correctAnswer: "A wide range of databases, files, and online services",
  },
  {
    question: "What is the purpose of the 'Manage Relationships' feature in Power BI?",
    incorrectAnswers: ["To create custom visualizations using DAX", "To schedule data refresh for reports", "To export data"],
    correctAnswer: "To define how tables are connected in the data model",
  },
  {
    question: "In Power BI, what is the difference between a calculated column and a measure?",
    incorrectAnswers: ["There is no difference; the terms are interchangeable.", "A calculated column uses DAX, while a measure uses SQL expressions.", " A calculated column is used for creating aggregations, while a measure is for displaying values."],
    correctAnswer: "A calculated column is part of the data source, while a measure is computed on the fly.",
  },
  {
    question: "What is the 'Modeling' tab in Power BI Desktop used for?",
    incorrectAnswers: [
      "Importing and transforming data",
      "Creating visualizations and reports",
      "Publishing reports to the Power BI service",
    ],
    correctAnswer: " Managing data relationships and calculations",
  },
  {
    question: "What is the difference between 'Active' and 'Inactive' relationships in Power BI?",
    incorrectAnswers: [
      "Active relationships are automatically created, while inactive relationships need to be defined manually.",
      "Active relationships are one-to-one, while inactive relationships are one-to-many.",
      "Active relationships are bidirectional, while inactive relationships are unidirectional.",
    ],
    correctAnswer: "Active relationships are used for calculations, while inactive relationships are ignored.",
  },
  {
    question: "What is a 'Disconnected Table' in Power BI?",
    incorrectAnswers: ["A table that is temporarily removed from the model", " A table that is only used for Power Query transformations", "A table that is connected to external data sources only"],
    correctAnswer: "A table with no relationships to other tables in the model",
  },
  {
    question: " What is the purpose of the 'Bidirectional' filtering option in Power BI relationships?",
    incorrectAnswers: [
      "It restricts filtering to only one direction in the relationship.",
      "It allows for filtering in either the primary or related table, but not both.",
      "It defines a circular relationship between tables.",
    ],
    correctAnswer: "It enables filtering from both the primary and related tables simultaneously.",
  },
];

export default data;
