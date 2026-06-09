export interface Formula {
  id: string;
  name: string;
  formula: string;
  description: string;
  category: "Partial Fractions" | "Series & Sequences" | "Separation of Variables" | "Homogeneous DE" | "Linear DE" | "Bernoulli Equation" | "Second Order DE" | "System of Equations";
  examples: string;
}

export const formulas: Formula[] = [
  // 1) Partial Fractions
  {
    id: "pf-01",
    name: "Case 1: Distinct Linear Factors / عوامل خطية مختلفة",
    formula: "\\frac{P(x)}{(x-a)(x-b)} = \\frac{A}{x-a} + \\frac{B}{x-b}",
    description: "Used when the denominator consists of non-repeating real linear terms. / يُسخدم عندما يتكون المقام من عوامل خطية حقيقية غير مكررة.",
    category: "Partial Fractions",
    examples: "\\frac{5x+1}{(x-2)(x+3)} = \\frac{11/5}{x-2} + \\frac{14/5}{x+3}"
  },
  {
    id: "pf-02",
    name: "Case 2: Repeated Linear Factors / عوامل خطية مكررة",
    formula: "\\frac{P(x)}{(x-a)^n} = \\frac{A_1}{x-a} + \\frac{A_2}{(x-a)^2} + \\dots + \\frac{A_n}{(x-a)^n}",
    description: "For a linear factor that repeats $n$ times, create $n$ partial fractions with increasing powers. / لعامل خطي يتكرر $n$ من المرات، نقوم بإنشاء $n$ من الكسور الجزئية بقوى متزايدة.",
    category: "Partial Fractions",
    examples: "\\frac{2x+3}{(x-1)^2} = \\frac{2}{x-1} + \\frac{5}{(x-1)^2}"
  },
  {
    id: "pf-03",
    name: "Case 3: Irreducible Quadratic Factor / عامل تربيعي غير قابل للتحليل",
    formula: "\\frac{P(x)}{x^2+a^2} = \\frac{Ax+B}{x^2+a^2}",
    description: "For quadratic factors in the denominator that cannot be factored over real numbers, the numerator must be a linear term $Ax+B$. / للعوامل التربيعية في المقام غير القابلة للتحليل حقيقياً، يجب أن يكون البسط حداً خطياً $Ax+B$.",
    category: "Partial Fractions",
    examples: "\\frac{x}{x^2+4} \\implies \\text{Already in simplest form}"
  },
  {
    id: "pf-04",
    name: "Mixed Form / الحالة المختلطة",
    formula: "\\frac{P(x)}{(x-a)^2(x^2+b^2)} = \\frac{A}{x-a} + \\frac{B}{(x-a)^2} + \\frac{Cx+D}{x^2+b^2}",
    description: "Combines multiple factors (linear, repeated, quadratic) in a single expression. / يجمع بين عوامل متعددة (خطية، مكررة، تربيعية) في تعبير واحد.",
    category: "Partial Fractions",
    examples: "\\frac{3x^2+2x+1}{(x-1)^2(x+1)} = \\frac{5/2}{x-1} + \\frac{3}{(x-1)^2} + \\frac{1/2}{x+1}"
  },

  // 2) Series & Sequences
  {
    id: "seq-01",
    name: "Arithmetic Sequence / المتتابعة الحسابية",
    formula: "a_n = a_1 + (n-1)d \\quad , \\quad S_n = \\frac{n}{2}[2a_1 + (n-1)d]",
    description: "Each term is found by adding a constant difference $d$ to the previous term. / يتم إيجاد كل حد عن طريق إضافة فرق ثابت $d$ إلى الحد السابق.",
    category: "Series & Sequences",
    examples: "\\text{For } 2, 4, 6, 8 \\dots \\implies d=2, \\quad a_{10} = 2 + 9(2) = 20, \\quad S_{10} = \\frac{10}{2}(2 + 20) = 110"
  },
  {
    id: "seq-02",
    name: "Geometric Sequence / المتتابعة الهندسية",
    formula: "a_n = a_1 r^{n-1} \\quad , \\quad S_n = a_1 \\frac{1-r^n}{1-r}",
    description: "Each term is found by multiplying the previous term by a constant ratio $r$. / يتم إيجاد كل حد بضرب الحد السابق في نسبة ثابتة $r$.",
    category: "Series & Sequences",
    examples: "\\text{For } 3, 6, 12 \\dots \\implies r=2, \\quad a_{5} = 3(2)^4 = 48, \\quad S_{5} = 3 \\frac{1-2^5}{1-2} = 93"
  },
  {
    id: "seq-03",
    name: "Infinite Geometric Series / المتسلسلة الهندسية اللانهائية",
    formula: "S_{\\infty} = \\frac{a_1}{1-r} \\quad (\\text{for } |r| < 1)",
    description: "Sum of a geometric progression extending to infinity converges if the ratio magnitude is less than 1. / مجموع متتابعة هندسية تمتد إلى ما لا نهاية يتقارب إذا كان مقياس النسبة أقل من 1.",
    category: "Series & Sequences",
    examples: "8 + 4 + 2 + 1 + \\dots \\implies a_1=8, r=1/2 \\implies S_{\\infty} = \\frac{8}{1-1/2} = 16"
  },
  {
    id: "seq-04",
    name: "Harmonic Series / المتسلسلة المتوافقة",
    formula: "\\sum_{n=1}^{\\infty} \\frac{1}{n} \\implies \\infty \\quad (\\text{Diverges})",
    description: "A standard divergent series where terms decrease to 0 but the sum grows infinitely. / متسلسلة تباعدية قياسية حيث تقترب الحدود من الصفر ولكن المجموع ينمو بلا حدود.",
    category: "Series & Sequences",
    examples: "\\sum_{n=1}^{\\infty} \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\dots \\to \\infty"
  },
  {
    id: "seq-05",
    name: "p-Series / متسلسلة القوى",
    formula: "\\sum_{n=1}^{\\infty} \\frac{1}{n^p} \\implies \\begin{cases} \\text{Converges} & \\text{if } p > 1 \\\\ \\text{Diverges} & \\text{if } p \\le 1 \\end{cases}",
    description: "Convergence test based on the exponent power $p$ of $n$ in the denominator. / اختبار التقارب بناءً على الأس $p$ للمتغير $n$ في المقام.",
    category: "Series & Sequences",
    examples: "\\sum \\frac{1}{n^2} \\text{ converges (} p=2 > 1 \\text{)}, \\quad \\sum \\frac{1}{\\sqrt{n}} \\text{ diverges (} p=0.5 \\le 1 \\text{)}"
  },
  {
    id: "seq-06",
    name: "Alternating Series (Leibniz Test) / المتسلسلة المتناوبة",
    formula: "\\sum_{n=1}^{\\infty} (-1)^n a_n \\implies \\text{Converges if } a_n \\downarrow \\text{ and } \\lim_{n\\to\\infty} a_n = 0",
    description: "A series whose terms alternate between positive and negative signs. / متسلسلة تتناوب إشارات حدودها بين الموجب والسالب.",
    category: "Series & Sequences",
    examples: "\\sum_{n=1}^{\\infty} \\frac{(-1)^n}{n} \\implies \\text{Converges conditionally because } \\frac{1}{n} \\to 0"
  },

  // 3) Separation of Variables
  {
    id: "sep-01",
    name: "Separation Form / شكل فصل المتغيرات",
    formula: "\\frac{dy}{dx} = f(x)g(y) \\implies \\frac{1}{g(y)} \\, dy = f(x) \\, dx \\implies \\int \\frac{1}{g(y)} \\, dy = \\int f(x) \\, dx + C",
    description: "Solve first-order ODEs by separating variables to opposite sides of the equation and integrating. / حل المعادلات التفاضلية من الرتبة الأولى بفصل المتغيرات في طرفين متقابلين ثم التكامل.",
    category: "Separation of Variables",
    examples: "\\frac{dy}{dx} = xy \\implies \\frac{1}{y} dy = x dx \\implies \\ln|y| = \\frac{1}{2}x^2 + C \\implies y = C'e^{\\frac{1}{2}x^2}"
  },

  // 4) Homogeneous DE
  {
    id: "hom-01",
    name: "Homogeneous Substitution / التعويض المتجانس",
    formula: "\\frac{dy}{dx} = F\\left(\\frac{y}{x}\right) \\implies y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}",
    description: "Substitute $y=vx$ to transform the homogeneous differential equation into a separable form. / عوض بـ $y=vx$ لتحويل المعادلة التفاضلية المتجانسة إلى معادلة قابلة للفصل.",
    category: "Homogeneous DE",
    examples: "\\frac{dy}{dx} = 1 + \\frac{y}{x} \\implies v + x\\frac{dv}{dx} = 1 + v \\implies x\\frac{dv}{dx} = 1 \\implies v = \\ln|x| + C \\implies y = x\\ln|x| + Cx"
  },

  // 5) Linear DE
  {
    id: "lin-01",
    name: "Integrating Factor Method / طريقة عامل التكامل",
    formula: "\\frac{dy}{dx} + P(x)y = Q(x) \\implies IF = e^{\\int P(x) \\, dx} \\implies y(IF) = \\int Q(x)(IF) \\, dx",
    description: "Used to solve linear first-order differential equations using an integrating factor $IF$. / تُستخدم لحل المعادلات التفاضلية الخطية من الرتبة الأولى باستخدام عامل التكامل $IF$.",
    category: "Linear DE",
    examples: "\\frac{dy}{dx} + y = x \\implies P(x)=1 \\implies IF = e^x \\implies y e^x = \\int x e^x dx = xe^x - e^x + C \\implies y = x - 1 + C e^{-x}"
  },

  // 6) Bernoulli Equation
  {
    id: "bern-01",
    name: "Bernoulli Reduction / اختزال معادلة برنولي",
    formula: "\\frac{dy}{dx} + P(x)y = Q(x)y^n \\implies v = y^{1-n} \\implies \\frac{1}{1-n}\\frac{dv}{dx} + P(x)v = Q(x)",
    description: "Transforms a non-linear differential equation of the Bernoulli type into a linear first-order ODE. / تحويل المعادلة التفاضلية غير الخطية من نوع برنولي إلى معادلة خطية من الرتبة الأولى.",
    category: "Bernoulli Equation",
    examples: "\\frac{dy}{dx} + y = y^2 \\implies v = y^{-1} \\implies -v' + v = 1 \\implies v' - v = -1 \\implies v = 1 + C e^x \\implies y = \\frac{1}{1 + C e^x}"
  },

  // 7) Second Order DE
  {
    id: "ode2-01",
    name: "Distinct Real Roots / جذور حقيقية مختلفة",
    formula: "ay'' + by' + cy = 0 \\implies am^2+bm+c=0 \\implies y = C_1 e^{m_1 x} + C_2 e^{m_2 x}",
    description: "Auxiliary equation yields two distinct real roots $m_1 \\ne m_2$. / المعادلة المساعدة تعطي جذرين حقيقيين مختلفين $m_1 \\ne m_2$.",
    category: "Second Order DE",
    examples: "y'' - 5y' + 6y = 0 \\implies m^2-5m+6=0 \\implies m=2,3 \\implies y = C_1 e^{2x} + C_2 e^{3x}"
  },
  {
    id: "ode2-02",
    name: "Repeated Real Roots / جذور حقيقية مكررة",
    formula: "ay'' + by' + cy = 0 \\implies am^2+bm+c=0 \\implies y = (C_1 + C_2 x) e^{mx}",
    description: "Auxiliary equation yields repeated real roots $m_1 = m_2 = m$. / المعادلة المساعدة تعطي جذرين حقيقيين متساويين $m_1 = m_2 = m$.",
    category: "Second Order DE",
    examples: "y'' - 2y' + y = 0 \\implies m^2-2m+1=0 \\implies m=1 \\implies y = (C_1 + C_2 x) e^x"
  },
  {
    id: "ode2-03",
    name: "Complex Conjugate Roots / جذور تخيلية مركبة",
    formula: "ay'' + by' + cy = 0 \\implies m = \\alpha \\pm i\\beta \\implies y = e^{\\alpha x}(C_1 \\cos(\\beta x) + C_2 \\sin(\\beta x))",
    description: "Auxiliary equation yields complex roots $\\alpha \\pm i\\beta$. / المعادلة المساعدة تعطي جذوراً مركبة $\\alpha \\pm i\\beta$.",
    category: "Second Order DE",
    examples: "y'' + 9y = 0 \\implies m^2+9=0 \\implies m=\\pm 3i \\implies y = C_1 \\cos(3x) + C_2 \\sin(3x)"
  },

  // 8) System of Equations
  {
    id: "sys-01",
    name: "System of Linear Equations / نظام المعادلات الخطية",
    formula: "\\begin{cases} a_1 x + b_1 y = c_1 \\\\ a_2 x + b_2 y = c_2 \\end{cases}",
    description: "Solving multiple simultaneous linear equations using algebraic elimination, substitution, or matrix representation. / حل مجموعة من المعادلات الخطية المتزامنة بالتعويض، الحذف أو المصفوفات.",
    category: "System of Equations",
    examples: "x+y=5, \\ x-y=1 \\implies 2x=6 \\implies x=3, \\ y=2"
  }
];
