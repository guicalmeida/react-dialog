import CloseIcon from "./closeIcon.svg";
import { Backdrop, Body, DialogContainer, Header } from "./style";

export default function Dialog() {
  return (
    <Backdrop>
      <DialogContainer>
        <Header>
          <h1>Title</h1>
          <button>
            <img src={CloseIcon} alt="Ícone de fechar" />
          </button>
        </Header>
        <Body>
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
          <img src="image 7.png"/>
        </Body>
      </DialogContainer>
    </Backdrop>
  );
}
