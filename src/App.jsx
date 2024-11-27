import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [item, setItem] = useState("");
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const { meals } = await res.json();
      setItem(meals);
    };

    fetchData();
  }, []);

  // console.log(item);
  return (
    <div className="w-full flex flex-col items-center bg-gradient-to-r from-green-400 to-blue-500 min-h-screen p-5">
      <div className="text-4xl font-extrabold text-white my-5">
        Meals API Seafood
      </div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-5">
        {item &&
          item.map(({ idMeal, strMeal, strMealThumb }) => (
            <div
              key={idMeal}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={strMealThumb}
                alt={strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">{strMeal}</h3>
                <p className="text-gray-600">#{idMeal}</p>{" "}
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default App;
