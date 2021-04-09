import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';
import * as promiseTracker from 'react-promise-tracker/lib/trackerHook';


describe('src/common/components/spinner/spinner.component specs', () => {
  it('should mount the spinnerComponent when its called ', () => {

    const stub = jest
    .spyOn(promiseTracker, 'usePromiseTracker')
    .mockReturnValue({promiseInProgress: true})

    render(<SpinnerComponent/>)

    const spinner = screen.getByRole('presentation');

    // Assert
    expect(spinner).toBeInTheDocument();
    expect(stub).toHaveBeenCalled();

  });

  it('shouldn´t mount the spinnerComponent when its called with false ', () => {

    const stub = jest
    .spyOn(promiseTracker, 'usePromiseTracker')
    .mockReturnValue({promiseInProgress: false})

    render(<SpinnerComponent/>)

    const spinner = screen.queryByRole('presentation');


    // Assert
    expect(spinner).not.toBeInTheDocument();

    expect(stub).toHaveBeenCalled();

  });

});
