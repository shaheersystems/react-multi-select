import "./App.css";
import Banner from "./components/Banner";
import MultiSelect from "./components/multi-select/MultiSelect";

function App() {
  return (
    <div className='App'>
      <Banner />
      <div className='py-10 h-96 flex items-center flex-col rounded max-w-6xl m-auto'>
        <MultiSelect />
      </div>
    </div>
  );
}

export default App;
