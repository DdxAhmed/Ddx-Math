export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export interface Lesson {
  id: string;
  title: string;
  chapter: string;
  subject: string;
  description: string;
  duration: string;
  difficulty: Difficulty;
  thumbnailSymbol: string;
  videoUrl: string;
  tags: string[];
  relatedFiles: string[];
  relatedLessonIds: string[];
}

export const lessons: Lesson[] = [
  {
    id: "math2-01",
    title: "Partial Fractions - Lecture 1",
    chapter: "Partial Fractions",
    subject: "Math 2",
    description: "Detailed introduction to partial fraction decomposition, covering basic cases and algebraic techniques.",
    duration: "25:40",
    difficulty: "Beginner",
    thumbnailSymbol: "¹/x",
    videoUrl: "https://youtu.be/BeqEcQByoRQ?si=UYjMf8oQqDwdHAf8",
    tags: ["math2", "partial-fractions", "algebra"],
    relatedFiles: ["res-la-01"],
    relatedLessonIds: ["math2-02", "math2-05"],
  },
  {
    id: "math2-02",
    title: "Partial Fractions - Lecture 2",
    chapter: "Partial Fractions",
    subject: "Math 2",
    description: "Advanced cases of partial fraction decomposition including repeated and irreducible factors.",
    duration: "32:15",
    difficulty: "Intermediate",
    thumbnailSymbol: "²/x",
    videoUrl: "https://youtu.be/3TdTTlPP1Qk?si=MaVIpapqcb1mtbjN",
    tags: ["math2", "partial-fractions", "algebra"],
    relatedFiles: [],
    relatedLessonIds: ["math2-01", "math2-05"],
  },
  {
    id: "math2-03",
    title: "Differential Equations - Lecture 1",
    chapter: "Differential Equations",
    subject: "Math 2",
    description: "Introduction to ordinary differential equations (ODEs), exploring order, degree, and basic solution methods.",
    duration: "40:10",
    difficulty: "Beginner",
    thumbnailSymbol: "dy/dx",
    videoUrl: "https://youtu.be/QI9KDLAbraM?si=dObosI-oPqeCaUmY",
    tags: ["math2", "differential-equations", "calculus"],
    relatedFiles: ["res-de-01"],
    relatedLessonIds: ["math2-04", "math2-09"],
  },
  {
    id: "math2-04",
    title: "Differential Equations - Lecture 2",
    chapter: "Differential Equations",
    subject: "Math 2",
    description: "Solving separable first-order differential equations and practical applications.",
    duration: "35:50",
    difficulty: "Intermediate",
    thumbnailSymbol: "d²y",
    videoUrl: "https://youtu.be/nE-k-4GpW0M?si=UvI9omviNofZanp3",
    tags: ["math2", "differential-equations", "calculus"],
    relatedFiles: ["res-de-02"],
    relatedLessonIds: ["math2-03", "math2-09"],
  },
  {
    id: "math2-05",
    title: "Fractions & ODEs Review",
    chapter: "General Review",
    subject: "Math 2",
    description: "Comprehensive review session and practice problems covering partial fractions and differential equations.",
    duration: "45:20",
    difficulty: "Intermediate",
    thumbnailSymbol: "📝",
    videoUrl: "https://youtu.be/vgJcEZruBbo?si=z8--mnvPsgjmF4Lm",
    tags: ["math2", "review", "exams"],
    relatedFiles: [],
    relatedLessonIds: ["math2-01", "math2-03"],
  },
  {
    id: "math2-06",
    title: "Arithmetic & Geometric Progressions",
    chapter: "Sequences",
    subject: "Math 2",
    description: "Detailed formulas and rules for solving arithmetic and geometric progressions (sequences and series).",
    duration: "28:15",
    difficulty: "Beginner",
    thumbnailSymbol: "aₙ",
    videoUrl: "https://youtu.be/7eGjXJdCsho?si=yKdyOjGKhYTU1vkQ",
    tags: ["math2", "sequences", "series"],
    relatedFiles: [],
    relatedLessonIds: ["math2-08"],
  },
  {
    id: "math2-07",
    title: "Midterm Exam Solution",
    chapter: "Midterm",
    subject: "Math 2",
    description: "Step-by-step walkthrough and solutions to the Math 2 Midterm examination.",
    duration: "50:00",
    difficulty: "Advanced",
    thumbnailSymbol: "💯",
    videoUrl: "https://youtu.be/xJktL7wGGYQ?si=qhpi9-ZP80EaIqmU",
    tags: ["math2", "midterm", "exam-solutions"],
    relatedFiles: ["res-la-02", "res-la-03"],
    relatedLessonIds: ["math2-08"],
  },
  {
    id: "math2-08",
    title: "Pre-Midterm Full Review",
    chapter: "General Review",
    subject: "Math 2",
    description: "Intensive review of all chapters and topics covered before the midterm exam.",
    duration: "55:45",
    difficulty: "Advanced",
    thumbnailSymbol: "📚",
    videoUrl: "https://youtu.be/vdCGK7sLegg?si=_55dgs491dy4K9y5",
    tags: ["math2", "pre-midterm", "full-review"],
    relatedFiles: [],
    relatedLessonIds: ["math2-07"],
  },
  {
    id: "math2-09",
    title: "ODEs | 1st & 2nd Order | Bernoulli",
    chapter: "Differential Equations",
    subject: "Math 2",
    description: "Advanced solutions for first and second order linear differential equations, including Bernoulli equations.",
    duration: "42:30",
    difficulty: "Advanced",
    thumbnailSymbol: "dy",
    videoUrl: "https://youtu.be/_B2clLARVMA?si=8EgHbJlnxYXu1xes",
    tags: ["math2", "differential-equations", "bernoulli"],
    relatedFiles: ["res-de-03"],
    relatedLessonIds: ["math2-03", "math2-04"],
  }
];