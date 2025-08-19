import { useCallback, useEffect, useRef, useState } from "react";

export function useFetch<T>(url: string, options: RequestInit = {}) {
  const [data, setData] = useState<T | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => controllerRef.current?.abort();
  }, []);

  const fetchData = useCallback(async () => {
    controllerRef.current = new AbortController();

    try {
      setPending(true);
      setError("");

      const res: Response = await fetch(url, {
        ...options,
        signal: controllerRef.current.signal,
      });

      if (!res.ok)
        throw new Error(
          `Error occured while fetching data from ${url}, ${res.statusText}`
        );

      const result = await res.json();

      setPending(false);
      setData(result as T);
    } catch (error) {
      setPending(false);
      setError((error as Error).message);
      setData(null);
    }
  }, [url, options]);

  return { data, pending, error, refetch: fetchData };
}
