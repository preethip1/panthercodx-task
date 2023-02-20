import "./App.css";
import CurrentDate from "./date";
import CreateModal from "./CreateModal";
import TableData from "./Table";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div className="d-flex justify-content-between align-items-center">
          <CurrentDate />
          <CreateModal />
        </div>
        <TableData />
      </div>
    </RecoilRoot>
  );
}

export default App;
