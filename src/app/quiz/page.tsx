import { QuizContainer } from "@/components/quiz/quiz-container";

export const metadata = {
  title: "Quiz — KayStichs",
  description: "Test your knowledge with KayStichs quizzes",
};

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-background">
      <QuizContainer />
    </main>
  );
}
