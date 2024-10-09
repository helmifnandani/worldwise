import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  // Custom hooks on top of custom hooks is perfectly fine

  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return [lat, lng];
}
