import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { useImmobileList } from '../useImmobileList';
import * as ImmobileListRequest from '../../services/get';
import { mockImmobileList, getImmobileListlRequest } from './mock';

const getMockImmobileList = () =>
	jest.spyOn(ImmobileListRequest, 'getImmobileList').mockImplementationOnce(getImmobileListlRequest);

describe('useImmobileList tests', () => {

  it('The function getImmobileById set value in  currentImmobile', async () => {
    getMockImmobileList()
    const { result, waitForNextUpdate  } = renderHook(() => useImmobileList());

		const {getImmobileById, currentImmobile} = result.current;

    expect(getImmobileById).toBeDefined();
		expect(currentImmobile).toBeUndefined();
		act(() => getImmobileById(mockImmobileList[0].id));
    await waitForNextUpdate()
		expect(result.current.currentImmobile).toStrictEqual(mockImmobileList[0]);

  });


});