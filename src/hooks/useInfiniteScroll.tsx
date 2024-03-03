import { useState, useEffect, useRef } from "react";

// export function useInfiniteScroll(callback) {
// 	const [isFetching, setIsFetching] = useState(false);

// 	useEffect(() => {
// 		window.addEventListener("scroll", handleScroll);
// 		return () => window.removeEventListener("scroll", handleScroll);
// 	}, []);

// 	useEffect(() => {
// 		if (!isFetching) return;
// 		callback();
// 	}, [isFetching]);

// 	function handleScroll() {
// 		if (
// 			window.innerHeight + document.documentElement.scrollTop !==
// 				document.documentElement.offsetHeight ||
// 			isFetching
// 		)
// 			return;
// 		setIsFetching(true);
// 	}

// 	return [isFetching, setIsFetching];
// }

// function useInfiniteScroll(fetch, length) {
// 	const [canScroll, setCanScroll] = useState(true);
// 	const containerRef = useRef();

// 	useEffect(() => {
// 		const container = containerRef.current;

// 		const handleScroll = () => {
// 			console.log(
// 				canScroll,
// 				container.scrollTop === container.scrollHeight - container.offsetHeight
// 			);

// 			if (
// 				canScroll &&
// 				container.scrollTop === container.scrollHeight - container.offsetHeight
// 			) {
// 				fetch();
// 				console.log("asdadasd");

// 				setCanScroll(false);
// 			}
// 		};
// 		if (container) container.addEventListener("scroll", handleScroll);

// 		return () => {
// 			if (container) container.removeEventListener("scroll", handleScroll);
// 		};
// 	}, [canScroll, fetch]);

// 	useEffect(() => {
// 		setCanScroll(true);
// 	}, [length]);

// 	return containerRef;
// }

// export default useInfiniteScroll;

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
