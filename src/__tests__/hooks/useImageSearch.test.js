import { renderHook, act } from '@testing-library/react-hooks';
import { useImageSearch } from '../../hooks';

describe('Image Search Custom Hook', () => {
    test('useImageSearch after a successful response', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useImageSearch("cat", 1) );

        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBe(false);
        expect(result.current.images).toHaveLength(0);
        expect(result.current.hasMore).toBe(false);

        await waitForNextUpdate();

        expect(result.current.loading).toBe(false);
        expect(result.current.error).toBe(false);
        expect(result.current.images).toHaveLength(10);
        expect(result.current.hasMore).toBe(true);
    });

    test('useImageSearch after an error response', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useImageSearch() );

        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBe(false);
        expect(result.current.images).toHaveLength(0);
        expect(result.current.hasMore).toBe(false);

        await waitForNextUpdate();

        expect(result.current.loading).toBe(true);
        expect(result.current.error).toBe(true);
        expect(result.current.images).toHaveLength(0);
        expect(result.current.hasMore).toBe(false);
    });
});
