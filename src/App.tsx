import { useState } from "react";
import Dialog from "./components/dialog/dialog";
import { TestButton, ButtonContainer } from "./style";

function App() {
  const [openFullContent, setOpenFullContent] = useState(false);
  const [openLowContent, setOpenLowContent] = useState(false);
  const [openNoContent, setOpenNoContent] = useState(false);
  return (
    <>
      <ButtonContainer>
        <TestButton onClick={() => setOpenFullContent(true)}>
          Full content example
        </TestButton>
        <TestButton onClick={() => setOpenLowContent(true)}>
          Low content example (no overlay click)
        </TestButton>
        <TestButton onClick={() => setOpenNoContent(true)}>
          No content example
        </TestButton>
      </ButtonContainer>

      <Dialog
        closeOnOverlayClick
        isOpen={openFullContent}
        title="Full Content Example"
        onClose={() => setOpenFullContent(false)}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <img src="image 7.png" />
      </Dialog>
      <Dialog
        closeOnOverlayClick={false}
        isOpen={openLowContent}
        title="Low Content Example"
        onClose={() => setOpenLowContent(false)}
      >
        <p>
          Neste exemplo, foi desabilitada a propriedade "CloseOnOverlayClick", o
          que significa que não será possível fechar este dialog apenas clicando
          do lado de fora dele (no overlay), sendo necessário clicar no X ou
          apertar a tecla Esc.
        </p>
      </Dialog>
      <Dialog
        closeOnOverlayClick
        isOpen={openNoContent}
        title="No Content Dialog"
        onClose={() => setOpenNoContent(false)}
      />
    </>
  );
}

export default App;
