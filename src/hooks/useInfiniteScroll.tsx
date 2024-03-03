import { useEffect } from "react";

interface UseInfiniteScrollProps {
  refetch: () => void;
  threshold?: number;
  isFetching: boolean;
}

const useInfiniteScroll = ({
  refetch,
  threshold = 300,
  isFetching,
}: UseInfiniteScrollProps) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - threshold
      ) {
        if (isFetching) return;
        refetch();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isFetching, refetch, threshold]);

  return [isFetching];
};

export default useInfiniteScroll;
