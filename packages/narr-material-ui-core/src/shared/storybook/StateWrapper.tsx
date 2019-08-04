import {
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';

interface ChildrenParams {
  state: unknown;
  setState: Dispatch<SetStateAction<unknown>>;
}

interface StateWrapperProps {
  initialState?: unknown;
  children: (childrenParams: ChildrenParams) => ReactNode;
  onUnmount?: VoidFunction;
}

export const StateWrapper = (props: StateWrapperProps) => {
  const { children, initialState, onUnmount } = props;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    return function cleanup() {
      if (onUnmount) {
        onUnmount();
      }
    };
  });

  return children({
    state,
    setState,
  });
};
