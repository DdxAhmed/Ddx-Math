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

export const midtermExams: Quiz[] = [
  {
    id: "midterm-exam-1",
    title: "Midterm Exam 1 (Very Easy) - الامتحان 1",
    subject: "Math 2",
    description: "Difficulty rating: 2/10. An introductory exam covering case 1 partial fractions, basic arithmetic series, separation of variables, and simple 2nd order ODEs.",
    difficulty: "Beginner",
    estimatedTime: "15 mins",
    icon: "🟢",
    questions: [
      {
        id: "m1-q1",
        questionText: "Partial Fraction (Case 1): Decompose $\\frac{1}{(x-1)(x+1)}$.",
        options: [
          "$\\frac{1/2}{x-1} - \\frac{1/2}{x+1}$",
          "$\\frac{1}{x-1} + \\frac{1}{x+1}$",
          "$\\frac{1/2}{x-1} + \\frac{1/2}{x+1}$",
          "$\\frac{1}{x-1} - \\frac{1}{x+1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Using the Heaviside cover-up method:\n$$A = \\left. \\frac{1}{x+1} \\right|_{x=1} = \\frac{1}{2}$$\n$$B = \\left. \\frac{1}{x-1} \\right|_{x=-1} = -\\frac{1}{2}$$\nSo, the decomposition is $\\frac{1/2}{x-1} - \\frac{1/2}{x+1}$."
      },
      {
        id: "m1-q2",
        questionText: "Series: Find the sum of the series $S = 2 + 4 + 6 + \\dots + 20$.",
        options: [
          "$110$",
          "$100$",
          "$120$",
          "$90$"
        ],
        correctAnswerIndex: 0,
        explanation: "This is an arithmetic series with $a = 2$, common difference $d = 2$, and last term $L = 20$.\nFirst find $n$: $20 = 2 + (n-1)2 \\implies 18 = 2(n-1) \\implies n-1 = 9 \\implies n = 10$.\nUsing $S_n = \\frac{n}{2}(a + L)$:\n$$S_{10} = \\frac{10}{2}(2 + 20) = 5(22) = 110.$$"
      },
      {
        id: "m1-q3",
        questionText: "Separation: Solve $\\frac{dy}{dx} = xy$.",
        options: [
          "$y = C e^{\\frac{1}{2}x^2}$",
          "$y = e^{x^2} + C$",
          "$y = C e^x$",
          "$y = \\frac{1}{2}x^2 + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate the variables:\n$$\\frac{1}{y} \\, dy = x \\, dx$$\nIntegrate both sides:\n$$\\ln|y| = \\frac{1}{2}x^2 + C_1 \\implies y = C e^{\\frac{1}{2}x^2}$$"
      },
      {
        id: "m1-q4",
        questionText: "Homogeneous: Solve $\\frac{dy}{dx} = 1 + \\frac{y}{x}$.",
        options: [
          "$y = x\\ln|x| + Cx$",
          "$y = \\ln|x| + C$",
          "$y = x\\ln|x| + C$",
          "$y = x^2 + Cx$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$$v + x\\frac{dv}{dx} = 1 + v \\implies x\\frac{dv}{dx} = 1 \\implies dv = \\frac{1}{x} \\, dx$$\nIntegrating gives:\n$$v = \\ln|x| + C \\implies \\frac{y}{x} = \\ln|x| + C \\implies y = x\\ln|x| + Cx$$"
      },
      {
        id: "m1-q5",
        questionText: "Linear: Solve $\\frac{dy}{dx} + y = x$.",
        options: [
          "$y = x - 1 + C e^{-x}$",
          "$y = x + C e^{-x}$",
          "$y = x - 1 + C e^x$",
          "$y = x + 1 + C e^{-x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "The integrating factor is $\\mu(x) = e^{\\int 1 \\, dx} = e^x$.\nMultiply both sides by $e^x$:\n$$\\frac{d}{dx}(y e^x) = x e^x$$\nIntegrate both sides using integration by parts:\n$$y e^x = \\int x e^x \\, dx = x e^x - e^x + C \\implies y = x - 1 + C e^{-x}$$"
      },
      {
        id: "m1-q6",
        questionText: "Bernoulli: Solve $\\frac{dy}{dx} + y = y^2$.",
        options: [
          "$y = \\frac{1}{1 + C e^x}$",
          "$y = \\frac{1}{1 - C e^x}$",
          "$y = 1 + C e^x$",
          "$y = e^x + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Divide by $y^2$:\n$$y^{-2}\\frac{dy}{dx} + y^{-1} = 1$$\nLet $u = y^{-1} \\implies \\frac{du}{dx} = -y^{-2}\\frac{dy}{dx}$:\n$$-\\frac{du}{dx} + u = 1 \\implies \\frac{du}{dx} - u = -1$$\nIntegrating factor is $e^{-x}$:\n$$\\frac{d}{dx}(u e^{-x}) = -e^{-x} \\implies u e^{-x} = e^{-x} + C \\implies u = 1 + C e^x$$\nSince $u = y^{-1}$:\n$$y = \\frac{1}{1 + C e^x}$$"
      },
      {
        id: "m1-q7",
        questionText: "Second Order: Solve $y'' - y = 0$.",
        options: [
          "$y = C_1 e^x + C_2 e^{-x}$",
          "$y = C_1 \\cos(x) + C_2 \\sin(x)$",
          "$y = C_1 e^x + C_2 x e^x$",
          "$y = C_1 e^{-x} + C_2$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 - 1 = 0 \\implies r = \\pm 1$.\nThe general solution for real, distinct roots is:\n$$y = C_1 e^x + C_2 e^{-x}$$"
      },
      {
        id: "m1-q8",
        questionText: "System: Solve the system $x + y = 5$ and $x - y = 1$.",
        options: [
          "$x = 3, \\, y = 2$",
          "$x = 2, \\, y = 3$",
          "$x = 4, \\, y = 1$",
          "$x = 3, \\, y = 3$"
        ],
        correctAnswerIndex: 0,
        explanation: "Add the two equations:\n$$(x+y) + (x-y) = 5 + 1 \\implies 2x = 6 \\implies x = 3$$\nSubstitute $x = 3$ into the first equation:\n$$3 + y = 5 \\implies y = 2$$\nSo, the solution is $x = 3, y = 2$."
      }
    ]
  },
  {
    id: "midterm-exam-2",
    title: "Midterm Exam 2 (Easy) - الامتحان 2",
    subject: "Math 2",
    description: "Difficulty rating: 3/10. A simple exam covering basic partial fractions, sum of arithmetic progressions, separable ODEs, and simple linear systems.",
    difficulty: "Beginner",
    estimatedTime: "15 mins",
    icon: "🟢",
    questions: [
      {
        id: "m2-q1",
        questionText: "Partial Fraction (PF): Decompose $\\frac{1}{x(x+1)}$.",
        options: [
          "$\\frac{1}{x} - \\frac{1}{x+1}$",
          "$\\frac{1}{x} + \\frac{1}{x+1}$",
          "$\\frac{2}{x} - \\frac{1}{x+1}$",
          "$-\\frac{1}{x} + \\frac{1}{x+1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Using Heaviside cover-up method:\n$$A = \\left. \\frac{1}{x+1} \\right|_{x=0} = 1$$\n$$B = \\left. \\frac{1}{x} \\right|_{x=-1} = -1$$\nSo, the decomposition is $\\frac{1}{x} - \\frac{1}{x+1}$."
      },
      {
        id: "m2-q2",
        questionText: "Series: Given an arithmetic progression with $a_1 = 3$ and $d = 2$, find $S_5$.",
        options: [
          "$35$",
          "$25$",
          "$45$",
          "$30$"
        ],
        correctAnswerIndex: 0,
        explanation: "The formula for the sum of the first $n$ terms is $S_n = \\frac{n}{2}[2a_1 + (n-1)d]$:\n$$S_5 = \\frac{5}{2}[2(3) + (5-1)2] = \\frac{5}{2}[6 + 8] = \\frac{5}{2}(14) = 5 \\times 7 = 35.$$"
      },
      {
        id: "m2-q3",
        questionText: "Separation: Solve $\\frac{dy}{dx} = \\frac{y}{x}$.",
        options: [
          "$y = Cx$",
          "$y = x^2 + C$",
          "$y = C \\ln|x|$",
          "$y = e^x + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate the variables:\n$$\\frac{1}{y} \\, dy = \\frac{1}{x} \\, dx$$\nIntegrate both sides:\n$$\\ln|y| = \\ln|x| + C_1 \\implies y = Cx$$"
      },
      {
        id: "m2-q4",
        questionText: "Homogeneous: For $\\frac{dy}{dx} = \\frac{x}{x+y}$, write the integral equation resulting from substituting $y = vx$.",
        options: [
          "$\\ln|x| + \\int \\frac{1+v}{v^2+v-1} \\, dv = C$",
          "$\\ln|x| + \\int \\frac{1}{v^2+v-1} \\, dv = C$",
          "$\\int (1+v) \\, dv = \\ln|x| + C$",
          "$y = x\\ln|x| + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Set $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$$v + x\\frac{dv}{dx} = \\frac{x}{x+vx} = \\frac{1}{1+v} \\implies x\\frac{dv}{dx} = \\frac{1}{1+v} - v = \\frac{1-v-v^2}{1+v}$$\nSeparating variables:\n$$\\frac{1+v}{1-v-v^2} \\, dv = \\frac{1}{x} \\, dx \\implies \\ln|x| + \\int \\frac{1+v}{v^2+v-1} \\, dv = C$$"
      },
      {
        id: "m2-q5",
        questionText: "Linear: Solve $\\frac{dy}{dx} + 2y = x$.",
        options: [
          "$y = \\frac{1}{2}x - \\frac{1}{4} + C e^{-2x}$",
          "$y = \\frac{1}{2}x + \\frac{1}{4} + C e^{-2x}$",
          "$y = x - 2 + C e^{-2x}$",
          "$y = \\frac{1}{2}x - \\frac{1}{4} + C e^{2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Integrating factor is $\\mu(x) = e^{\\int 2 \\, dx} = e^{2x}$:\n$$\\frac{d}{dx}(y e^{2x}) = x e^{2x} \\implies y e^{2x} = \\int x e^{2x} \\, dx = \\frac{1}{2}x e^{2x} - \\frac{1}{4}e^{2x} + C$$\nDividing by $e^{2x}$:\n$$y = \\frac{1}{2}x - \\frac{1}{4} + C e^{-2x}$$$"
      },
      {
        id: "m2-q6",
        questionText: "Bernoulli: Solve $\\frac{dy}{dx} + y = x y^2$.",
        options: [
          "$y = \\frac{1}{x + 1 + C e^x}$",
          "$y = \\frac{1}{x - 1 + C e^x}$",
          "$y = x + 1 + C e^x$",
          "$y = \\frac{1}{x + 1 + C e^{-x}}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Divide by $y^2$:\n$$y^{-2}\\frac{dy}{dx} + y^{-1} = x$$\nLet $u = y^{-1} \\implies \\frac{du}{dx} = -y^{-2}\\frac{dy}{dx}$:\n$$-\\frac{du}{dx} + u = x \\implies \\frac{du}{dx} - u = -x$$\nIntegrating factor is $e^{-x}$:\n$$\\frac{d}{dx}(u e^{-x}) = -x e^{-x} \\implies u e^{-x} = \\int -x e^{-x} \\, dx = x e^{-x} + e^{-x} + C \\implies u = x + 1 + C e^x$$\nSince $u = y^{-1}$:\n$$y = \\frac{1}{x + 1 + C e^x}$$$"
      },
      {
        id: "m2-q7",
        questionText: "Second Order: Solve $y'' + y = 0$.",
        options: [
          "$y = C_1 \\cos(x) + C_2 \\sin(x)$",
          "$y = C_1 e^x + C_2 e^{-x}$",
          "$y = C_1 e^x + C_2 x e^x$",
          "$y = C_1 \\cos(x) - C_2 \\sin(x)$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 + 1 = 0 \\implies r = \\pm i$.\nFor complex conjugate roots $\\alpha \\pm i\\beta$ with $\\alpha = 0$ and $\\beta = 1$, the general solution is:\n$$y = C_1 \\cos(x) + C_2 \\sin(x)$$"
      },
      {
        id: "m2-q8",
        questionText: "System: Solve the system $2x + y = 3$ and $x - y = 1$.",
        options: [
          "$x = \\frac{4}{3}, \\, y = \\frac{1}{3}$",
          "$x = 1, \\, y = 1$",
          "$x = \\frac{3}{2}, \\, y = 0$",
          "$x = \\frac{5}{3}, \\, y = -\\frac{1}{3}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Add the two equations:\n$$(2x+y) + (x-y) = 3 + 1 \\implies 3x = 4 \\implies x = \\frac{4}{3}$$\nFrom the second equation:\n$$y = x - 1 = \\frac{4}{3} - 1 = \\frac{1}{3}$$\nSo, the solution is $x = \\frac{4}{3}, y = \\frac{1}{3}$."
      }
    ]
  },
  {
    id: "midterm-exam-3",
    title: "Midterm Exam 3 - الامتحان 3",
    subject: "Math 2",
    description: "Difficulty rating: 4/10. Covers partial fractions, infinite geometric series, separable and Bernoulli equations, and 2nd order ODEs with distinct real roots.",
    difficulty: "Intermediate",
    estimatedTime: "20 mins",
    icon: "🟡",
    questions: [
      {
        id: "m3-q1",
        questionText: "PF: Decompose $\\frac{2x+1}{x(x+1)}$.",
        options: [
          "$\\frac{1}{x} + \\frac{1}{x+1}$",
          "$\\frac{1}{x} - \\frac{1}{x+1}$",
          "$\\frac{2}{x} + \\frac{1}{x+1}$",
          "$\\frac{1}{x} + \\frac{2}{x+1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Using Heaviside cover-up method:\n$$A = \\left. \\frac{2x+1}{x+1} \\right|_{x=0} = \\frac{1}{1} = 1$$\n$$B = \\left. \\frac{2x+1}{x} \\right|_{x=-1} = \\frac{-1}{-1} = 1$$\nSo, the decomposition is $\\frac{1}{x} + \\frac{1}{x+1}$."
      },
      {
        id: "m3-q2",
        questionText: "Series: Find the sum of the series $\\sum_{n=1}^{\\infty} \\frac{1}{2^n}$.",
        options: [
          "$1$",
          "$2$",
          "$\\frac{1}{2}$",
          "Diverges"
        ],
        correctAnswerIndex: 0,
        explanation: "This is a geometric series with first term $a = \\frac{1}{2}$ and common ratio $r = \\frac{1}{2}$.\nSince $|r| < 1$, the sum is:\n$$S_\\infty = \\frac{a}{1 - r} = \\frac{1/2}{1 - 1/2} = 1.$$"
      },
      {
        id: "m3-q3",
        questionText: "Separation: Solve $\\frac{dy}{dx} = x^2 y$.",
        options: [
          "$y = C e^{\\frac{x^3}{3}}$",
          "$y = C e^{x^2}$",
          "$y = \\frac{x^3}{3} + C$",
          "$y = C e^{x^3}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate the variables:\n$$\\frac{1}{y} \\, dy = x^2 \\, dx$$\nIntegrate both sides:\n$$\\ln|y| = \\frac{x^3}{3} + C_1 \\implies y = C e^{\\frac{x^3}{3}}$$"
      },
      {
        id: "m3-q4",
        questionText: "Homogeneous: For $\\frac{dy}{dx} = \\frac{x}{x-y}$, write the integral equation resulting from substituting $y = vx$.",
        options: [
          "$\\ln|x| = \\int \\frac{1-v}{v^2-v+1} \\, dv + C$",
          "$\\ln|x| = \\int \\frac{v}{v^2-v+1} \\, dv + C$",
          "$\\int (1-v) \\, dv = \\ln|x| + C$",
          "$y = x\\ln|x| + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Set $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$$v + x\\frac{dv}{dx} = \\frac{x}{x-vx} = \\frac{1}{1-v} \\implies x\\frac{dv}{dx} = \\frac{1}{1-v} - v = \\frac{1-v+v^2}{1-v} = \\frac{v^2-v+1}{1-v}$$\nSeparating variables:\n$$\\frac{1-v}{v^2-v+1} \\, dv = \\frac{1}{x} \\, dx \\implies \\ln|x| = \\int \\frac{1-v}{v^2-v+1} \\, dv + C$$"
      },
      {
        id: "m3-q5",
        questionText: "Linear: Solve $\\frac{dy}{dx} + y = e^x$.",
        options: [
          "$y = \\frac{1}{2}e^x + C e^{-x}$",
          "$y = e^x + C e^{-x}$",
          "$y = \\frac{1}{2}e^{2x} + C e^{-x}$",
          "$y = \\frac{1}{2}e^x + C e^x$"
        ],
        correctAnswerIndex: 0,
        explanation: "Integrating factor is $\\mu(x) = e^x$:\n$$\\frac{d}{dx}(y e^x) = e^x \\cdot e^x = e^{2x} \\implies y e^x = \\int e^{2x} \\, dx = \\frac{1}{2}e^{2x} + C$$\nDividing by $e^x$:\n$$y = \\frac{1}{2}e^x + C e^{-x}$$$"
      },
      {
        id: "m3-q6",
        questionText: "Bernoulli: Solve $\\frac{dy}{dx} + y = y^3$.",
        options: [
          "$y^2 = \\frac{1}{1 + C e^{2x}}$",
          "$y^2 = \\frac{1}{1 - C e^{2x}}$",
          "$y = 1 + C e^{2x}$",
          "$y^2 = 1 + C e^{-2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Divide by $y^3$:\n$$y^{-3}\\frac{dy}{dx} + y^{-2} = 1$$\nLet $u = y^{-2} \\implies \\frac{du}{dx} = -2y^{-3}\\frac{dy}{dx}$:\n$$-\\frac{1}{2}\\frac{du}{dx} + u = 1 \\implies \\frac{du}{dx} - 2u = -2$$\nIntegrating factor is $e^{-2x}$:\n$$\\frac{d}{dx}(u e^{-2x}) = -2e^{-2x} \\implies u e^{-2x} = e^{-2x} + C \\implies u = 1 + C e^{2x}$$\nSince $u = y^{-2}$:\n$$y^2 = \\frac{1}{1 + C e^{2x}}$$$"
      },
      {
        id: "m3-q7",
        questionText: "Second Order: Solve $y'' - 3y' + 2y = 0$.",
        options: [
          "$y = C_1 e^x + C_2 e^{2x}$",
          "$y = C_1 e^{-x} + C_2 e^{-2x}$",
          "$y = C_1 \\cos(x) + C_2 \\sin(2x)$",
          "$y = C_1 e^x + C_2 x e^x$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 - 3r + 2 = 0 \\implies (r-1)(r-2) = 0 \\implies r = 1, 2$.\nThe general solution is:\n$$y = C_1 e^x + C_2 e^{2x}$$"
      },
      {
        id: "m3-q8",
        questionText: "System: Solve the system $x + 2y = 4$ and $3x - y = 5$.",
        options: [
          "$x = 2, \\, y = 1$",
          "$x = 1, \\, y = 2$",
          "$x = 3, \\, y = 0$",
          "$x = 2, \\, y = 2$"
        ],
        correctAnswerIndex: 0,
        explanation: "Multiply the second equation by 2:\n$$6x - 2y = 10$$\nAdd to the first equation:\n$$(x + 2y) + (6x - 2y) = 4 + 10 \\implies 7x = 14 \\implies x = 2$$\nSubstitute $x = 2$ into the first equation:\n$$2 + 2y = 4 \\implies 2y = 2 \\implies y = 1$$\nSo, the solution is $x = 2, y = 1$."
      }
    ]
  },
  {
    id: "midterm-exam-4",
    title: "Midterm Exam 4 - الامتحان 4",
    subject: "Math 2",
    description: "Difficulty rating: 5/10. Covers case 1 partial fractions, divergence test for series, linear ODEs with trig coefficients, and homogeneous substitutions.",
    difficulty: "Intermediate",
    estimatedTime: "20 mins",
    icon: "🟡",
    questions: [
      {
        id: "m4-q1",
        questionText: "PF: Decompose $\\frac{1}{(x-1)(x-2)}$.",
        options: [
          "$\\frac{1}{x-2} - \\frac{1}{x-1}$",
          "$\\frac{1}{x-1} - \\frac{1}{x-2}$",
          "$\\frac{1}{x-2} + \\frac{1}{x-1}$",
          "$\\frac{2}{x-2} - \\frac{1}{x-1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Using Heaviside cover-up method:\n$$A = \\left. \\frac{1}{x-2} \\right|_{x=1} = -1$$\n$$B = \\left. \\frac{1}{x-1} \\right|_{x=2} = 1$$\nSo, the decomposition is $\\frac{1}{x-2} - \\frac{1}{x-1}$."
      },
      {
        id: "m4-q2",
        questionText: "Series: Determine the behavior of the series $\\sum_{n=1}^{\\infty} \\frac{n}{n+1}$.",
        options: [
          "Diverges",
          "Converges to 1",
          "Converges to 0",
          "Converges to 2"
        ],
        correctAnswerIndex: 0,
        explanation: "Applying the Divergence Test (nth-term test):\n$$\\lim_{n \\to \\infty} a_n = \\lim_{n \\to \\infty} \\frac{n}{n+1} = 1$$\nSince the limit is not equal to 0, the series diverges."
      },
      {
        id: "m4-q3",
        questionText: "Separation: Solve $\\frac{dy}{dx} = \\frac{1+y}{x}$.",
        options: [
          "$y = Cx - 1$",
          "$y = Cx$",
          "$y = C e^x - 1$",
          "$y = \\frac{C}{x} - 1$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate the variables:\n$$\\frac{1}{1+y} \\, dy = \\frac{1}{x} \\, dx$$\nIntegrate both sides:\n$$\\ln|1+y| = \\ln|x| + C_1 \\implies 1+y = Cx \\implies y = Cx - 1$$"
      },
      {
        id: "m4-q4",
        questionText: "Homogeneous: Substitute $y = vx$ into $\\frac{dy}{dx} = \\frac{xy}{x^2+y^2}$ and find the transformed differential equation.",
        options: [
          "$x \\frac{dv}{dx} = -\\frac{v^3}{1+v^2}$",
          "$x \\frac{dv}{dx} = \\frac{v}{1+v^2}$",
          "$x \\frac{dv}{dx} = -\\frac{v}{1+v^2}$",
          "$x \\frac{dv}{dx} = -v^3$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$$v + x\\frac{dv}{dx} = \\frac{x(vx)}{x^2+v^2x^2} = \\frac{v}{1+v^2}$$\n$$x\\frac{dv}{dx} = \\frac{v}{1+v^2} - v = \\frac{v - v(1+v^2)}{1+v^2} = -\\frac{v^3}{1+v^2}$$$"
      },
      {
        id: "m4-q5",
        questionText: "Linear: Solve $\\frac{dy}{dx} + y\\tan(x) = \\sin(x)$.",
        options: [
          "$y = \\cos(x)\\ln|\\sec(x)| + C\\cos(x)$",
          "$y = \\sin(x)\\ln|\\sec(x)| + C\\sin(x)$",
          "$y = \\cos(x)\\tan(x) + C$",
          "$y = \\ln|\\sec(x)| + C\\cos(x)$"
        ],
        correctAnswerIndex: 0,
        explanation: "The integrating factor is $\\mu(x) = e^{\\int \\tan(x) \\, dx} = e^{\\ln|\\sec(x)|} = \\sec(x)$:\n$$\\frac{d}{dx}(y \\sec(x)) = \\sin(x)\\sec(x) = \\tan(x)$$\nIntegrate both sides:\n$$y \\sec(x) = \\ln|\\sec(x)| + C \\implies y = \\cos(x)\\ln|\\sec(x)| + C\\cos(x)$$"
      },
      {
        id: "m4-q6",
        questionText: "Bernoulli: Solve $\\frac{dy}{dx} + y = x y^2$.",
        options: [
          "$y = \\frac{1}{x + 1 + C e^x}$",
          "$y = \\frac{1}{x - 1 + C e^x}$",
          "$y = x + 1 + C e^x$",
          "$y = \\frac{1}{x + 1 + C e^{-x}}$"
        ],
        correctAnswerIndex: 0,
        explanation: "This is a Bernoulli equation solved by substituting $u = y^{-1}$. It yields the linear equation $u' - u = -x$ with general solution $u = x + 1 + C e^x$. Hence, $y = \\frac{1}{x + 1 + C e^x}$."
      },
      {
        id: "m4-q7",
        questionText: "Second Order: Solve $y'' + 4y = 0$.",
        options: [
          "$y = C_1 \\cos(2x) + C_2 \\sin(2x)$",
          "$y = C_1 \\cos(4x) + C_2 \\sin(4x)$",
          "$y = C_1 e^{2x} + C_2 e^{-2x}$",
          "$y = C_1 x \\cos(2x) + C_2 \\sin(2x)$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 + 4 = 0 \\implies r = \\pm 2i$.\nThe general solution is:\n$$y = C_1 \\cos(2x) + C_2 \\sin(2x)$$"
      },
      {
        id: "m4-q8",
        questionText: "System: Solve the system $x - y = 2$ and $x + y = 6$.",
        options: [
          "$x = 4, \\, y = 2$",
          "$x = 3, \\, y = 3$",
          "$x = 5, \\, y = 1$",
          "$x = 4, \\, y = 1$"
        ],
        correctAnswerIndex: 0,
        explanation: "Add the two equations:\n$$(x-y) + (x+y) = 2 + 6 \\implies 2x = 8 \\implies x = 4$$\nSubstitute $x = 4$ into the second equation:\n$$4 + y = 6 \\implies y = 2$$\nSo, the solution is $x = 4, y = 2$."
      }
    ]
  },
  {
    id: "midterm-exam-5",
    title: "Midterm Exam 5 - الامتحان 5",
    subject: "Math 2",
    description: "Difficulty rating: 6/10. Covers partial fractions with non-zero numerators, convergence of the harmonic series, separable ODEs with powers, homogeneous forms, and 2nd order ODEs with repeated roots.",
    difficulty: "Advanced",
    estimatedTime: "25 mins",
    icon: "🧡",
    questions: [
      {
        id: "m5-q1",
        questionText: "PF: Decompose $\\frac{3x+2}{x(x+1)}$.",
        options: [
          "$\\frac{2}{x} + \\frac{1}{x+1}$",
          "$\\frac{1}{x} + \\frac{2}{x+1}$",
          "$\\frac{2}{x} - \\frac{1}{x+1}$",
          "$\\frac{3}{x} + \\frac{2}{x+1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Using Heaviside cover-up method:\n$$A = \\left. \\frac{3x+2}{x+1} \\right|_{x=0} = \\frac{2}{1} = 2$$\n$$B = \\left. \\frac{3x+2}{x} \\right|_{x=-1} = \\frac{-1}{-1} = 1$$\nSo, the decomposition is $\\frac{2}{x} + \\frac{1}{x+1}$."
      },
      {
        id: "m5-q2",
        questionText: "Series: Does the series $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ converge or diverge?",
        options: [
          "Diverges (تباعدية)",
          "Converges (متقاربة)",
          "Converges to 1",
          "Converges to 0"
        ],
        correctAnswerIndex: 0,
        explanation: "This is the harmonic series, which is a p-series with $p=1$. Since $p \\le 1$, the series diverges."
      },
      {
        id: "m5-q3",
        questionText: "Separation: Solve $\\frac{dy}{dx} = x y^2$.",
        options: [
          "$y = \\frac{-2}{x^2 + C}$",
          "$y = C e^{\\frac{x^2}{2}}$",
          "$y = \\frac{x^2}{2} + C$",
          "$y = \\frac{2}{x^2 + C}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate variables:\n$$y^{-2} \\, dy = x \\, dx$$\nIntegrate both sides:\n$$-y^{-1} = \\frac{1}{2}x^2 + C_1 \\implies \\frac{1}{y} = -\\frac{x^2}{2} + C \\implies y = \\frac{1}{-\\frac{x^2}{2} + C} = \\frac{-2}{x^2 + C_2}$$$"
      },
      {
        id: "m5-q4",
        questionText: "Homogeneous: Substitute $y = vx$ into $\\frac{dy}{dx} = \\frac{x-y}{x+2y}$ and find the transformed equation.",
        options: [
          "$x \\frac{dv}{dx} = \\frac{1-2v-2v^2}{1+2v}$",
          "$x \\frac{dv}{dx} = \\frac{1-v}{1+2v}$",
          "$x \\frac{dv}{dx} = \\frac{1-2v-v^2}{1+2v}$",
          "$x \\frac{dv}{dx} = \\frac{1-2v}{1+2v}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$$v + x\\frac{dv}{dx} = \\frac{x-vx}{x+2vx} = \\frac{1-v}{1+2v}$$\n$$x\\frac{dv}{dx} = \\frac{1-v}{1+2v} - v = \\frac{1-v-v(1+2v)}{1+2v} = \\frac{1-2v-2v^2}{1+2v}$$$"
      },
      {
        id: "m5-q5",
        questionText: "Linear: Solve $\\frac{dy}{dx} + 2y = e^x$.",
        options: [
          "$y = \\frac{1}{3}e^x + C e^{-2x}$",
          "$y = e^x + C e^{-2x}$",
          "$y = \\frac{1}{3}e^{2x} + C e^{-2x}$",
          "$y = \\frac{1}{3}e^x + C e^{2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Integrating factor is $\\mu(x) = e^{2x}$:\n$$\\frac{d}{dx}(y e^{2x}) = e^x \\cdot e^{2x} = e^{3x} \\implies y e^{2x} = \\int e^{3x} \\, dx = \\frac{1}{3}e^{3x} + C$$\nDividing by $e^{2x}$:\n$$y = \\frac{1}{3}e^x + C e^{-2x}$$$"
      },
      {
        id: "m5-q6",
        questionText: "Bernoulli: Solve $\\frac{dy}{dx} + y = y^2 \\cos(x)$.",
        options: [
          "$y = \\frac{2}{\\cos(x) - \\sin(x) + C e^x}$",
          "$y = \\frac{2}{\\sin(x) - \\cos(x) + C e^x}$",
          "$y = \\frac{1}{\\cos(x) - \\sin(x) + C e^x}$",
          "$y = \\frac{2}{\\cos(x) + \\sin(x) + C e^x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $u = y^{-1} \\implies u' - u = -\\cos(x)$.\nIntegrating factor is $e^{-x}$:\n$$\\frac{d}{dx}(u e^{-x}) = -e^{-x}\\cos(x) \\implies u e^{-x} = \\int -e^{-x}\\cos(x) \\, dx = \\frac{e^{-x}(\\cos(x) - \\sin(x))}{2} + C$$\nMultiply by $e^x$:\n$$u = \\frac{\\cos(x) - \\sin(x)}{2} + C e^x \\implies y = \\frac{2}{\\cos(x) - \\sin(x) + 2C e^x}$$$"
      },
      {
        id: "m5-q7",
        questionText: "Second Order: Solve $y'' - 2y' + y = 0$.",
        options: [
          "$y = (C_1 + C_2 x) e^x$",
          "$y = C_1 e^x + C_2 e^{-x}$",
          "$y = C_1 e^x + C_2 e^x$",
          "$y = (C_1 \\cos(x) + C_2 \\sin(x)) e^x$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 - 2r + 1 = 0 \\implies (r-1)^2 = 0 \\implies r = 1$ (repeated root).\nThe general solution for repeated real roots is:\n$$y = (C_1 + C_2 x) e^x$$"
      },
      {
        id: "m5-q8",
        questionText: "System: Solve the system $2x + y = 7$ and $x + 3y = 5$.",
        options: [
          "$x = 3.2, \\, y = 0.6$",
          "$x = 3, \\, y = 1$",
          "$x = 2, \\, y = 3$",
          "$x = 4, \\, y = -1$"
        ],
        correctAnswerIndex: 0,
        explanation: "From the first equation, $y = 7 - 2x$. Substitute into the second:\n$$x + 3(7 - 2x) = 5 \\implies x + 21 - 6x = 5 \\implies -5x = -16 \\implies x = 3.2$$\nThen, substitute $x = 3.2$ back:\n$$y = 7 - 2(3.2) = 7 - 6.4 = 0.6$$\nSo, $x = 3.2, y = 0.6$."
      }
    ]
  },
  {
    id: "midterm-exam-6",
    title: "Midterm Exam 6 - الامتحان 6",
    subject: "Math 2",
    description: "Difficulty rating: 7/10. Covers improper partial fractions (polynomial division), general geometric series formulas, separable equations with exponential solutions, Bernoulli, and advanced linear equations.",
    difficulty: "Advanced",
    estimatedTime: "25 mins",
    icon: "🧡",
    questions: [
      {
        id: "m6-q1",
        questionText: "PF: Decompose the improper fraction $\\frac{x^2+1}{x(x+1)}$.",
        options: [
          "$1 + \\frac{1}{x} - \\frac{2}{x+1}$",
          "$\\frac{1}{x} - \\frac{2}{x+1}$",
          "$1 - \\frac{1}{x} + \\frac{2}{x+1}$",
          "$1 + \\frac{1}{x} + \\frac{2}{x+1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "First perform polynomial division since the numerator and denominator are of equal degree (2):\n$$\\frac{x^2+1}{x^2+x} = 1 - \\frac{x-1}{x(x+1)}$$\nNow decompose $\\frac{x-1}{x(x+1)}$:\n$$A = \\left. \\frac{x-1}{x+1} \\right|_{x=0} = -1$$\n$$B = \\left. \\frac{x-1}{x} \\right|_{x=-1} = 2$$\n$$\\implies \\frac{x-1}{x(x+1)} = -\\frac{1}{x} + \\frac{2}{x+1}$$\nSubstituting back:\n$$1 - \\left( -\\frac{1}{x} + \\frac{2}{x+1} \\right) = 1 + \\frac{1}{x} - \\frac{2}{x+1}$$"
      },
      {
        id: "m6-q2",
        questionText: "Series: What is the sum formula of an infinite geometric series $S_{\\infty}$ when $|r| < 1$?",
        options: [
          "$S_\\infty = \\frac{a_1}{1-r}$",
          "$S_\\infty = \\frac{a_1}{r-1}$",
          "$S_\\infty = \\frac{n}{2}(a_1 + a_n)$",
          "$S_\\infty = a_1 r^{n-1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "For any infinite geometric series with first term $a_1$ and common ratio $r$ satisfying $|r| < 1$, the sum is given by:\n$$S_{\\infty} = \\frac{a_1}{1-r}$$"
      },
      {
        id: "m6-q3",
        questionText: "Separation: Solve $\\frac{dy}{dx} = \\frac{y}{x^2}$.",
        options: [
          "$y = C e^{-1/x}$",
          "$y = C e^{1/x}$",
          "$y = -\\frac{1}{x} + C$",
          "$y = C e^{-x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate variables:\n$$\\frac{1}{y} \\, dy = x^{-2} \\, dx$$\nIntegrate both sides:\n$$\\ln|y| = -x^{-1} + C_1 \\implies y = C e^{-1/x}$$"
      },
      {
        id: "m6-q4",
        questionText: "Homogeneous: Substitute $y = vx$ into $\\frac{dy}{dx} = \\frac{x}{2x+y}$ and find the transformed equation.",
        options: [
          "$x \\frac{dv}{dx} = \\frac{1-2v-v^2}{2+v}$",
          "$x \\frac{dv}{dx} = \\frac{1}{2+v}$",
          "$x \\frac{dv}{dx} = \\frac{1-v^2}{2+v}$",
          "$x \\frac{dv}{dx} = \\frac{1-2v-2v^2}{2+v}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$$v + x\\frac{dv}{dx} = \\frac{x}{2x+vx} = \\frac{1}{2+v}$$\n$$x\\frac{dv}{dx} = \\frac{1}{2+v} - v = \\frac{1-v(2+v)}{2+v} = \\frac{1-2v-v^2}{2+v}$$$"
      },
      {
        id: "m6-q5",
        questionText: "Linear: Solve $\\frac{dy}{dx} + y = \\frac{1}{x}$.",
        options: [
          "$y = e^{-x} \\int \\frac{e^x}{x} \\, dx + C e^{-x}$",
          "$y = e^x \\int \\frac{e^{-x}}{x} \\, dx + C e^x$",
          "$y = \\frac{\\ln|x|}{e^x} + C$",
          "$y = e^{-x} \\ln|x| + C e^{-x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "The integrating factor is $\\mu(x) = e^x$:\n$$\\frac{d}{dx}(y e^x) = \\frac{e^x}{x} \\implies y e^x = \\int \\frac{e^x}{x} \\, dx + C$$\nDividing by $e^x$:\n$$y = e^{-x} \\int \\frac{e^x}{x} \\, dx + C e^{-x}$$$"
      },
      {
        id: "m6-q6",
        questionText: "Bernoulli: Solve $\\frac{dy}{dx} + y = x y^3$.",
        options: [
          "$y^2 = \\frac{2}{2x + 1 + C e^{2x}}$",
          "$y^2 = \\frac{1}{x + 1 + C e^{2x}}$",
          "$y = x + \\frac{1}{2} + C e^{2x}$",
          "$y^2 = \\frac{2}{2x - 1 + C e^{2x}}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Divide by $y^3$:\n$$y^{-3}\\frac{dy}{dx} + y^{-2} = x$$\nLet $u = y^{-2} \\implies u' - 2u = -2x$.\nIntegrating factor is $e^{-2x}$:\n$$\\frac{d}{dx}(u e^{-2x}) = -2x e^{-2x} \\implies u e^{-2x} = \\int -2x e^{-2x} \\, dx = x e^{-2x} + \\frac{1}{2} e^{-2x} + C_1$$\n$$u = x + \\frac{1}{2} + C e^{2x} = \\frac{2x + 1 + 2C e^{2x}}{2} \\implies y^2 = \\frac{2}{2x + 1 + C' e^{2x}}$$$"
      },
      {
        id: "m6-q7",
        questionText: "Second Order: Solve $y'' + 3y' + 2y = 0$.",
        options: [
          "$y = C_1 e^{-x} + C_2 e^{-2x}$",
          "$y = C_1 e^x + C_2 e^{2x}$",
          "$y = C_1 \\cos(x) + C_2 \\sin(2x)$",
          "$y = (C_1 + C_2 x) e^{-x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 + 3r + 2 = 0 \\implies (r+1)(r+2) = 0 \\implies r = -1, -2$.\nThe general solution is:\n$$y = C_1 e^{-x} + C_2 e^{-2x}$$\n"
      },
      {
        id: "m6-q8",
        questionText: "System: Solve the system $x + 2y = 3$ and $2x - y = 4$.",
        options: [
          "$x = 2.2, \\, y = 0.4$",
          "$x = 2, \\, y = 1$",
          "$x = 3, \\, y = 0$",
          "$x = 2.5, \\, y = 0.25$"
        ],
        correctAnswerIndex: 0,
        explanation: "From the second equation, $y = 2x - 4$. Substitute into the first:\n$$x + 2(2x - 4) = 3 \\implies x + 4x - 8 = 3 \\implies 5x = 11 \\implies x = 2.2$$\nThen, substitute back:\n$$y = 2(2.2) - 4 = 4.4 - 4 = 0.4$$\nSo, $x = 2.2, y = 0.4$."
      }
    ]
  },
  {
    id: "midterm-exam-7",
    title: "Midterm Exam 7 (Very Hard) - امتحان تدريبي 1",
    subject: "Math 2",
    description: "Difficulty rating: 8/10. A very challenging practice exam covering case 1 decomposition with fractional coefficients, repeated linear partial fractions, series comparison tests, systems, and second-order ODEs.",
    difficulty: "Advanced",
    estimatedTime: "30 mins",
    icon: "🔴",
    questions: [
      {
        id: "m7-q1",
        questionText: "Partial Fraction (Case 1): Decompose $\\frac{5x+1}{(x-2)(x+3)}$.",
        options: [
          "$\\frac{11/5}{x-2} + \\frac{14/5}{x+3}$",
          "$\\frac{2}{x-2} + \\frac{3}{x+3}$",
          "$\\frac{11/5}{x-2} - \\frac{14/5}{x+3}$",
          "$\\frac{14/5}{x-2} + \\frac{11/5}{x+3}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Using the Heaviside cover-up method:\n$$A = \\left. \\frac{5x+1}{x+3} \\right|_{x=2} = \\frac{5(2)+1}{2+3} = \\frac{11}{5}$$\n$$B = \\left. \\frac{5x+1}{x-2} \\right|_{x=-3} = \\frac{5(-3)+1}{-3-2} = \\frac{-14}{-5} = \\frac{14}{5}$$\nSo the decomposition is $\\frac{11/5}{x-2} + \\frac{14/5}{x+3}$."
      },
      {
        id: "m7-q2",
        questionText: "Partial Fraction (Repeated root): Decompose $\\frac{2x+3}{(x-1)^2}$.",
        options: [
          "$\\frac{2}{x-1} + \\frac{5}{(x-1)^2}$",
          "$\\frac{2}{x-1} + \\frac{3}{(x-1)^2}$",
          "$\\frac{2}{x-1} - \\frac{5}{(x-1)^2}$",
          "$\\frac{5}{x-1} + \\frac{2}{(x-1)^2}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $u = x - 1 \\implies x = u + 1$:\n$$\\frac{2(u+1)+3}{u^2} = \\frac{2u+5}{u^2} = \\frac{2}{u} + \\frac{5}{u^2}$$\nSubstituting back $u = x - 1$:\n$$\\frac{2}{x-1} + \\frac{5}{(x-1)^2}$$"
      },
      {
        id: "m7-q3",
        questionText: "Series: Determine the convergence of the series $\\sum_{n=1}^{\\infty} \\frac{1}{n^2+1}$.",
        options: [
          "Converges (متقاربة) by Limit Comparison with $\\sum \\frac{1}{n^2}$",
          "Diverges (تباعدية) by Divergence Test",
          "Diverges by Comparison with $\\sum \\frac{1}{n}$",
          "Converges by Ratio Test"
        ],
        correctAnswerIndex: 0,
        explanation: "Compare with the convergent p-series $\\sum \\frac{1}{n^2}$ ($p=2 > 1$).\n$$\\lim_{n \\to \\infty} \\frac{1/(n^2+1)}{1/n^2} = \\lim_{n \\to \\infty} \\frac{n^2}{n^2+1} = 1 > 0.$$\nSince the limit is finite and positive, both series converge."
      },
      {
        id: "m7-q4",
        questionText: "Separation: Solve the differential equation $\\frac{dy}{dx} = x(1+y^2)$.",
        options: [
          "$y = \\tan\\left(\\frac{1}{2}x^2 + C\\right)$",
          "$y = \\arctan\\left(\\frac{1}{2}x^2 + C\\right)$",
          "$y = \\tan\\left(x^2 + C\\right)$",
          "$y = e^{\\frac{1}{2}x^2} + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate the variables:\n$$\\frac{1}{1+y^2} \\, dy = x \\, dx$$\nIntegrate both sides:\n$$\\arctan(y) = \\frac{1}{2}x^2 + C_1 \\implies y = \\tan\\left(\\frac{1}{2}x^2 + C\\right)$$"
      },
      {
        id: "m7-q5",
        questionText: "Homogeneous: Solve the homogeneous ODE $\\frac{dy}{dx} = \\frac{x-y}{x+y}$.",
        options: [
          "$y^2 + 2xy - x^2 = C$",
          "$y^2 - 2xy - x^2 = C$",
          "$y^2 + 2xy + x^2 = C$",
          "$y^2 + xy - x^2 = C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$$v + x\\frac{dv}{dx} = \\frac{1-v}{1+v} \\implies x\\frac{dv}{dx} = \\frac{1-v-v(1+v)}{1+v} = \\frac{1-2v-v^2}{1+v}$$\nSeparating variables:\n$$\\frac{1+v}{v^2+2v-1} \\, dv = -\\frac{1}{x} \\, dx \\implies \\frac{1}{2}\\ln|v^2+2v-1| = -\\ln|x| + C_1$$\n$$\\ln|v^2+2v-1| = \\ln|x^{-2}| + C_2 \\implies v^2+2v-1 = \\frac{C}{x^2}$$\nSubstitute $v = \\frac{y}{x}$:\n$$\\frac{y^2}{x^2} + 2\\frac{y}{x} - 1 = \\frac{C}{x^2} \\implies y^2 + 2xy - x^2 = C$$"
      },
      {
        id: "m7-q6",
        questionText: "Linear: Solve the linear differential equation $\\frac{dy}{dx} + y = x e^x$.",
        options: [
          "$y = \\left(\\frac{1}{2}x - \\frac{1}{4}\\right)e^x + C e^{-x}$",
          "$y = \\left(\\frac{1}{2}x^2\\right)e^x + C e^{-x}$",
          "$y = \\left(\\frac{1}{2}x - \\frac{1}{4}\\right)e^{-x} + C e^x$",
          "$y = x e^x + C e^{-x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Integrating factor is $\\mu(x) = e^x$. Multiply both sides:\n$$\\frac{d}{dx}(y e^x) = x e^{2x}$$\nIntegrate the right side by parts:\n$$y e^x = \\int x e^{2x} \\, dx = \\frac{1}{2}x e^{2x} - \\frac{1}{4}e^{2x} + C$$\nDivide by $e^x$:\n$$y = \\left(\\frac{1}{2}x - \\frac{1}{4}\\right)e^x + C e^{-x}$$$"
      },
      {
        id: "m7-q7",
        questionText: "Bernoulli: Solve the differential equation $\\frac{dy}{dx} + y = x y^2$.",
        options: [
          "$y = \\frac{1}{x + 1 + C e^x}$",
          "$y = \\frac{1}{x - 1 + C e^x}$",
          "$y = x + 1 + C e^x$",
          "$y = \\frac{1}{x + 1 + C e^{-x}}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $u = y^{-1}$ to yield $u' - u = -x$ with solution $u = x + 1 + C e^x$. Since $u = y^{-1}$, we get $y = \\frac{1}{x + 1 + C e^x}$."
      },
      {
        id: "m7-q8",
        questionText: "Second Order: Solve the differential equation $y'' - 5y' + 6y = 0$.",
        options: [
          "$y = C_1 e^{2x} + C_2 e^{3x}$",
          "$y = C_1 e^{-2x} + C_2 e^{-3x}$",
          "$y = C_1 \\cos(2x) + C_2 \\sin(3x)$",
          "$y = (C_1 + C_2 x) e^{2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 - 5r + 6 = 0 \\implies (r-2)(r-3) = 0 \\implies r = 2, 3$.\nThe general solution is $y = C_1 e^{2x} + C_2 e^{3x}$."
      },
      {
        id: "m7-q9",
        questionText: "System: Solve the system $x + y = 4$ and $x - y = 2$.",
        options: [
          "$x = 3, \\, y = 1$",
          "$x = 2, \\, y = 2$",
          "$x = 4, \\, y = 0$",
          "$x = 3, \\, y = 2$"
        ],
        correctAnswerIndex: 0,
        explanation: "Add the two equations:\n$$2x = 6 \\implies x = 3$$\nSubstitute $x = 3$ into the first equation:\n$$3 + y = 4 \\implies y = 1$$"
      },
      {
        id: "m7-q10",
        questionText: "Series Test: Determine convergence of $\\sum_{n=1}^{\\infty} \\frac{n}{n+1}$.",
        options: [
          "Diverges (تباعدية) by Divergence Test",
          "Converges (متقاربة) by Ratio Test",
          "Converges by Integral Test",
          "Diverges by p-series test"
        ],
        correctAnswerIndex: 0,
        explanation: "Calculate the limit of the nth term:\n$$\\lim_{n \\to \\infty} a_n = \\lim_{n \\to \\infty} \\frac{n}{n+1} = 1 \\ne 0.$$\nBy the Divergence Test, since the limit is not zero, the series diverges."
      }
    ]
  },
  {
    id: "midterm-exam-8",
    title: "Midterm Exam 8 (Harder) - امتحان تدريبي 2",
    subject: "Math 2",
    description: "Difficulty rating: 9/10. An advanced practice exam covering mixed variable cancellation in partial fractions, irreducible quadratics, integral tests, Bernoulli equations, and 3x3 linear systems.",
    difficulty: "Advanced",
    estimatedTime: "35 mins",
    icon: "🔥",
    questions: [
      {
        id: "m8-q1",
        questionText: "Partial Fraction (Mixed): Decompose $\\frac{x^2+2x+1}{x(x+1)(x+2)}$.",
        options: [
          "$\\frac{1/2}{x} + \\frac{1/2}{x+2}$",
          "$\\frac{1}{x} + \\frac{1}{x+2}$",
          "$\\frac{1/2}{x} - \\frac{1/2}{x+2}$",
          "$\\frac{1}{x} - \\frac{1}{x+2}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Simplify the fraction first:\n$$\\frac{x^2+2x+1}{x(x+1)(x+2)} = \\frac{(x+1)^2}{x(x+1)(x+2)} = \\frac{x+1}{x(x+2)}$$\nNow decompose using Heaviside cover-up method:\n$$A = \\left. \\frac{x+1}{x+2} \\right|_{x=0} = \\frac{1}{2}$$\n$$B = \\left. \\frac{x+1}{x} \\right|_{x=-2} = \\frac{-1}{-2} = \\frac{1}{2}$$\nSo, the decomposition is $\\frac{1/2}{x} + \\frac{1/2}{x+2}$."
      },
      {
        id: "m8-q2",
        questionText: "Partial Fraction (Quadratic): Decompose $\\frac{x}{x^2+4}$.",
        options: [
          "It is already in simplest partial fraction form",
          "$\\frac{A}{x-2} + \\frac{B}{x+2}$",
          "$\\frac{Ax+B}{x^2+4}$ with $A=0, B=1$",
          "$\\frac{1}{x^2+4}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Since $(x^2+4)$ is an irreducible quadratic factor in the denominator and the numerator is of degree 1 (which is less than the degree of denominator), the fraction is already in its simplest partial fraction form."
      },
      {
        id: "m8-q3",
        questionText: "Series: Determine the convergence of the series $\\sum_{n=2}^{\\infty} \\frac{1}{n\\ln(n)}$.",
        options: [
          "Diverges (تباعدية) by Integral Test",
          "Converges (متقاربة) by Integral Test",
          "Converges by Ratio Test",
          "Diverges by Divergence Test"
        ],
        correctAnswerIndex: 0,
        explanation: "Apply the Integral Test. Consider $f(x) = \\frac{1}{x\\ln(x)}$:\n$$\\int_{2}^{\\infty} \\frac{1}{x\\ln(x)} \\, dx = \\left. \\ln|\\ln(x)| \\right|_{2}^{\\infty} = \\infty.$$\nSince the integral diverges, the series diverges."
      },
      {
        id: "m8-q4",
        questionText: "Separation: Solve the separable ODE $\\frac{dy}{dx} = \\frac{x}{y} e^x$.",
        options: [
          "$y^2 = 2(x-1)e^x + C$",
          "$y^2 = 2x e^x + C$",
          "$y = (x-1)e^x + C$",
          "$y^2 = (x-1)e^x + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate the variables:\n$$y \\, dy = x e^x \\, dx$$\nIntegrate both sides (using integration by parts for the right side):\n$$\\frac{1}{2}y^2 = (x-1)e^x + C_1 \\implies y^2 = 2(x-1)e^x + C$$"
      },
      {
        id: "m8-q5",
        questionText: "Homogeneous: Solve the homogeneous equation $\\frac{dy}{dx} = \\frac{xy}{x^2+y^2}$.",
        options: [
          "$\\ln|y| - \\frac{x^2}{2y^2} = C$",
          "$\\ln|y| + \\frac{x^2}{2y^2} = C$",
          "$\\ln|x| - \\frac{y^2}{2x^2} = C$",
          "$y^2 = x^2 \\ln|x| + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Set $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$$v + x\\frac{dv}{dx} = \\frac{v}{1+v^2} \\implies x\\frac{dv}{dx} = -\\frac{v^3}{1+v^2}$$\nSeparating variables:\n$$\\frac{1+v^2}{v^3} \\, dv = -\\frac{1}{x} \\, dx \\implies -\\frac{1}{2v^2} + \\ln|v| = -\\ln|x| + C$$\nSubstitute $v = \\frac{y}{x}$:\n$$-\\frac{x^2}{2y^2} + \\ln|y| - \\ln|x| = -\\ln|x| + C \\implies \\ln|y| - \\frac{x^2}{2y^2} = C$$"
      },
      {
        id: "m8-q6",
        questionText: "Linear: Solve the ODE $\\frac{dy}{dx} + 2y = \\frac{1}{x}$.",
        options: [
          "$y = e^{-2x} \\int \\frac{e^{2x}}{x} \\, dx + C e^{-2x}$",
          "$y = e^{2x} \\int \\frac{e^{-2x}}{x} \\, dx + C e^{2x}$",
          "$y = e^{-2x} \\ln|x| + C$",
          "$y = \\frac{\\ln|x|}{2} + C e^{-2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Integrating factor is $\\mu(x) = e^{2x}$:\n$$\\frac{d}{dx}(y e^{2x}) = \\frac{e^{2x}}{x} \\implies y e^{2x} = \\int \\frac{e^{2x}}{x} \\, dx + C$$\nDividing by $e^{2x}$ gives: $y = e^{-2x} \\int \\frac{e^{2x}}{x} \\, dx + C e^{-2x}$."
      },
      {
        id: "m8-q7",
        questionText: "Bernoulli: Solve the ODE $\\frac{dy}{dx} + y = y^3$.",
        options: [
          "$y^2 = \\frac{1}{1 + C e^{2x}}$",
          "$y^2 = \\frac{1}{1 - C e^{2x}}$",
          "$y^2 = 1 + C e^{2x}$",
          "$y = 1 + C e^{2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $u = y^{-2}$ to get $u' - 2u = -2$, which has general solution $u = 1 + C e^{2x}$. Replacing $u$ with $y^{-2}$ yields $y^2 = \\frac{1}{1 + C e^{2x}}$."
      },
      {
        id: "m8-q8",
        questionText: "Second Order: Solve the ODE $y'' + 9y = 0$.",
        options: [
          "$y = C_1 \\cos(3x) + C_2 \\sin(3x)$",
          "$y = C_1 e^{3x} + C_2 e^{-3x}$",
          "$y = C_1 \\cos(9x) + C_2 \\sin(9x)$",
          "$y = C_1 e^{9x} + C_2 e^{-9x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 + 9 = 0 \\implies r = \\pm 3i$.\nThe general solution is $y = C_1 \\cos(3x) + C_2 \\sin(3x)$."
      },
      {
        id: "m8-q9",
        questionText: "System: Solve the $3 \\times 3$ linear system: $2x+y+z=5$, $x-y+z=1$, $x+y-z=3$.",
        options: [
          "$x = 2, \\, y = 1, \\, z = 0$",
          "$x = 1, \\, y = 1, \\, z = 2$",
          "$x = 2, \\, y = 2, \\, z = 0$",
          "$x = 1, \\, y = 2, \\, z = 1$"
        ],
        correctAnswerIndex: 0,
        explanation: "Add Eq2 and Eq3:\n$$(x-y+z) + (x+y-z) = 1 + 3 \\implies 2x = 4 \\implies x = 2.$$\nSubstitute $x = 2$ into Eq1 plus Eq2: $3x + 2z = 6 \\implies 6 + 2z = 6 \\implies z = 0$.\nThen substitute $x=2, z=0$ into Eq1:\n$$2(2) + y + 0 = 5 \\implies y = 1.$$\nSo the solution is $x=2, y=1, z=0$."
      },
      {
        id: "m8-q10",
        questionText: "Series: Determine the convergence of the alternating series $\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n}$.",
        options: [
          "Converges conditionally (تقارب مشروط)",
          "Converges absolutely (تقارب مطلق)",
          "Diverges (تباعدية)",
          "Converges to 1"
        ],
        correctAnswerIndex: 0,
        explanation: "The series $\\sum \\frac{(-1)^n}{n}$ converges by the Alternating Series Test since $\\lim_{n \\to \\infty} \\frac{1}{n} = 0$ and the terms decrease. However, the absolute value series is the harmonic series $\\sum \\frac{1}{n}$, which diverges. Thus, it converges conditionally."
      }
    ]
  },
  {
    id: "midterm-exam-9",
    title: "Midterm Exam 9 (End of Level - Extremely Hard) - امتحان تدريبي 3",
    subject: "Math 2",
    description: "Difficulty rating: 10/10. The ultimate practice exam covering advanced polynomial coefficients matching, arithmetico-geometric series sums, separation with complex integrals, homogeneous forms, cotangent linear ODEs, complex root 2nd order equations, and 3-variable substitution systems.",
    difficulty: "Advanced",
    estimatedTime: "40 mins",
    icon: "🔥",
    questions: [
      {
        id: "m9-q1",
        questionText: "Partial Fraction (Repeated + linear mix): Decompose $\\frac{3x^2+2x+1}{(x-1)^2(x+1)}$.",
        options: [
          "$\\frac{5/2}{x-1} + \\frac{3}{(x-1)^2} + \\frac{1/2}{x+1}$",
          "$\\frac{3/2}{x-1} + \\frac{3}{(x-1)^2} + \\frac{1/2}{x+1}$",
          "$\\frac{5/2}{x-1} + \\frac{3}{(x-1)^2} - \\frac{1/2}{x+1}$",
          "$\\frac{1/2}{x-1} + \\frac{3}{(x-1)^2} + \\frac{5/2}{x+1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Setup:\n$$\\frac{3x^2+2x+1}{(x-1)^2(x+1)} = \\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{x+1}$$\nUsing Heaviside cover-up method:\n$$B = \\left. \\frac{3x^2+2x+1}{x+1} \\right|_{x=1} = \\frac{6}{2} = 3$$\n$$C = \\left. \\frac{3x^2+2x+1}{(x-1)^2} \\right|_{x=-1} = \\frac{2}{4} = \\frac{1}{2}$$\nEquating the $x^2$ coefficient on both sides:\n$$A + C = 3 \\implies A + \\frac{1}{2} = 3 \\implies A = \\frac{5}{2}$$\nSo the decomposition is $\\frac{5/2}{x-1} + \\frac{3}{(x-1)^2} + \\frac{1/2}{x+1}$."
      },
      {
        id: "m9-q2",
        questionText: "Partial Fraction (Quadratic): Decompose $\\frac{2x}{x^2+1}$.",
        options: [
          "It is already in simplest partial fraction form",
          "$\\frac{1}{x-i} + \\frac{1}{x+i}$",
          "$\\frac{A}{x^2+1}$",
          "$\\frac{1}{x^2+1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Since $(x^2+1)$ is an irreducible quadratic factor and the numerator is of degree 1 (linear), it cannot be decomposed further over the real numbers."
      },
      {
        id: "m9-q3",
        questionText: "Series: Find the sum of the arithmetico-geometric series $\\sum_{n=1}^{\\infty} \\frac{n}{2^n}$.",
        options: [
          "$2$",
          "$1.5$",
          "$3$",
          "$1$"
        ],
        correctAnswerIndex: 0,
        explanation: "Let $S = \\sum_{n=1}^{\\infty} \\frac{n}{2^n} = \\frac{1}{2} + \\frac{2}{4} + \\frac{3}{8} + \\dots$\nMultiply by $1/2$:\n$$\\frac{1}{2}S = \\frac{1}{4} + \\frac{2}{8} + \\frac{3}{16} + \\dots$$\nSubtract the two equations:\n$$S - \\frac{1}{2}S = \\frac{1}{2} + \\left(\\frac{2}{4}-\\frac{1}{4}\\right) + \\left(\\frac{3}{8}-\\frac{2}{8}\\right) + \\dots$$\n$$\\frac{1}{2}S = \\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + \\dots = 1 \\implies S = 2.$$"
      },
      {
        id: "m9-q4",
        questionText: "Separation: Solve the ODE $\\frac{dy}{dx} = \\frac{y(1+y^2)}{x^2}$.",
        options: [
          "$\\ln\\left(\\frac{y}{\\sqrt{1+y^2}}\\right) = -\\frac{1}{x} + C$",
          "$\\ln(y(1+y^2)) = -\\frac{1}{x} + C$",
          "$\\arctan(y) = -\\frac{1}{x} + C$",
          "$\\ln(y) + \\arctan(y) = -\\frac{1}{x} + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate variables:\n$$\\frac{1}{y(1+y^2)} \\, dy = x^{-2} \\, dx$$\nDecompose the left side using partial fractions:\n$$\\frac{1}{y(1+y^2)} = \\frac{1}{y} - \\frac{y}{1+y^2}$$\nIntegrate both sides:\n$$\\ln|y| - \\frac{1}{2}\\ln(1+y^2) = -\\frac{1}{x} + C_1 \\implies \\ln\\left(\\frac{y}{\\sqrt{1+y^2}}\\right) = -\\frac{1}{x} + C$$"
      },
      {
        id: "m9-q5",
        questionText: "Homogeneous: Solve the ODE $\\frac{dy}{dx} = \\frac{y^2}{x^2} + \\frac{y}{x}$.",
        options: [
          "$y = -\\frac{x}{\\ln|x| + C}$",
          "$y = \\frac{x}{\\ln|x| + C}$",
          "$y = -\\frac{1}{\\ln|x| + C}$",
          "$y = -x \\ln|x| + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$$v + x\\frac{dv}{dx} = v^2 + v \\implies x\\frac{dv}{dx} = v^2$$\nSeparating variables:\n$$v^{-2} \\, dv = \\frac{1}{x} \\, dx \\implies -v^{-1} = \\ln|x| + C$$\nSubstitute $v = \\frac{y}{x}$:\n$$-\\frac{x}{y} = \\ln|x| + C \\implies y = -\\frac{x}{\\ln|x| + C}$$$"
      },
      {
        id: "m9-q6",
        questionText: "Linear: Solve the cotangent linear ODE $\\frac{dy}{dx} + y\\cot(x) = 2\\cos(x)$.",
        options: [
          "$y = -\\frac{\\cos(2x)}{2\\sin(x)} + \\frac{C}{\\sin(x)}$",
          "$y = -\\frac{\\cos(2x)}{2} + C$",
          "$y = \\frac{\\sin(2x)}{2\\sin(x)} + C$",
          "$y = -\\frac{\\cos(2x)}{2\\sin(x)} + C\\sin(x)$"
        ],
        correctAnswerIndex: 0,
        explanation: "Integrating factor is $\\mu(x) = e^{\\int \\cot(x) dx} = e^{\\ln|\\sin(x)|} = \\sin(x)$. Multiply both sides:\n$$\\frac{d}{dx}(y \\sin(x)) = 2\\sin(x)\\cos(x) = \\sin(2x)$$\nIntegrate both sides:\n$$y \\sin(x) = -\\frac{1}{2}\\cos(2x) + C \\implies y = -\\frac{\\cos(2x)}{2\\sin(x)} + \\frac{C}{\\sin(x)}$$"
      },
      {
        id: "m9-q7",
        questionText: "Bernoulli: Solve the ODE $\\frac{dy}{dx} + y = x y^3$.",
        options: [
          "$y^2 = \\frac{1}{x + 1/2 + C e^{2x}}$",
          "$y^2 = \\frac{1}{x - 1/2 + C e^{2x}}$",
          "$y^2 = x + 1/2 + C e^{2x}$",
          "$y^2 = \\frac{1}{x + 1/2 + C e^{-2x}}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $u = y^{-2} \\implies u' - 2u = -2x$. The general solution to this linear equation is $u = x + 1/2 + C e^{2x}$. Replacing $u$ with $y^{-2}$ gives $y^2 = \\frac{1}{x + 1/2 + C e^{2x}}$."
      },
      {
        id: "m9-q8",
        questionText: "Second Order: Solve the differential equation $y'' - 2y' + 5y = 0$.",
        options: [
          "$y = e^x (C_1 \\cos(2x) + C_2 \\sin(2x))$",
          "$y = e^{-x} (C_1 \\cos(2x) + C_2 \\sin(2x))$",
          "$y = e^{2x} (C_1 \\cos(x) + C_2 \\sin(x))$",
          "$y = C_1 e^x + C_2 e^{2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 - 2r + 5 = 0 \\implies r = \\frac{2 \\pm \\sqrt{4-20}}{2} = 1 \\pm 2i$.\nThe roots are complex with $\\alpha = 1$ and $\\beta = 2$, yielding $y = e^x (C_1 \\cos(2x) + C_2 \\sin(2x))$."
      },
      {
        id: "m9-q9",
        questionText: "System: Solve the $3 \\times 3$ linear system: $x+y+z=6$, $2x-y+z=3$, $x+2y-z=2$.",
        options: [
          "$x = 1, \\, y = 2, \\, z = 3$",
          "$x = 2, \\, y = 1, \\, z = 3$",
          "$x = 1, \\, y = 1, \\, z = 4$",
          "$x = 2, \\, y = 2, \\, z = 2$"
        ],
        correctAnswerIndex: 0,
        explanation: "Subtracting Eq1 from Eq2:\n$$(2x-y+z) - (x+y+z) = 3 - 6 \\implies x - 2y = -3 \\implies x = 2y - 3.$$\nAdding Eq1 and Eq3:\n$$(x+y+z) + (x+2y-z) = 6 + 2 \\implies 2x + 3y = 8.$$\nSubstitute $x = 2y - 3$:\n$$2(2y-3) + 3y = 8 \\implies 7y - 6 = 8 \\implies 7y = 14 \\implies y = 2.$$\nSince $y = 2$, $x = 2(2) - 3 = 1$.\nThen $1 + 2 + z = 6 \\implies z = 3$."
      },
      {
        id: "m9-q10",
        questionText: "Series Test: State the convergence conditions for the general p-series $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$.",
        options: [
          "Converges if $p > 1$, diverges if $p \\le 1$",
          "Converges if $p < 1$, diverges if $p \\ge 1$",
          "Converges for all $p$",
          "Diverges for all $p$"
        ],
        correctAnswerIndex: 0,
        explanation: "The p-series $\\sum \\frac{1}{n^p}$ converges if and only if $p > 1$. For $p \\le 1$ (including the harmonic series $p=1$), the series diverges."
      }
    ]
  },
  {
    id: "midterm-exam-10",
    title: "Midterm Exam 10 (Very Hard) - امتحان 1 (صعب جدًا)",
    subject: "Math 2",
    description: "Difficulty rating: 9/10. High-level practice exam covering partial fractions, series convergence, separable and homogeneous ODEs, linear equations, Bernoulli form, 2nd order repeated roots, and 3-variable systems.",
    difficulty: "Advanced",
    estimatedTime: "45 mins",
    icon: "🔥",
    questions: [
      {
        id: "m10-q1",
        questionText: "Partial Fraction: Decompose $\\frac{3x+5}{(x-1)(x+2)}$.",
        options: [
          "$\\frac{8/3}{x-1} + \\frac{1/3}{x+2}$",
          "$\\frac{8/3}{x-1} - \\frac{1/3}{x+2}$",
          "$\\frac{5/3}{x-1} + \\frac{4/3}{x+2}$",
          "$\\frac{1/3}{x-1} + \\frac{8/3}{x+2}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Using Heaviside cover-up method:\n$$A = \\left. \\frac{3x+5}{x+2} \\right|_{x=1} = \\frac{8}{3}$$\n$$B = \\left. \\frac{3x+5}{x-1} \\right|_{x=-2} = \\frac{-1}{-3} = \\frac{1}{3}$$\nSo the decomposition is $\\frac{8/3}{x-1} + \\frac{1/3}{x+2}$."
      },
      {
        id: "m10-q2",
        questionText: "Partial Fraction (Repeated): Decompose $\\frac{1}{(x-1)^2}$.",
        options: [
          "It is already in simplest partial fraction form",
          "$\\frac{1}{x-1} + \\frac{1}{(x-1)^2}$",
          "$\\frac{1}{x-1} - \\frac{1}{(x-1)^2}$",
          "$\\frac{A}{x-1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Since the denominator consists of a single repeated linear factor and the numerator is a constant (degree 0, which is less than the denominator's degree of 2), it cannot be decomposed further over the real numbers. It is already in simplest form."
      },
      {
        id: "m10-q3",
        questionText: "Series: Determine the convergence of the series $\\sum_{n=1}^{\\infty} \\frac{1}{n^2+1}$.",
        options: [
          "Converges (متقاربة) by Limit Comparison Test with $\\sum \\frac{1}{n^2}$",
          "Diverges (تباعدية) by Divergence Test",
          "Diverges by Comparison with $\\sum \\frac{1}{n}$",
          "Converges by Ratio Test"
        ],
        correctAnswerIndex: 0,
        explanation: "Compare with the convergent p-series $\\sum_{n=1}^{\\infty} \\frac{1}{n^2}$ ($p = 2 > 1$):\n$$\\lim_{n\\to\\infty} \\frac{1/(n^2+1)}{1/n^2} = \\lim_{n\\to\\infty} \\frac{n^2}{n^2+1} = 1 > 0$$\nSince the limit is finite and positive, the series converges."
      },
      {
        id: "m10-q4",
        questionText: "Separation: Solve the homogeneous equation $\\frac{dy}{dx} = \\frac{x-y}{x+y}$ by separating variables after substitution.",
        options: [
          "$y^2 + 2xy - x^2 = C$",
          "$y^2 - 2xy - x^2 = C$",
          "$y^2 + 2xy + x^2 = C$",
          "$y = x\\ln|x| + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$:\n$$v + x\\frac{dv}{dx} = \\frac{1-v}{1+v} \\implies x\\frac{dv}{dx} = \\frac{1-v}{1+v} - v = \\frac{1-2v-v^2}{1+v}$$\nSeparating variables:\n$$\\frac{1+v}{v^2+2v-1}\\,dv = -\\frac{1}{x}\\,dx \\implies \\frac{1}{2}\\ln|v^2+2v-1| = -\\ln|x| + C_1$$\n$$\\ln|v^2+2v-1| = \\ln(x^{-2}) + C_2 \\implies v^2+2v-1 = \\frac{C}{x^2}$$\nSubstituting $v = y/x$:\n$$\\frac{y^2}{x^2} + \\frac{2y}{x} - 1 = \\frac{C}{x^2} \\implies y^2 + 2xy - x^2 = C$$"
      },
      {
        id: "m10-q5",
        questionText: "Homogeneous: Solve the homogeneous equation $\\frac{dy}{dx} = \\frac{xy}{x^2+y^2}$.",
        options: [
          "$\\ln|y| - \\frac{x^2}{2y^2} = C$",
          "$\\ln|y| + \\frac{x^2}{2y^2} = C$",
          "$\\ln|x| - \\frac{y^2}{2x^2} = C$",
          "$y^2 = x^2\\ln|x| + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $y = vx \\implies v + x\\frac{dv}{dx} = \\frac{v}{1+v^2} \\implies x\\frac{dv}{dx} = -\\frac{v^3}{1+v^2}$.\nSeparating variables:\n$$\\frac{1+v^2}{v^3}\\,dv = -\\frac{1}{x}\\,dx \\implies -\\frac{1}{2v^2} + \\ln|v| = -\\ln|x| + C$$\nSubstituting $v = y/x$:\n$$-\\frac{x^2}{2y^2} + \\ln|y| - \\ln|x| = -\\ln|x| + C \\implies \\ln|y| - \\frac{x^2}{2y^2} = C$$"
      },
      {
        id: "m10-q6",
        questionText: "Linear: Solve the differential equation $\\frac{dy}{dx} + y\\tan(x) = \\sin(x)$.",
        options: [
          "$y = \\cos(x)\\ln|\\sec(x)| + C\\cos(x)$",
          "$y = \\sin(x)\\ln|\\sec(x)| + C\\sin(x)$",
          "$y = \\cos(x)\\tan(x) + C$",
          "$y = \\ln|\\sec(x)| + C\\cos(x)$"
        ],
        correctAnswerIndex: 0,
        explanation: "Integrating factor is $\\mu(x) = e^{\\int \\tan(x)\\,dx} = e^{\\ln|\\sec(x)|} = \\sec(x)$.\nMultiply both sides:\n$$\\frac{d}{dx}(y\\sec(x)) = \\sin(x)\\sec(x) = \\tan(x)$$\nIntegrate both sides:\n$$y\\sec(x) = \\ln|\\sec(x)| + C \\implies y = \\cos(x)\\ln|\\sec(x)| + C\\cos(x)$$"
      },
      {
        id: "m10-q7",
        questionText: "Bernoulli: Solve the differential equation $\\frac{dy}{dx} + y = xy^2$.",
        options: [
          "$y = \\frac{1}{x + 1 + Ce^x}$",
          "$y = \\frac{1}{x - 1 + Ce^x}$",
          "$y = x + 1 + Ce^x$",
          "$y = \\frac{1}{x + 1 + Ce^{-x}}$"
        ],
        correctAnswerIndex: 0,
        explanation: "This is a Bernoulli equation. Divide by $y^2$:\n$$y^{-2}\\frac{dy}{dx} + y^{-1} = x$$\nSubstitute $u = y^{-1} \\implies u' - u = -x$.\nIntegrating factor is $e^{-x}$:\n$$\\frac{d}{dx}(ue^{-x}) = -xe^{-x} \\implies ue^{-x} = xe^{-x} + e^{-x} + C \\implies u = x + 1 + Ce^x$$\nSince $u = y^{-1}$, we have $y = \\frac{1}{x + 1 + Ce^x}$."
      },
      {
        id: "m10-q8",
        questionText: "Second Order: Solve the homogeneous equation $y'' - 4y' + 4y = 0$.",
        options: [
          "$y = (C_1 + C_2 x)e^{2x}$",
          "$y = C_1 e^{2x} + C_2 e^{-2x}$",
          "$y = (C_1 \\cos(2x) + C_2 \\sin(2x))e^{2x}$",
          "$y = C_1 e^{2x} + C_2 x e^{-2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 - 4r + 4 = 0 \\implies (r-2)^2 = 0 \\implies r = 2$ (repeated root).\nThus, the general solution is $y = (C_1 + C_2 x)e^{2x}$."
      },
      {
        id: "m10-q9",
        questionText: "System: Solve the $3\\times 3$ linear system: $x+y+z=6$, $x-y+z=2$, $2x+y-z=3$.",
        options: [
          "$x = 5/3, \\, y = 2, \\, z = 7/3$",
          "$x = 2, \\, y = 2, \\, z = 2$",
          "$x = 1, \\, y = 2, \\, z = 3$",
          "$x = 5/3, \\, y = 1, \\, z = 10/3$"
        ],
        correctAnswerIndex: 0,
        explanation: "Adding Eq1 and Eq2:\n$$(x+y+z) + (x-y+z) = 6 + 2 \\implies 2x + 2z = 8 \\implies x + z = 4 \\implies z = 4 - x$$\nSubtracting Eq2 from Eq1:\n$$(x+y+z) - (x-y+z) = 6 - 2 \\implies 2y = 4 \\implies y = 2$$\nSubstitute $y=2$ into Eq3:\n$$2x + 2 - z = 3 \\implies 2x - z = 1$$\nSubstitute $z = 4 - x$:\n$$2x - (4 - x) = 1 \\implies 3x = 5 \\implies x = 5/3$$\nThen $z = 4 - 5/3 = 7/3$. The solution is $x=5/3, y=2, z=7/3$."
      }
    ]
  },
  {
    id: "midterm-exam-11",
    title: "Midterm Exam 11 (Harder) - امتحان 2 (أصعب)",
    subject: "Math 2",
    description: "Difficulty rating: 9.3/10. Even harder practice exam covering factored linear decompositions, irreducible quadratic partial fractions, integral test convergence, separable equations, homogeneous systems, linear equations with integrating factors, Bernoulli equations, 2nd order complex roots, and 3x3 systems.",
    difficulty: "Advanced",
    estimatedTime: "50 mins",
    icon: "🔥",
    questions: [
      {
        id: "m11-q1",
        questionText: "Partial Fraction: Decompose $\\frac{2x^2+3x+1}{x(x+1)(x+2)}$.",
        options: [
          "$\\frac{1/2}{x} + \\frac{3/2}{x+2}$",
          "$\\frac{1}{x} + \\frac{1}{x+2}$",
          "$\\frac{1/2}{x} - \\frac{3/2}{x+2}$",
          "$\\frac{1/2}{x} + \\frac{1/2}{x+1} + \\frac{1}{x+2}$"
        ],
        correctAnswerIndex: 0,
        explanation: "First, simplify the numerator by factoring:\n$$2x^2 + 3x + 1 = (2x+1)(x+1)$$\nSo the expression is:\n$$\\frac{(2x+1)(x+1)}{x(x+1)(x+2)} = \\frac{2x+1}{x(x+2)}$$\nNow decompose using cover-up method:\n$$A = \\left. \\frac{2x+1}{x+2} \\right|_{x=0} = \\frac{1}{2}$$\n$$B = \\left. \\frac{2x+1}{x} \\right|_{x=-2} = \\frac{-3}{-2} = \\frac{3}{2}$$\nSo the decomposition is $\\frac{1/2}{x} + \\frac{3/2}{x+2}$."
      },
      {
        id: "m11-q2",
        questionText: "Quadratic PF: Decompose $\\frac{x}{x^2+4}$.",
        options: [
          "It is already in simplest partial fraction form",
          "$\\frac{1/2}{x-2i} + \\frac{1/2}{x+2i}$",
          "$\\frac{Ax+B}{x^2+4}$ with $A=1, B=1$",
          "$\\frac{1}{x^2+4}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Since $x^2+4$ is irreducible over the real numbers and the numerator's degree (1) is less than the denominator's degree (2), it is already in simplest form."
      },
      {
        id: "m11-q3",
        questionText: "Series: Determine the convergence of the series $\\sum_{n=2}^{\\infty} \\frac{1}{n\\ln(n)}$.",
        options: [
          "Diverges (تباعدية) by the Integral Test",
          "Converges (متقاربة) by the Integral Test",
          "Converges by the Ratio Test",
          "Diverges by the Divergence Test"
        ],
        correctAnswerIndex: 0,
        explanation: "Use the Integral Test with $f(x) = \\frac{1}{x\\ln(x)}$:\n$$\\int_{2}^{\\infty} \\frac{1}{x\\ln(x)}\\,dx = \\left[ \\ln|\\ln(x)| \\right]_{2}^{\\infty} = \\infty$$\nSince the integral diverges, the series diverges."
      },
      {
        id: "m11-q4",
        questionText: "Separation: Solve the ODE $\\frac{dy}{dx} = xy^2$.",
        options: [
          "$y = -\\frac{2}{x^2 + C}$",
          "$y = Ce^{\\frac{1}{2}x^2}$",
          "$y = -\\frac{1}{\\frac{1}{2}x^2 + C}$",
          "$y = \\frac{2}{x^2 + C}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate variables:\n$$y^{-2}\\,dy = x\\,dx \\implies -y^{-1} = \\frac{1}{2}x^2 + C_1 \\implies y = -\\frac{1}{\\frac{1}{2}x^2 + C_1} = -\\frac{2}{x^2 + C}$$"
      },
      {
        id: "m11-q5",
        questionText: "Homogeneous: Solve the homogeneous ODE $\\frac{dy}{dx} = \\frac{x+y}{x-y}$.",
        options: [
          "$\\arctan(y/x) = \\ln\\sqrt{x^2+y^2} + C$",
          "$\\arctan(y/x) = \\ln(x^2+y^2) + C$",
          "$y^2 - 2xy - x^2 = C$",
          "$y = x\\ln|x| + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $y = vx \\implies v + x\\frac{dv}{dx} = \\frac{1+v}{1-v} \\implies x\\frac{dv}{dx} = \\frac{1+v^2}{1-v}$.\nSeparating variables:\n$$\\frac{1-v}{1+v^2}\\,dv = \\frac{dx}{x} \\implies \\int \\frac{1}{1+v^2}\\,dv - \\frac{1}{2}\\int \\frac{2v}{1+v^2}\\,dv = \\ln|x| + C$$\n$$\\arctan(v) - \\frac{1}{2}\\ln(1+v^2) = \\ln|x| + C \\implies \\arctan(v) = \\ln|x\\sqrt{1+v^2}| + C$$\nSubstituting $v = y/x$:\n$$\\arctan(y/x) = \\ln\\sqrt{x^2+y^2} + C$$"
      },
      {
        id: "m11-q6",
        questionText: "Linear: Solve the ODE $\\frac{dy}{dx} + 2y = \\frac{1}{x}$.",
        options: [
          "$y = e^{-2x} \\int \\frac{e^{2x}}{x}\\,dx + Ce^{-2x}$",
          "$y = e^{2x} \\int \\frac{e^{-2x}}{x}\\,dx + Ce^{2x}$",
          "$y = e^{-2x}\\ln|x| + Ce^{-2x}$",
          "$y = \\frac{\\ln|x|}{2} + Ce^{-2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Integrating factor is $\\mu(x) = e^{\\int 2\\,dx} = e^{2x}$.\nMultiply both sides:\n$$\\frac{d}{dx}(ye^{2x}) = \\frac{e^{2x}}{x} \\implies ye^{2x} = \\int \\frac{e^{2x}}{x}\\,dx + C \\implies y = e^{-2x}\\int \\frac{e^{2x}}{x}\\,dx + Ce^{-2x}$$"
      },
      {
        id: "m11-q7",
        questionText: "Bernoulli: Solve the ODE $\\frac{dy}{dx} + y = y^3$.",
        options: [
          "$y^2 = \\frac{1}{1 + Ce^{2x}}$",
          "$y^2 = \\frac{1}{1 - Ce^{2x}}$",
          "$y^2 = 1 + Ce^{2x}$",
          "$y = \\frac{1}{1 + Ce^{2x}}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $u = y^{-2}$ to get $u' - 2u = -2$. The solution is $u = 1 + Ce^{2x}$. Replacing $u$ with $y^{-2}$ yields $y^2 = \\frac{1}{1 + Ce^{2x}}$."
      },
      {
        id: "m11-q8",
        questionText: "Second Order: Solve the ODE $y'' + 9y = 0$.",
        options: [
          "$y = C_1 \\cos(3x) + C_2 \\sin(3x)$",
          "$y = C_1 e^{3x} + C_2 e^{-3x}$",
          "$y = C_1 \\cos(9x) + C_2 \\sin(9x)$",
          "$y = (C_1 + C_2 x)e^{3x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 + 9 = 0 \\implies r = \\pm 3i$. Since the roots are complex conjugate $\\alpha \\pm i\\beta$ with $\\alpha=0$ and $\\beta=3$, the general solution is $y = C_1 \\cos(3x) + C_2 \\sin(3x)$."
      },
      {
        id: "m11-q9",
        questionText: "System: Solve the $3\\times 3$ linear system: $2x+y+z=5$, $x-y+z=1$, $x+y-z=3$.",
        options: [
          "$x = 2, \\, y = 1, \\, z = 0$",
          "$x = 1, \\, y = 1, \\, z = 2$",
          "$x = 2, \\, y = 2, \\, z = 0$",
          "$x = 1, \\, y = 2, \\, z = 1$"
        ],
        correctAnswerIndex: 0,
        explanation: "Adding Eq2 and Eq3:\n$$(x-y+z) + (x+y-z) = 1 + 3 \\implies 2x = 4 \\implies x = 2$$\nSubstitute $x = 2$ into Eq1 & Eq2:\n$$2(2) + y + z = 5 \\implies y + z = 1$$\n$$2 - y + z = 1 \\implies z - y = -1$$\nAdding these gives $2z = 0 \\implies z = 0 \\implies y = 1$. The solution is $x=2, y=1, z=0$."
      }
    ]
  },
  {
    id: "midterm-exam-12",
    title: "Midterm Exam 12 (Extreme) - امتحان 3 (نهاية الصعوبة)",
    subject: "Math 2",
    description: "Difficulty rating: 9.7/10. Extremely challenging practice exam covering mixed repeated quadratic partial fractions, ratio test divergence, complex separable integrals, homogeneous equations, cotangent linear ODEs, Bernoulli, 2nd order complex conjugate roots, and heavy 3x3 systems.",
    difficulty: "Advanced",
    estimatedTime: "60 mins",
    icon: "🔥",
    questions: [
      {
        id: "m12-q1",
        questionText: "Partial Fraction (Repeated + linear mix): Decompose $\\frac{3x^2+2x+1}{(x-1)^2(x+1)}$.",
        options: [
          "$\\frac{5/2}{x-1} + \\frac{3}{(x-1)^2} + \\frac{1/2}{x+1}$",
          "$\\frac{3/2}{x-1} + \\frac{3}{(x-1)^2} + \\frac{1/2}{x+1}$",
          "$\\frac{5/2}{x-1} + \\frac{3}{(x-1)^2} - \\frac{1/2}{x+1}$",
          "$\\frac{1/2}{x-1} + \\frac{3}{(x-1)^2} + \\frac{5/2}{x+1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Setup:\n$$\\frac{3x^2+2x+1}{(x-1)^2(x+1)} = \\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{C}{x+1}$$\nUsing cover-up:\n$$B = \\left. \\frac{3x^2+2x+1}{x+1} \\right|_{x=1} = \\frac{6}{2} = 3$$\n$$C = \\left. \\frac{3x^2+2x+1}{(x-1)^2} \\right|_{x=-1} = \\frac{2}{4} = \\frac{1}{2}$$\nEquating the $x^2$ coefficient on both sides:\n$$A + C = 3 \\implies A + 1/2 = 3 \\implies A = 5/2$$\nSo the decomposition is $\\frac{5/2}{x-1} + \\frac{3}{(x-1)^2} + \\frac{1/2}{x+1}$."
      },
      {
        id: "m12-q2",
        questionText: "Partial Fraction (Quadratic): Decompose $\\frac{2x}{x^2+1}$.",
        options: [
          "It is already in simplest partial fraction form",
          "$\\frac{1}{x-i} + \\frac{1}{x+i}$",
          "$\\frac{A}{x^2+1}$",
          "$\\frac{1}{x^2+1}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Since the denominator $x^2+1$ is irreducible over the reals and the numerator has degree 1, it cannot be decomposed further over the real numbers. It is already in simplest form."
      },
      {
        id: "m12-q3",
        questionText: "Series: Determine the convergence of the series $\\sum_{n=1}^{\\infty} \\frac{2^n}{n^2}$.",
        options: [
          "Diverges (تباعدية) by the Ratio Test",
          "Converges (متقاربة) by the Ratio Test",
          "Converges by comparison with $\\sum \\frac{1}{n^2}$",
          "Diverges by the Divergence Test"
        ],
        correctAnswerIndex: 0,
        explanation: "Applying the Ratio Test:\n$$L = \\lim_{n\\to\\infty} \\left| \\frac{2^{n+1}/(n+1)^2}{2^n/n^2} \\right| = \\lim_{n\\to\\infty} 2\\left( \\frac{n}{n+1} \\right)^2 = 2$$\nSince $L = 2 > 1$, the series diverges."
      },
      {
        id: "m12-q4",
        questionText: "Separation: Solve the ODE $\\frac{dy}{dx} = \\frac{y(1+y^2)}{x^2}$.",
        options: [
          "$\\ln\\left(\\frac{y}{\\sqrt{1+y^2}}\\right) = -\\frac{1}{x} + C$",
          "$\\ln(y(1+y^2)) = -\\frac{1}{x} + C$",
          "$\\arctan(y) = -\\frac{1}{x} + C$",
          "$\\ln(y) + \\arctan(y) = -\\frac{1}{x} + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate variables:\n$$\\frac{1}{y(1+y^2)}\\,dy = x^{-2}\\,dx$$\nDecompose the left side:\n$$\\frac{1}{y(1+y^2)} = \\frac{1}{y} - \\frac{y}{1+y^2}$$\nIntegrate both sides:\n$$\\ln|y| - \\frac{1}{2}\\ln(1+y^2) = -\\frac{1}{x} + C_1 \\implies \\ln\\left(\\frac{y}{\\sqrt{1+y^2}}\\right) = -\\frac{1}{x} + C$$"
      },
      {
        id: "m12-q5",
        questionText: "Homogeneous: Solve the homogeneous ODE $\\frac{dy}{dx} = \\frac{y^2}{x^2+xy}$.",
        options: [
          "$\\ln|y| + \\frac{y}{x} = C$",
          "$\\ln|y| - \\frac{y}{x} = C$",
          "$\\ln|x| + \\frac{y}{x} = C$",
          "$y\\ln|y| = x + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $y = vx \\implies v + x\\frac{dv}{dx} = \\frac{v^2x^2}{x^2+vx^2} = \\frac{v^2}{1+v}$.\n$$x\\frac{dv}{dx} = \\frac{v^2}{1+v} - v = \\frac{v^2 - v - v^2}{1+v} = -\\frac{v}{1+v}$$\nSeparating variables:\n$$\\frac{1+v}{v}\\,dv = -\\frac{dx}{x} \\implies \\int\\left(\\frac{1}{v}+1\\right)\\,dv = -\\ln|x| + C$$\n$$\\ln|v| + v = -\\ln|x| + C \\implies \\ln|y/x| + \\frac{y}{x} = -\\ln|x| + C \\implies \\ln|y| + \\frac{y}{x} = C$$"
      },
      {
        id: "m12-q6",
        questionText: "Linear: Solve the ODE $\\frac{dy}{dx} + y\\cot(x) = \\sin(x)$.",
        options: [
          "$y = \\frac{x}{2\\sin(x)} - \\frac{1}{2}\\cos(x) + \\frac{C}{\\sin(x)}$",
          "$y = \\frac{x}{2}\\sin(x) + C\\sin(x)$",
          "$y = -\\frac{1}{2}\\cos(x)\\sin(x) + C\\sin(x)$",
          "$y = \\frac{x}{2\\sin(x)} + C\\sin(x)$"
        ],
        correctAnswerIndex: 0,
        explanation: "Integrating factor is $\\mu(x) = e^{\\int \\cot(x)\\,dx} = e^{\\ln|\\sin(x)|} = \\sin(x)$.\nMultiply both sides:\n$$\\frac{d}{dx}(y\\sin(x)) = \\sin^2(x) = \\frac{1-\\cos(2x)}{2}$$\nIntegrate both sides:\n$$y\\sin(x) = \\frac{1}{2}x - \\frac{1}{4}\\sin(2x) + C = \\frac{1}{2}x - \\frac{1}{2}\\sin(x)\\cos(x) + C$$\nDividing by $\\sin(x)$:\n$$y = \\frac{x}{2\\sin(x)} - \\frac{1}{2}\\cos(x) + \\frac{C}{\\sin(x)}$$"
      },
      {
        id: "m12-q7",
        questionText: "Bernoulli: Solve the ODE $\\frac{dy}{dx} + \\frac{y}{x} = y^2$.",
        options: [
          "$y = \\frac{1}{x(C - \\ln|x|)}$",
          "$y = \\frac{1}{x(C + \\ln|x|)}$",
          "$y = x(C - \\ln|x|)$",
          "$y = \\frac{1}{C - x\\ln|x|}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Divide by $y^2$:\n$$y^{-2}\\frac{dy}{dx} + \\frac{1}{x}y^{-1} = 1$$\nSubstitute $u = y^{-1} \\implies u' - \\frac{1}{x}u = -1$. Integrating factor is $1/x$.\n$$\\frac{d}{dx}\\left(\\frac{u}{x}\\right) = -\\frac{1}{x} \\implies \\frac{u}{x} = -\\ln|x| + C \\implies u = x(C - \\ln|x|)$$\nSince $u = y^{-1}$, we get $y = \\frac{1}{x(C - \\ln|x|)}$."
      },
      {
        id: "m12-q8",
        questionText: "Second Order: Solve the differential equation $y'' - 2y' + 5y = 0$.",
        options: [
          "$y = e^x(C_1 \\cos(2x) + C_2 \\sin(2x))$",
          "$y = e^{-x}(C_1 \\cos(2x) + C_2 \\sin(2x))$",
          "$y = e^x(C_1 \\cos(4x) + C_2 \\sin(4x))$",
          "$y = C_1 e^{x} + C_2 e^{2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "The characteristic equation is $r^2 - 2r + 5 = 0 \\implies r = 1 \\pm 2i$. Complex roots $\\alpha \\pm i\\beta$ with $\\alpha=1, \\beta=2$ gives the general solution $y = e^x(C_1 \\cos(2x) + C_2 \\sin(2x))$."
      },
      {
        id: "m12-q9",
        questionText: "System: Solve the linear system: $x+y+z=6$, $2x+3y+z=11$, $3x+y+2z=13$.",
        options: [
          "$x = 7/3, \\, y = 4/3, \\, z = 7/3$",
          "$x = 2, \\, y = 2, \\, z = 2$",
          "$x = 1, \\, y = 2, \\, z = 3$",
          "$x = 7/3, \\, y = 1, \\, z = 8/3$"
        ],
        correctAnswerIndex: 0,
        explanation: "Subtract Eq1 from Eq2:\n$$(2x+3y+z) - (x+y+z) = 11 - 6 \\implies x + 2y = 5 \\implies x = 5 - 2y$$\nSubtract $2 \\times$ Eq1 from Eq3:\n$$(3x+y+2z) - 2(x+y+z) = 13 - 12 \\implies x - y = 1$$\nSubstitute $x = 5 - 2y$:\n$$(5 - 2y) - y = 1 \\implies 5 - 3y = 1 \\implies 3y = 4 \\implies y = 4/3$$\nThen $x = 5 - 2(4/3) = 7/3$, and $z = 6 - x - y = 6 - 7/3 - 4/3 = 7/3$. Solution is $x=7/3, y=4/3, z=7/3$."
      }
    ]
  },
  {
    id: "midterm-exam-13",
    title: "Midterm Exam 13 (Brain Breaker) - امتحان 4 (امتحان كسر دماغ)",
    subject: "Math 2",
    description: "Difficulty rating: 10/10. The ultimate practice exam covering mixed triple-term repeated quadratic partial fractions, integral test convergence, separable equations with nonlinear traps, homogeneous equations with tricky substitutions, linear equations with variable coefficients, hard Bernoulli forms, and 2nd order initial value problems.",
    difficulty: "Advanced",
    estimatedTime: "75 mins",
    icon: "🔥",
    questions: [
      {
        id: "m13-q1",
        questionText: "Partial Fraction (Mixed): Decompose $\\frac{x^2+1}{(x-1)^2(x^2+4)}$.",
        options: [
          "$\\frac{6/25}{x-1} + \\frac{2/5}{(x-1)^2} - \\frac{6x/25 + 3/25}{x^2+4}$",
          "$\\frac{6/25}{x-1} + \\frac{2/5}{(x-1)^2} + \\frac{6x/25 + 3/25}{x^2+4}$",
          "$\\frac{3/25}{x-1} + \\frac{2/5}{(x-1)^2} - \\frac{3x/25 + 6/25}{x^2+4}$",
          "$\\frac{1}{x-1} + \\frac{2/5}{(x-1)^2} - \\frac{x-1}{x^2+4}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Setup:\n$$\\frac{x^2+1}{(x-1)^2(x^2+4)} = \\frac{A}{x-1} + \\frac{B}{(x-1)^2} + \\frac{Cx+D}{x^2+4}$$\nUsing cover-up for $B$:\n$$B = \\left. \\frac{x^2+1}{x^2+4} \\right|_{x=1} = \\frac{2}{5}$$\nBy equating coefficients or substituting values, we find $A = 6/25$, $C = -6/25$, and $D = -3/25$.\nSo the decomposition is $\\frac{6/25}{x-1} + \\frac{2/5}{(x-1)^2} - \\frac{6x/25 + 3/25}{x^2+4}$."
      },
      {
        id: "m13-q2",
        questionText: "Series: Determine the convergence of the series $\\sum_{n=2}^{\\infty} \\frac{1}{n\\ln(n)}$.",
        options: [
          "Diverges (تباعدية)",
          "Converges (متقاربة)",
          "Converges absolutely",
          "Converges conditionally"
        ],
        correctAnswerIndex: 0,
        explanation: "By the Integral Test:\n$$\\int_{2}^{\\infty} \\frac{1}{x\\ln(x)}\\,dx = \\left. \\ln|\\ln(x)| \\right|_{2}^{\\infty} = \\infty$$\nTherefore, the series diverges."
      },
      {
        id: "m13-q3",
        questionText: "Separation: Solve the ODE $\\frac{dy}{dx} = \\frac{y^2-1}{x}$.",
        options: [
          "$\\frac{y-1}{y+1} = Cx^2$",
          "$\\frac{y-1}{y+1} = Cx$",
          "$\\arctan(y) = \\ln|x| + C$",
          "$y^2 - 1 = Cx^2$"
        ],
        correctAnswerIndex: 0,
        explanation: "Separate variables:\n$$\\frac{1}{y^2-1}\\,dy = \\frac{1}{x}\\,dx$$\nUse partial fraction decomposition on the left side:\n$$\\frac{1}{y^2-1} = \\frac{1}{2}\\left(\\frac{1}{y-1} - \\frac{1}{y+1}\\right)$$\nIntegrate both sides:\n$$\\frac{1}{2}\\ln\\left|\\frac{y-1}{y+1}\\right| = \\ln|x| + C_1 \\implies \\ln\\left|\\frac{y-1}{y+1}\\right| = \\ln(x^2) + C_2 \\implies \\frac{y-1}{y+1} = Cx^2$$"
      },
      {
        id: "m13-q4",
        questionText: "Homogeneous: Solve the homogeneous ODE $\\frac{dy}{dx} = \\frac{x+y}{x-y}$.",
        options: [
          "$\\arctan(y/x) = \\ln\\sqrt{x^2+y^2} + C$",
          "$\\arctan(y/x) = \\ln(x^2+y^2) + C$",
          "$y^2 + 2xy - x^2 = C$",
          "$y = x\\ln|x| + C$"
        ],
        correctAnswerIndex: 0,
        explanation: "Substitute $y = vx$. The differential equation is integrated as shown in Exam 11: $\\arctan(y/x) = \\ln\\sqrt{x^2+y^2} + C$."
      },
      {
        id: "m13-q5",
        questionText: "Linear: Solve the ODE $\\frac{dy}{dx} + \\frac{2}{x}y = x^3$.",
        options: [
          "$y = \\frac{1}{6}x^4 + \\frac{C}{x^2}$",
          "$y = \\frac{1}{6}x^4 + C$",
          "$y = \\frac{1}{4}x^4 + \\frac{C}{x^2}$",
          "$y = x^4 + \\frac{C}{x^2}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Integrating factor is $\\mu(x) = e^{\\int \\frac{2}{x}\\,dx} = e^{2\\ln|x|} = x^2$.\nMultiply both sides:\n$$\\frac{d}{dx}(yx^2) = x^5 \\implies yx^2 = \\frac{1}{6}x^6 + C \\implies y = \\frac{1}{6}x^4 + \\frac{C}{x^2}$$"
      },
      {
        id: "m13-q6",
        questionText: "Bernoulli: Solve the ODE $\\frac{dy}{dx} + y = y^3 e^x$.",
        options: [
          "$y^2 = \\frac{1}{2e^x + Ce^{2x}}$",
          "$y^2 = \\frac{1}{e^x + Ce^{2x}}$",
          "$y^2 = \\frac{1}{2e^x + Ce^{-2x}}$",
          "$y = 2e^x + Ce^{2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Divide by $y^3$:\n$$y^{-3}\\frac{dy}{dx} + y^{-2} = e^x$$\nSubstitute $u = y^{-2} \\implies u' - 2u = -2e^x$. Integrating factor is $e^{-2x}$:\n$$\\frac{d}{dx}(ue^{-2x}) = -2e^{-x} \\implies ue^{-2x} = 2e^{-x} + C \\implies u = 2e^x + Ce^{2x}$$\nReplacing $u$ with $y^{-2}$ gives $y^2 = \\frac{1}{2e^x + Ce^{2x}}$."
      },
      {
        id: "m13-q7",
        questionText: "Second Order: Solve the Initial Value Problem $y'' + 4y' + 4y = 0$, with $y(0)=1$, $y'(0)=0$.",
        options: [
          "$y = (1 + 2x)e^{-2x}$",
          "$y = e^{-2x}$",
          "$y = (1 - 2x)e^{-2x}$",
          "$y = (1 + x)e^{-2x}$"
        ],
        correctAnswerIndex: 0,
        explanation: "Characteristic equation: $r^2 + 4r + 4 = 0 \\implies (r+2)^2 = 0 \\implies r = -2$ (repeated root).\nGeneral solution: $y = (C_1 + C_2 x)e^{-2x}$.\nUsing initial conditions:\n$$y(0) = C_1 = 1$$\n$$y'(x) = C_2 e^{-2x} - 2(C_1 + C_2 x)e^{-2x} \\implies y'(0) = C_2 - 2C_1 = 0 \\implies C_2 = 2C_1 = 2$$\nThus, the particular solution is $y = (1 + 2x)e^{-2x}$."
      }
    ]
  }
];
