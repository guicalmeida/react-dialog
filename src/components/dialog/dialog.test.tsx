import "@testing-library/jest-dom";
import { render, fireEvent } from '@testing-library/react';
import Dialog from './dialog';

describe('Dialog Component', () => {
  test('renders with title and children', () => {
    const title = 'Test Dialog';
    const content = 'Dialog content';
    const onClose = vi.fn();
    const { getByText } = render(
      <Dialog isOpen={true} onClose={onClose} title={title} closeOnOverlayClick>
        {content}
      </Dialog>
    );

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(content)).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const onClose = vi.fn();
    const { getByLabelText } = render(
      <Dialog isOpen={true} onClose={onClose} title="Test Dialog" closeOnOverlayClick>
        Dialog content
      </Dialog>
    );

    fireEvent.click(getByLabelText('fechar'));

    expect(onClose).toHaveBeenCalled();
  });

  test('closes dialog on overlay click if closeOnOverlayClick is true', () => {
    const onClose = vi.fn();
    const { getByTestId } = render(
      <Dialog
        isOpen={true}
        onClose={onClose}
        title="Test Dialog"
        closeOnOverlayClick={true}
      >
        Dialog content
      </Dialog>
    );

    fireEvent.click(getByTestId('backdrop'));

    expect(onClose).toHaveBeenCalled();
  });

  test('does not close dialog on overlay click if closeOnOverlayClick is false', () => {
    const onClose = vi.fn();
    const { getByTestId } = render(
      <Dialog
        isOpen={true}
        onClose={onClose}
        title="Test Dialog"
        closeOnOverlayClick={false}
      >
        Dialog content
      </Dialog>
    );

    fireEvent.click(getByTestId('backdrop'));

    expect(onClose).not.toHaveBeenCalled();
  });

  test('closes dialog on Esc key press', () => {
    const onClose = vi.fn();
    render(
      <Dialog
        isOpen={true}
        onClose={onClose}
        title="Test Dialog"
        closeOnOverlayClick={false}
      >
        Dialog content
      </Dialog>
    );

    fireEvent.keyDown(document, {key: 'Escape', code: 'Escape'});

    expect(onClose).toHaveBeenCalled();
  });
});
