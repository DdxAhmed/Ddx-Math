export interface Formula {
  id: string;
  name: string;
  formula: string;
  description: string;
  category: "Limits" | "Derivatives" | "Integrals" | "Series & Sequences" | "ODEs" | "Partial Fractions";
  examples: string;
}

export const formulas: Formula[] = [
  // Limits
  {
    id: "lim-01",
    name: "L'Hôpital's Rule",
    formula: "\\lim_{x \\to c} \\frac{f(x)}{g(x)} = \\lim_{x \\to c} \\frac{f'(x)}{g'(x)}",
    description: "Used to evaluate limits of indeterminate forms $0/0$ or $\\infty/\\infty$ by taking derivatives of the numerator and denominator.",
    category: "Limits",
    examples: "\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = \\lim_{x \\to 0} \\frac{\\cos(x)}{1} = 1"
  },
  {
    id: "lim-02",
    name: "Special Limit for Exponential e",
    formula: "\\lim_{n \\to \\infty} \\left(1 + \\frac{x}{n}\\right)^n = e^x",
    description: "Fundamental limit used in defining the exponential function and calculating compound interest.",
    category: "Limits",
    examples: "\\lim_{n \\to \\infty} \\left(1 + \\frac{3}{n}\\right)^n = e^3"
  },
  
  // Derivatives
  {
    id: "der-01",
    name: "Power Rule",
    formula: "\\frac{d}{dx}[x^n] = n x^{n-1}",
    description: "The derivative of any variable raised to a constant power.",
    category: "Derivatives",
    examples: "\\frac{d}{dx}[x^5] = 5x^4"
  },
  {
    id: "der-02",
    name: "Product Rule",
    formula: "\\frac{d}{dx}[u \\cdot v] = u'v + uv'",
    description: "Used to find the derivative of a product of two functions.",
    category: "Derivatives",
    examples: "\\frac{d}{dx}[x e^x] = (1)e^x + x(e^x) = e^x(1+x)"
  },
  {
    id: "der-03",
    name: "Chain Rule",
    formula: "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)",
    description: "Used to find the derivative of composite functions.",
    category: "Derivatives",
    examples: "\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2) \\cdot 2x = 2x\\cos(x^2)"
  },

  // Integrals
  {
    id: "int-01",
    name: "Integration by Parts",
    formula: "\\int u \\, dv = u v - \\int v \\, du",
    description: "Used to integrate the product of two functions, derived from the product rule of differentiation.",
    category: "Integrals",
    examples: "\\int x \\cos(x) \\, dx = x \\sin(x) - \\int \\sin(x) \\, dx = x \\sin(x) + \\cos(x) + C"
  },
  {
    id: "int-02",
    name: "Gaussian Integral",
    formula: "\\int_{-\\infty}^{\\infty} e^{-x^2} \\, dx = \\sqrt{\\pi}",
    description: "A famous definite integral representing the area under the normal distribution curve.",
    category: "Integrals",
    examples: "\\int_{0}^{\\infty} e^{-x^2} \\, dx = \\frac{\\sqrt{\\pi}}{2}"
  },
  {
    id: "int-03",
    name: "Trigonometric Substitution (a^2 - x^2)",
    formula: "x = a \\sin(\\theta) \\implies dx = a \\cos(\\theta) \\, d\\theta",
    description: "Simplifies integrals containing terms like $\\sqrt{a^2 - x^2}$ using the trigonometric identity $1 - \\sin^2(\\theta) = \\cos^2(\\theta)$.",
    category: "Integrals",
    examples: "\\int \\frac{1}{\\sqrt{4-x^2}} \\, dx = \\arcsin\\left(\\frac{x}{2}\\right) + C"
  },

  // Series & Sequences
  {
    id: "seq-01",
    name: "Arithmetic Progression (n-th Term)",
    formula: "a_n = a_1 + (n-1)d",
    description: "Computes the value of the n-th term in an arithmetic sequence where $a_1$ is the first term and $d$ is the common difference.",
    category: "Series & Sequences",
    examples: "\\text{For } 5, 8, 11, 14 \\dots \\quad a_{10} = 5 + (10-1)3 = 32"
  },
  {
    id: "seq-02",
    name: "Sum of Arithmetic Series",
    formula: "S_n = \\frac{n}{2}[2a_1 + (n-1)d] = \\frac{n}{2}(a_1 + a_n)",
    description: "Computes the sum of the first $n$ terms in an arithmetic series.",
    category: "Series & Sequences",
    examples: "\\text{Sum of first 100 positive integers: } S_{100} = \\frac{100}{2}(1 + 100) = 5050"
  },
  {
    id: "seq-03",
    name: "Sum of Infinite Geometric Series",
    formula: "S_{\\infty} = \\frac{a}{1-r} \\quad \\text{for } |r| < 1",
    description: "Finds the sum of a geometric progression that extends infinitely, provided the ratio magnitude is less than 1.",
    category: "Series & Sequences",
    examples: "1 + \\frac{1}{2} + \\frac{1}{4} + \\dots = S_{\\infty} = \\frac{1}{1 - 1/2} = 2"
  },

  // ODEs
  {
    id: "ode-01",
    name: "Separable Equations Method",
    formula: "M(x) \\, dx + N(y) \\, dy = 0 \\implies \\int M(x) \\, dx + \\int N(y) \\, dy = C",
    description: "Method to solve first-order ODEs by separating variables to opposite sides of the equation and integrating.",
    category: "ODEs",
    examples: "\\frac{dy}{dx} = \\frac{x}{y} \\implies y \\, dy = x \\, dx \\implies \\frac{y^2}{2} = \\frac{x^2}{2} + C"
  },
  {
    id: "ode-02",
    name: "Integrating Factor (Linear 1st Order)",
    formula: "\\mu(x) = e^{\\int P(x) \\, dx} \\implies y = \\frac{1}{\\mu(x)} \\int \\mu(x)Q(x) \\, dx",
    description: "Solving linear differential equations in the standard form $y' + P(x)y = Q(x)$ using an integrating factor $\\mu(x)$.",
    category: "ODEs",
    examples: "y' + \\frac{1}{x}y = x^2 \\implies \\mu(x) = e^{\\int (1/x) dx} = x \\implies y = \\frac{1}{x} \\int x \\cdot x^2 dx = \\frac{x^3}{4} + \\frac{C}{x}"
  },
  {
    id: "ode-03",
    name: "Bernoulli Equation Substitution",
    formula: "y' + P(x)y = Q(x)y^n \\implies z = y^{1-n} \\implies z' + (1-n)P(x)z = (1-n)Q(x)",
    description: "Substitution method to linearize non-linear differential equations of the Bernoulli form.",
    category: "ODEs",
    examples: "y' + y = xy^2 \\implies z = y^{-1} \\implies z' - z = -x"
  },

  // Partial Fractions
  {
    id: "pf-01",
    name: "Distinct Linear Factors",
    formula: "\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}",
    description: "Setup for rational functions where denominator factors into non-repeating real linear terms.",
    category: "Partial Fractions",
    examples: "\\frac{5x-1}{(x-3)(x+1)} = \\frac{A}{x-3} + \\frac{B}{x+1}"
  },
  {
    id: "pf-02",
    name: "Repeated Linear Factors",
    formula: "\\frac{P(x)}{(x-a)^k} = \\frac{A_1}{x-a} + \\frac{A_2}{(x-a)^2} + \\dots + \\frac{A_k}{(x-a)^k}",
    description: "Setup for rational functions where a linear factor in the denominator repeats $k$ times.",
    category: "Partial Fractions",
    examples: "\\frac{x^2+1}{(x-2)^3} = \\frac{A}{x-2} + \\frac{B}{(x-2)^2} + \\frac{C}{(x-2)^3}"
  },
  {
    id: "pf-03",
    name: "Distinct Irreducible Quadratic Factors",
    formula: "\\frac{P(x)}{(x^2+ax+b)(x-c)} = \\frac{Ax+B}{x^2+ax+b} + \\frac{C}{x-c}",
    description: "Setup for rational functions containing quadratic factors that cannot be factored over real numbers ($a^2 - 4b < 0$).",
    category: "Partial Fractions",
    examples: "\\frac{1}{(x^2+9)(x-2)} = \\frac{Ax+B}{x^2+9} + \\frac{C}{x-2}"
  }
];
