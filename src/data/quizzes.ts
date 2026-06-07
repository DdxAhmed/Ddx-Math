export interface Question {
  id: string;
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  subject: string;
  description: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimatedTime: string;
  icon: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    id: "quiz-partial-fractions",
    title: "Partial Fractions Decomposition",
    subject: "Math 2",
    description: "Test your skills on decomposing rational expressions into distinct, repeated, and quadratic partial fractions.",
    difficulty: "Intermediate",
    estimatedTime: "10 mins",
    icon: "¹/x",
    questions: [
      {
        id: "pf-q1",
        questionText: "What is the form of the partial fraction decomposition for the expression $\\frac{x+5}{(x-1)(x+2)}$?",
        options: [
          "$\\frac{A}{x-1} + \\frac{B}{x+2}$",
          "$\\frac{A}{x-1} + \\frac{Bx+C}{x+2}$",
          "$\\frac{Ax+B}{(x-1)(x+2)}$",
          "$\\frac{A}{(x-1)^2} + \\frac{B}{x+2}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Since the denominator consists of distinct linear factors $(x-1)$ and $(x+2)$, each factor gets a constant term in its numerator. Thus, the correct form is $\\frac{A}{x-1} + \\frac{B}{x+2}$."
      },
      {
        id: "pf-q2",
        questionText: "Decompose $\\frac{7x-1}{(x-1)(x+1)}$ and find the constant $A$ in $\\frac{A}{x-1} + \\frac{B}{x+1}$.",
        options: [
          "$A = 2$",
          "$A = 3$",
          "$A = 4$",
          "$A = 5$"
        ],
        correctAnswerIndex: 1,
        explanation: "To find $A$, multiply the equation by $(x-1)$ and let $x = 1$ (Heaviside cover-up method):\n$$A = \\left. \\frac{7x-1}{x+1} \\right|_{x=1} = \\frac{7(1)-1}{1+1} = \\frac{6}{2} = 3.$$"
      },
      {
        id: "pf-q3",
        questionText: "For the expression $\\frac{x^2+1}{(x-2)^2(x+1)}$, what is the correct setup for its partial fractions?",
        options: [
          "$\\frac{A}{x-2} + \\frac{B}{x+1}$",
          "$\\frac{A}{x-2} + \\frac{B}{(x-2)^2} + \\frac{C}{x+1}$",
          "$\\frac{Ax+B}{(x-2)^2} + \\frac{C}{x+1}$",
          "$\\frac{A}{x-2} + \\frac{B}{(x-2)^2} + \\frac{Cx+D}{x+1}$"
        ],
        correctAnswerIndex: 1,
        explanation: "Since $(x-2)$ is a repeated linear factor of power 2, it requires two terms: one with denominator $(x-2)$ and one with $(x-2)^2$. The factor $(x+1)$ is a distinct linear factor. Therefore, the form is $\\frac{A}{x-2} + \\frac{B}{(x-2)^2} + \\frac{C}{x+1}$."
      },
      {
        id: "pf-q4",
        questionText: "What form is used for the irreducible quadratic factor in $\\frac{2x+3}{(x^2+4)(x-1)}$?",
        options: [
          "$\\frac{A}{x^2+4} + \\frac{B}{x-1}$",
          "$\\frac{A}{x-1} + \\frac{B}{x^2+4}$",
          "$\\frac{Ax+B}{x^2+4} + \\frac{C}{x-1}$",
          "$\\frac{Ax}{x^2+4} + \\frac{B}{x-1}$"
        ],
        correctAnswerIndex: 2,
        explanation: "The factor $(x^2+4)$ is an irreducible quadratic factor ($b^2 - 4ac < 0$), so its numerator must be a first-degree linear polynomial $Ax+B$. The factor $(x-1)$ is linear, needing a constant $C$. The setup is $\\frac{Ax+B}{x^2+4} + \\frac{C}{x-1}$."
      }
    ]
  },
  {
    id: "quiz-odes",
    title: "First-Order Differential Equations",
    subject: "Math 2",
    description: "Check your understanding of finding general and particular solutions to separable, linear, and Bernoulli differential equations.",
    difficulty: "Advanced",
    estimatedTime: "12 mins",
    icon: "dy/dx",
    questions: [
      {
        id: "ode-q1",
        questionText: "Solve the separable differential equation $\\frac{dy}{dx} = 3x^2 y$.",
        options: [
          "$y = C e^{x^3}$",
          "$y = x^3 + C$",
          "$y = C e^{3x^2}$",
          "$y = e^{x^3} + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate variables:\n$$\\frac{1}{y} dy = 3x^2 dx$$\nIntegrate both sides:\n$$\\ln|y| = x^3 + C_1 \\implies y = e^{x^3 + C_1} = C e^{x^3} \\quad (\\text{where } C = \\pm e^{C_1})$$"
      },
      {
        id: "ode-q2",
        questionText: "Find the integrating factor $\\mu(x)$ for the linear differential equation $\\frac{dy}{dx} - \\frac{2}{x}y = x^3$.",
        options: [
          "$\\mu(x) = x^2$",
          "$\\mu(x) = \\frac{1}{x^2}$",
          "$\\mu(x) = -2 \\ln(x)$",
          "$\\mu(x) = e^{-2x}$"
        ],
        correctAnswerIndex: 1,
        explanation: "A standard first-order linear ODE is written as $\\frac{dy}{dx} + P(x)y = Q(x)$. Here, $P(x) = -\\frac{2}{x}$.\nThe integrating factor is:\n$$\\mu(x) = e^{\\int P(x) dx} = e^{\\int -\\frac{2}{x} dx} = e^{-2 \\ln|x|} = e^{\\ln(x^{-2})} = x^{-2} = \\frac{1}{x^2}.$$"
      },
      {
        id: "ode-q3",
        questionText: "Which substitution transforms the Bernoulli equation $\\frac{dy}{dx} + P(x)y = Q(x)y^n$ into a linear equation?",
        options: [
          "$u = y^{n}$",
          "$u = y^{1-n}$",
          "$u = y^{n-1}$",
          "$u = y^{-n}$"
        ],
        correctAnswerIndex: 1,
        explanation: "A Bernoulli equation $\\frac{dy}{dx} + P(x)y = Q(x)y^n$ is linearized by dividing by $y^n$ and substituting $u = y^{1-n}$. Its derivative is $\\frac{du}{dx} = (1-n)y^{-n}\\frac{dy}{dx}$, transforming the equation into linear form."
      }
    ]
  },
  {
    id: "quiz-progressions",
    title: "Arithmetic & Geometric Progressions",
    subject: "Math 2",
    description: "Solve problems on arithmetic series, geometric series, finding standard terms, and infinite sums.",
    difficulty: "Beginner",
    estimatedTime: "8 mins",
    icon: "aₙ",
    questions: [
      {
        id: "prog-q1",
        questionText: "Find the 10th term ($a_{10}$) of the arithmetic progression: $3, 7, 11, 15, \\dots$.",
        options: [
          "$36$",
          "$39$",
          "$40$",
          "$43$"
        ],
        correctAnswerIndex: 1,
        explanation: "For an arithmetic progression, $a_n = a + (n-1)d$.\nHere, the first term $a = 3$, and the common difference $d = 7 - 3 = 4$.\n$$a_{10} = 3 + (10-1)4 = 3 + 9(4) = 3 + 36 = 39.$$"
      },
      {
        id: "prog-q2",
        questionText: "What is the sum of the infinite geometric series $8 + 4 + 2 + 1 + \\dots$?",
        options: [
          "$14$",
          "$15$",
          "$16$",
          "It diverges"
        ],
        correctAnswerIndex: 2,
        explanation: "The series is geometric with first term $a = 8$ and common ratio $r = \\frac{4}{8} = \\frac{1}{2}$.\nSince $|r| < 1$, the sum of an infinite geometric series is given by:\n$$S_\\infty = \\frac{a}{1 - r} = \\frac{8}{1 - 1/2} = \\frac{8}{1/2} = 16.$$"
      },
      {
        id: "prog-q3",
        questionText: "Determine the common difference $d$ of an arithmetic sequence if $a_1 = 5$ and the sum of the first 6 terms is $75$.",
        options: [
          "$d = 2.5$",
          "$d = 3$",
          "$d = 4$",
          "$d = 5$"
        ],
        correctAnswerIndex: 1,
        explanation: "The sum formula is $S_n = \\frac{n}{2}[2a_1 + (n-1)d]$. For $n=6$, $a_1=5$, $S_6=75$:\n$$75 = \\frac{6}{2}[2(5) + 5d]$$\n$$75 = 3[10 + 5d] \\implies 25 = 10 + 5d$$\n$$15 = 5d \\implies d = 3.$$"
      }
    ]
  }
];
