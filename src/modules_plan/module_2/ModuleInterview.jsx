import { useState } from "react";

const qaData = [
  {
    question: "What is useState hook?",
    answer:
      "It’s a React Hook that lets you add state to functional components.",
  },
  {
    question: "Difference between props and state?",
    answer:
      "Props are read-only data passed from parent → child. State is mutable and managed inside a component.",
  },
  {
    question: "What happens when you update state?",
    answer:
      "React schedules a re-render of the component with updated state.",
  },
  {
    question: "Can you update state directly?",
    answer:
      "No. You must use the state updater function (e.g., setState).",
  },
  {
    question: "What is event handling in React?",
    answer:
      "Handling DOM events using camelCase attributes like onClick, onChange.",
  },
  {
    question: "What is conditional rendering?",
    answer:
      "Rendering UI based on conditions (using if, ternary, &&).",
  },
  {
    question: "Why are keys important in lists?",
    answer:
      "Keys help React identify which items changed, added, or removed efficiently.",
  },
  {
    question: "Difference between controlled and uncontrolled components?",
    answer:
      "Controlled → React manages form state. Uncontrolled → DOM manages form state via refs.",
  },
  {
    question: "Can you use multiple states in one component?",
    answer:
      "Yes, you can call useState multiple times in a single component.",
  },
  {
    question: "What is the best practice for updating state based on previous state?",
    answer: "Use a callback: setCount((prev) => prev + 1);",
  },
  {
    question: "Can we pass functions as props?",
    answer:
      "Yes. Example: Passing an onClick function to a child button component.",
  },
];

const InterviewQAModule2 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-center text-purple-700 mb-6">
        🎯 React Interview Q&A (State & Events)
      </h1>

      <div className="space-y-4">
        {qaData.map((qa, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl shadow bg-white overflow-hidden"
          >
            <button
              className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none hover:bg-gray-50"
              onClick={() => toggleAnswer(index)}
            >
              <span className="font-semibold text-gray-800">
                Q: {qa.question}
              </span>
              <span className="text-purple-600 font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-5 pb-4 text-gray-700 border-t bg-purple-50">
                <p>
                  <span className="font-bold text-purple-700">A:</span>{" "}
                  {qa.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewQAModule2;
