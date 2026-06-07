import { useState } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { quizzes, Quiz, Question } from "@/data/quizzes";
import { MathRenderer } from "@/components/ui/Math";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ChevronRight, ArrowLeft, CheckCircle2, XCircle, RotateCcw, Award, BookOpen, Clock, BarChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useSEO } from "@/hooks/useSEO";

export default function QuizzesPage() {
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const { toast } = useToast();

  useSEO({
    title: "Interactive Math Quizzes",
    description: "Test your mathematical knowledge with interactive quizzes on Partial Fractions, Differential Equations, and Sequences with step-by-step solutions.",
    keywords: "math quiz, partial fractions test, ODE practice, arithmetic series quiz, interactive math",
  });

  const startQuiz = (quiz: Quiz) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIdx(0);
    setSelectedOptionIdx(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setUserAnswers([]);
    setQuizFinished(false);
    setShowExplanation(false);
    toast({
      title: "Quiz Started",
      description: `Good luck with "${quiz.title}"!`,
    });
  };

  const handleOptionSelect = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionIdx(idx);
  };

  const handleAnswerSubmit = () => {
    if (selectedOptionIdx === null || selectedQuiz === null) return;
    
    setIsAnswerSubmitted(true);
    const question = selectedQuiz.questions[currentQuestionIdx];
    const isCorrect = selectedOptionIdx === question.correctAnswerIndex;
    
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    
    setUserAnswers((prev) => [...prev, selectedOptionIdx]);
    setShowExplanation(true);
  };

  const handleNextQuestion = () => {
    if (selectedQuiz === null) return;

    setSelectedOptionIdx(null);
    setIsAnswerSubmitted(false);
    setShowExplanation(false);

    if (currentQuestionIdx + 1 < selectedQuiz.questions.length) {
      setCurrentQuestionIdx((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    if (selectedQuiz) {
      startQuiz(selectedQuiz);
    }
  };

  const exitQuiz = () => {
    setSelectedQuiz(null);
    setQuizFinished(false);
  };

  // Get difficulty badge color
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case "Beginner": return "bg-green-500/10 text-green-500 border-green-500/20";
      case "Intermediate": return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
      case "Advanced": return "bg-red-500/10 text-red-500 border-red-500/20";
      default: return "";
    }
  };

  return (
    <PageTransition className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
      <AnimatePresence mode="wait">
        {/* Step 1: Quiz Directory */}
        {!selectedQuiz && (
          <motion.div
            key="quiz-list"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight mb-4">Interactive Quizzes</h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Test your math skills with practice quizzes. Receive instant feedback, step-by-step explanations, and track your performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <Card 
                  key={quiz.id} 
                  className="group flex flex-col justify-between border-border/50 bg-card/60 hover:shadow-lg hover:border-primary/30 transition-all duration-300 overflow-hidden relative"
                >
                  <div className="absolute top-0 right-0 bg-primary/10 px-4 py-1.5 rounded-bl-xl text-xs font-semibold text-primary border-l border-b border-primary/20">
                    {quiz.subject}
                  </div>
                  <CardHeader className="pt-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-mono font-bold text-lg mb-4 group-hover:scale-110 transition-transform">
                      {quiz.icon}
                    </div>
                    <CardTitle className="text-xl font-bold line-clamp-1">{quiz.title}</CardTitle>
                    <CardDescription className="line-clamp-2 mt-2">{quiz.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge variant="outline" className={`font-semibold ${getDifficultyColor(quiz.difficulty)}`}>
                        {quiz.difficulty}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <BookOpen className="w-3.5 h-3.5" /> {quiz.questions.length} Qs
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {quiz.estimatedTime}
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t border-border/30 bg-muted/10 px-6 py-4">
                    <Button 
                      onClick={() => startQuiz(quiz)} 
                      className="w-full gap-2 rounded-xl shadow-sm group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      Start Practice <ChevronRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </motion.div>
        )}

        {/* Step 2: Quiz Active Panel */}
        {selectedQuiz && !quizFinished && (
          <motion.div
            key="quiz-active"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="max-w-3xl mx-auto space-y-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-4">
              <Button variant="ghost" onClick={exitQuiz} className="gap-2 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> Exit Quiz
              </Button>
              <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                {selectedQuiz.title}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-muted-foreground font-medium">
                <span>Question {currentQuestionIdx + 1} of {selectedQuiz.questions.length}</span>
                <span>{Math.round(((currentQuestionIdx) / selectedQuiz.questions.length) * 100)}% Complete</span>
              </div>
              <Progress value={((currentQuestionIdx) / selectedQuiz.questions.length) * 100} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="border-border/50 bg-card overflow-hidden">
              <CardHeader className="pb-6 border-b border-border/30 bg-muted/10">
                <div className="text-lg md:text-xl font-medium leading-relaxed text-foreground">
                  <MathRenderer formula={selectedQuiz.questions[currentQuestionIdx].questionText} />
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                {selectedQuiz.questions[currentQuestionIdx].options.map((option, idx) => {
                  const isSelected = selectedOptionIdx === idx;
                  const isCorrectAnswer = idx === selectedQuiz.questions[currentQuestionIdx].correctAnswerIndex;
                  
                  let optionStyle = "border-border/60 hover:bg-muted/30";
                  let badge = null;

                  if (isSelected && !isAnswerSubmitted) {
                    optionStyle = "border-primary bg-primary/5 dark:bg-primary/10 text-primary";
                  }

                  if (isAnswerSubmitted) {
                    if (isCorrectAnswer) {
                      optionStyle = "border-green-500 bg-green-500/10 text-green-700 dark:text-green-400";
                      badge = <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />;
                    } else if (isSelected) {
                      optionStyle = "border-red-500 bg-red-500/10 text-red-700 dark:text-red-400";
                      badge = <XCircle className="h-5 w-5 text-red-500 shrink-0" />;
                    } else {
                      optionStyle = "opacity-60 border-border/40";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full flex items-center justify-between text-left p-4 rounded-xl border text-sm md:text-base font-medium transition-all duration-200 focus:outline-none ${optionStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-xs font-bold shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <MathRenderer formula={option} />
                      </div>
                      {badge}
                    </button>
                  );
                })}
              </CardContent>

              {/* Actions Footer */}
              <CardFooter className="flex justify-between items-center gap-4 bg-muted/5 border-t border-border/30 p-6">
                {!isAnswerSubmitted ? (
                  <Button 
                    onClick={handleAnswerSubmit} 
                    disabled={selectedOptionIdx === null}
                    className="w-full h-11 text-base font-semibold rounded-xl"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button 
                    onClick={handleNextQuestion} 
                    className="w-full h-11 text-base font-semibold rounded-xl gap-2"
                  >
                    {currentQuestionIdx + 1 < selectedQuiz.questions.length ? "Next Question" : "View Results"} 
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                )}
              </CardFooter>
            </Card>

            {/* Explanation Section */}
            {showExplanation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-5 border border-primary/20 bg-primary/5 rounded-2xl space-y-2.5 shadow-sm"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-primary uppercase tracking-wider">
                  <BookOpen className="h-4 w-4" /> Step-by-Step Explanation
                </div>
                <div className="text-sm md:text-base leading-relaxed text-foreground/90 font-sans">
                  <MathRenderer formula={selectedQuiz.questions[currentQuestionIdx].explanation} displayMode={true} />
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Step 3: Quiz Finish & Summary Results */}
        {selectedQuiz && quizFinished && (
          <motion.div
            key="quiz-results"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-border/50 bg-card shadow-xl overflow-hidden text-center p-8 md:p-12 relative">
              <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                <Award className="h-10 w-10 animate-bounce" />
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight mb-2">Quiz Completed!</h2>
              <p className="text-muted-foreground text-base max-w-md mx-auto mb-8">
                You've finished the "{selectedQuiz.title}" quiz. Here is a summary of your performance:
              </p>

              {/* Score breakdown */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-8">
                <div className="bg-muted/20 p-4 rounded-2xl border border-border/30">
                  <span className="block text-3xl font-extrabold text-primary">{score} / {selectedQuiz.questions.length}</span>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Correct</span>
                </div>
                <div className="bg-muted/20 p-4 rounded-2xl border border-border/30">
                  <span className="block text-3xl font-extrabold text-primary">
                    {Math.round((score / selectedQuiz.questions.length) * 100)}%
                  </span>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Score</span>
                </div>
                <div className="bg-muted/20 p-4 rounded-2xl border border-border/30">
                  <span className="block text-3xl font-extrabold text-primary">
                    {Math.round((score / selectedQuiz.questions.length) * 100) >= 80 ? "Pass" : "Retry"}
                  </span>
                  <span className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Status</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={resetQuiz} className="h-12 px-6 rounded-xl gap-2 font-semibold shadow-md">
                  <RotateCcw className="h-5 w-5" /> Try Again
                </Button>
                <Button variant="outline" onClick={exitQuiz} className="h-12 px-6 rounded-xl font-semibold border-border/60">
                  Back to Dashboard
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
