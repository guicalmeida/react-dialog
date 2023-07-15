import { useState } from "react";
import Dialog from "./components/dialog/dialog";

function App() {
  const [openFullContent, setOpenFullContent] = useState(false);
  return (
    <>
      <button onClick={() => setOpenFullContent(true)}>
        {" "}
        Full content example
      </button>
      {openFullContent && (
        <Dialog
          closeOnOverlayClick
          isOpen={openFullContent}
          title="Full Content Example"
          onClose={() => setOpenFullContent(false)}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <img src="image 7.png" />
        </Dialog>
      )}
    </>
  );
}

export default App;
