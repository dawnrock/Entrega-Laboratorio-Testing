import React from 'react';
import { render, screen } from '@testing-library/react';
import {ConfirmationDialogComponent} from './confirmation-dialog.component';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

describe('src/common/components/confirmation-dialog/confirmation-dialog spec', () => {
  it('should display the confirmation dialog if isOpen', () => {

    //Arrange
    const labelsProps = {
        closeButton: 'Close',
        acceptButton: 'Acept',
    }

    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title:'test title',
      labels:  labelsProps,
    }

    //Act
    render(<ConfirmationDialogComponent {...props} />)


    const dialogTitle = screen.getByRole('dialog');


    // Assert
    expect(dialogTitle).toBeInTheDocument();


  })

  it('should call onClick property when it clicks on "Acept" button', () => {
    // Arrange
    const labelsProps = {
      closeButton: 'Close',
      acceptButton: 'Acept',
    }

    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title:'test title',
      labels:  labelsProps,
    }
    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonElement = screen.getAllByRole('button');
    userEvent.click(buttonElement[1]);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
  });
  it('should call onClick property when it clicks on "Close" button', () => {
    // Arrange
    const labelsProps = {
      closeButton: 'Close',
      acceptButton: 'Acept',
    }

    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title:'test title',
      labels:  labelsProps,
    }
    // Act
    render(<ConfirmationDialogComponent {...props} />);

    const buttonElement = screen.getByText('Close');
    userEvent.click(buttonElement);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });
})
