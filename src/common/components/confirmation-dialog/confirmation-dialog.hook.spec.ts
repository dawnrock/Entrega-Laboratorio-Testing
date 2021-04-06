import { renderHook, act } from '@testing-library/react-hooks';
import { Lookup } from 'common/models';

import { useConfirmationDialog } from './confirmation-dialog.hook';

const localItem: Lookup = {
  id: '1',
  name: 'Manu',
};

describe('src/common/components/confirmation-dialog/confirmation-dialog.hook spec', () => {
  it('It should create a empty lookup on "itemToDelete" when click onAccept', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onAccept();
    });

    expect(result.current.itemToDelete).toEqual({
      id: '',
      name: '',
    });
  });

  it('It should set the state to false when click onClose', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onClose();
    });

    expect(result.current.isOpen).toEqual(false);
  });

  it('It should to change the state isOpen to true when open Dialog with a correct Lookup and set the actual item to itemToDelete', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(localItem);
    });

    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(localItem);
  });
});
