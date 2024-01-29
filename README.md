# Lemon Energia Challenge - Dialog Component

This project implements a dialog component developed with React, Vite, Styled Components, and Vitest for testing purposes. The Dialog component is designed to work on mobile screens and is not intended for other breakpoints, as detailed in the challenge. It provides a modal overlay with two layers: one covers the entire screen and prevents interaction with the hidden content, and the other layer displays the content.

## Installation

To install the project and its dependencies, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd lemon-dialog
   ```

3. Install the dependencies using npm:

   ```bash
   npm install
   ```

## Usage

To use the Dialog component, follow these steps:

1. Import the Dialog component into your file:

   ```jsx
   import Dialog from './components/Dialog';
   ```

2. Use the Dialog component in your code:

   ```jsx
   const [isOpen, setIsOpen] = useState(false);

   const handleClose = () => {
     setIsOpen(false);
   };

   // ...

   <Dialog
     isOpen={isOpen}
     onClose={handleClose}
     title="My dialog"
     closeOnOverlayClick={true}
   >
     {/* Content goes here */}
   </Dialog>
   ```

   Make sure to create a state (`isOpen`) to control the opening and closing of the Dialog. The `handleClose` function will be responsible for updating the state to close the Dialog.

3. Replace `handleClose` with the appropriate function to handle the closing event.

## Usage Examples

There are already 4 usage examples of the Dialog implemented in the `App.tsx` file:
- With enough content to require scrolling;
- With little content and the dialog size accordingly;
- Without content;
- Within a parent with the `position: relative` styling;

## Props

The Dialog component accepts the following props:

- `title` (string, optional): The content to be displayed at the top of the Dialog.
- `isOpen` (boolean, required): Specifies whether the Dialog is open (`true`) or closed (`false`).
- `onClose` (function, required): Callback function to be invoked whenever the Dialog is closed.
- `closeOnOverlayClick` (boolean, required): When set to `true`, allows the Dialog to be closed when the user clicks on the overlay layer.
- `children` (ReactNode, optional): The content of the Dialog.

## Functionality

The Dialog component works as follows:

- It has two layers, where the top layer covers the entire screen and the bottom layer displays the content.
- The Dialog displays its content up to a certain height on the screen. If the content exceeds this height, scrolling behavior is applied to the Dialog body.
- The visibility of the Dialog is controlled by the `isOpen` prop, so the component is not even rendered if it is not `true`.
- The `onClose` callback function is invoked whenever the user performs an action that closes the Dialog:
  - Clicking on the close button
  - Clicking on the overlay layer if the `closeOnOverlayClick` prop is set to `true`.
  - Pressing the ESC key.
