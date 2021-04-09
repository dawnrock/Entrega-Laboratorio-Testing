import { renderHook, act } from '@testing-library/react-hooks';
import { Lookup } from 'common/models';

import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('src/common/components/confirmation-dialog/confirmation-dialog.hook spec', () => {

  it('It should to isOpen false and the itemToDelete like empty Lookup when executes useConfirmationDialog', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });

  })

  it('It should to keep the property isOpen false and create a empty lookup on "itemToDelete" when click onAccept', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onAccept();
    });

    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
  });

  it('It should to set the property isOpen to false and create a empty lookup on "itemToDelete" when click onClose', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toEqual(false);
    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
  });

  it('It should to set the property isOpen to true when it feeds onOpenDialog with Lookup and set the actual item to itemToDelete', () => {
    const localItem: Lookup = {
      id: '1',
      name: 'Manu',
    };

    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(localItem);
    });

    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(localItem);
  });
});
