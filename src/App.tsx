import { useState } from "react";
import Form from "./components/Form";
import FormList from "./components/FormList";
import CategoriesFilter from "./components/CategoriesFilter";

const App = () => {
  // const [expenses, setItem] = useState([
  //   { id: 1, Name: "react", Price: "200", category: "frontEnd" },
  //   { id: 2, Name: "node", Price: "100", category: "BackendEnd" },
  //   { id: 3, Name: "sql", Price: "200", category: "frontEnd" },
  //   { id: 4, Name: "python", Price: "200", category: "BacktEnd" },
  //   { id: 5, Name: "nodejs", Price: "100", category: "FullStock" },
  //   { id: 6, Name: "Reactjs", Price: "100", category: "Fullstock" },
  //   { id: 7, Name: "devops", Price: "100", category: "frontEnd" },
  // ]);
  const [expenses, setItem] = useState([
    { id: 1, Name: "react", Price: 200, category: "frontEnd" },
    { id: 2, Name: "node", Price: 100, category: "BackendEnd" },
    { id: 3, Name: "sql", Price: 200, category: "frontEnd" },
    { id: 4, Name: "python", Price: 200, category: "BacktEnd" },
    { id: 5, Name: "nodejs", Price: 100, category: "FullStock" },
    { id: 6, Name: "Reactjs", Price: 100, category: "Fullstock" },
    { id: 7, Name: "devops", Price: 100, category: "frontEnd" },
  ]);
  const [selectCategory, setSelectCategory] = useState("");
  const visibleExpenses = selectCategory
    ? expenses.filter((item) => item.category === selectCategory)
    : expenses;
  return (
    <div>
      <h1 className="text-center">TodoApplicationList</h1>
      <Form
        onSubmit={(expense) =>
          setItem([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <div className="m-3">
        <CategoriesFilter
          onSelectCategory={(category) => setSelectCategory(category)}
        />
      </div>

      <FormList
        expenses={visibleExpenses}
        onDelete={(id) => setItem(expenses.filter((item) => item.id !== id))}
      />
    </div>
  );
};

export default App;
