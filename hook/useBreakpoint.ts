import { useMemo } from 'react';
import { useViewport } from './ViewportProvider';

export const useBreakpoint = (breakpoint: number) => {
  const {width} = useViewport()
  const isBreakPoint = useMemo(() => {
    return width < breakpoint
  }, [width, breakpoint])
  return isBreakPoint
}