import UserInput from "./components/UserInput/UserInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import Header from "./components/UI/Header";

const calculateHandler = (userInput) => {
  // Should be triggered when form is submitted
  // Might not directly want to bind it to the submit event on the form...

  const yearlyData = []; // per-year results

  let currentSavings = +userInput["current-savings"]; // change the shape of this input object
  const yearlyContribution = +userInput["yearly-contribution"]; // change the shape...
  const expectedReturn = +userInput["expected-return"] / 100;
  const duration = +userInput["duration"];

  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    currentSavings += yearlyInterest + yearlyContribution;
    yearlyData.push({
      // change the shape of the data pushed to the array
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      yearlyContribution: yearlyContribution,
    });
  }

  // do something with yearlyData ...
};

function App() {
  return (
    <div>
      <Header />
      <UserInput />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultsTable />
    </div>
  );
}

export default App;
