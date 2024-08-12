import { useEffect, useRef } from "react";

export function useEffectAfterMount(callBack, deps) {
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) return callBack();
    isMounted.current = true;
  }, deps);
}
