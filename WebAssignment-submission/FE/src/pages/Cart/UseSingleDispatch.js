import { useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';

export function useSingleDispatch() {
    const dispatch = useDispatch();
    const actionRef = useRef(null);

    const singleDispatch = useCallback((action) => {
        if (!actionRef.current) {
            actionRef.current = action;
            dispatch(action);
            actionRef.current = null;
        }
    }, [dispatch]);

    return singleDispatch;
}
