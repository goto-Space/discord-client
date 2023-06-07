import { useCallback } from 'react';

export const useScroll = (
  targetRef,
) => {
  const scrollTo = useCallback(
    (options) => targetRef.current?.scrollTo(options),
    [targetRef],
  );

  const scrollToBottom = useCallback(
    ({ smooth = false } = { smooth: false }) => {
      targetRef.current?.scrollTo({
        top: targetRef.current?.scrollHeight,
        behavior: smooth ? 'smooth' : 'auto',
      });
    },
    [targetRef],
  );

  return { scrollTo, scrollToBottom };
};
