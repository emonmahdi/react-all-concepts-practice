const ListExample = () => {
    const fruits = ["Apple", "Banana", "Mango"];
  
    return (
      <>
      <h2>List and Keys:</h2>
      <p>Array map করে UI তে list render করা যায়। <br /> প্রতিটি item কে unique করার জন্য key prop দিতে হয়।</p>
      <div className="p-6 bg-green-100 rounded-xl shadow-md">
        <h2 className="text-xl font-bold text-green-700 mb-2">Fruits List</h2>
        <ul className="list-disc pl-6 text-gray-700">
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
      </>
    );
  };
  
  export default ListExample;
  