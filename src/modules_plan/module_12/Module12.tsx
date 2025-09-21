import React, {
  createContext,
  useContext,
  useState,
  ChangeEvent,
  FormEvent,
  ReactNode,
} from "react";

/* ----------------------------
   1. Props Typing Example
-----------------------------*/
type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-indigo-600 text-white rounded-md"
  >
    {label}
  </button>
);

/* ----------------------------
   2. State Typing Example
-----------------------------*/
const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="space-x-2">
      <p className="inline">Count: {count}</p>
      <Button label="+" onClick={() => setCount(count + 1)} />
      <Button label="-" onClick={() => setCount(count - 1)} />
    </div>
  );
};

/* ----------------------------
   3. Context Typing Example
-----------------------------*/
type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === "light" ? "bg-white" : "bg-gray-900 text-white"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeSwitcher must be used in ThemeProvider");
  const { theme, toggleTheme } = context;

  return (
    <div className="p-2">
      <p>Current Theme: {theme}</p>
      <Button label="Toggle Theme" onClick={toggleTheme} />
    </div>
  );
};

/* ----------------------------
   4. Custom Hook Typing Example
-----------------------------*/
function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : initialValue;
  });

  const setStoredValue = (newValue: T) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [value, setStoredValue] as const;
}

/* ----------------------------
   5. Todo App Example with TypeScript
-----------------------------*/
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const newTodo: Todo = { id: Date.now(), text: input, completed: false };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: number) =>
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );

  const deleteTodo = (id: number) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="font-semibold text-lg mb-2">📝 Todo App (TypeScript)</h2>
      <form onSubmit={handleSubmit} className="space-x-2">
        <input
          type="text"
          value={input}
          onChange={handleChange}
          className="border p-1 rounded"
        />
        <Button label="Add Todo" onClick={() => {}} />
      </form>
      <ul className="mt-3 space-y-1">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-1 ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 text-sm"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* ----------------------------
   Main Module12 Component
-----------------------------*/
const Module12 = () => {
  return (
    <ThemeProvider>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-indigo-600">
          📌 Module 12: TypeScript with React
        </h1>
        <p className="text-gray-700">
          👉 Goal: React কে সম্পূর্ণ Type-safe করা।
        </p>

        {/* Examples */}
        <Counter />
        <ThemeSwitcher />
        <TodoApp />

        {/* Interview Questions */}
        <section className="bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800">
            🎯 Interview Q&A
          </h2>
          <div className="space-y-3 mt-2 text-gray-700">
            <p>
              <b>Q1:</b> React এর সাথে TypeScript কেন ব্যবহার করবো? <br />
              <b>Ans:</b> Compile-time error ধরতে, better autocomplete পেতে এবং
              code maintainability বাড়ানোর জন্য।
            </p>

            <p>
              <b>Q2:</b> Props typing এর সুবিধা কী? <br />
              <b>Ans:</b> ভুল data type pass করলে সাথে সাথে error দেখাবে।
            </p>

            <p>
              <b>Q3:</b> useState এর generic কেন দরকার? <br />
              <b>Ans:</b> State এ ভুল data assign হওয়া থেকে বাঁচায়।
            </p>

            <p>
              <b>Q4:</b> Context typing কেন দরকার? <br />
              <b>Ans:</b> Value ও function এর সঠিক টাইপ maintain করতে, misuse এড়াতে।
            </p>

            <p>
              <b>Q5 (Critical):</b> Generic দিয়ে custom hook এর সুবিধা কী? <br />
              <b>Ans:</b> Hook reusable হয়, যেকোনো টাইপ handle করতে পারে।
            </p>
          </div>
        </section>

        {/* Problem Solving QnA */}
        <section className="bg-gray-50 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800">
            🧩 Problem Solving Q&A
          </h2>
          <div className="space-y-3 mt-2 text-gray-700">
            <p>
              <b>Q1:</b> যদি ভুল props পাঠানো হয় কী হবে? <br />
              <b>Ans:</b> Compile-time এ error হবে, runtime এ bug আসবে না।
            </p>

            <p>
              <b>Q2:</b> Todo ID number না string রাখবে? <br />
              <b>Ans:</b> Requirement অনুযায়ী। কিন্তু TypeScript এ আগে type define করলে ভুল হবে না।
            </p>

            <p>
              <b>Q3:</b> Context default value undefined হলে কী করবে? <br />
              <b>Ans:</b> useContext ব্যবহার করার সময় conditionally check করতে হবে অথবা সবসময় Provider দিয়ে wrap করতে হবে।
            </p>
          </div>
        </section>
      </div>
    </ThemeProvider>
  );
};

export default Module12;
