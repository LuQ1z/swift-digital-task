import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

import Items from "../../components/items/items.component";
import Search from "../../components/searchBar/searchBar.component";
import { Container } from "./home.styles";
import { useDebounce } from "../../hooks/useDebounce";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

const Home: React.FC = ({ setSearchHistory }) => {
	const [search, setSearch] = useState("");
	const [shouldFetch, setShouldFetch] = useState(true);
	const debouncedSearch = useDebounce(search, 1000);
	const queryClient = useQueryClient();

	const [pageNumber, setPageNumber] = useState(1);

	const INITIAL_URL = `https://api.unsplash.com/photos?order_by=popular&page=1&client_id=${
		import.meta.env.VITE_API_KEY
	}&per_page=20`;

	const URL_WITH_PAGE_NUMBER = `https://api.unsplash.com/photos?order_by=popular&page=${pageNumber}&client_id=${
		import.meta.env.VITE_API_KEY
	}&per_page=20`;

	const URL_WITH_SEARCH_PARAM = `https://api.unsplash.com/search/photos?query=${debouncedSearch}&client_id=${
		import.meta.env.VITE_API_KEY
	}&per_page=20&page=${pageNumber}`;

	useEffect(() => {
		setPageNumber(1);
	}, [search]);

	const fetchPhotos = async () => {
		try {
			const response = await fetch(
				search ? URL_WITH_SEARCH_PARAM : URL_WITH_PAGE_NUMBER
			);
			const data = await response.json();
			setSearchHistory((prev) => {
				const filteredItems = prev.filter((item) => item !== search && !!item);
				return [...filteredItems, search];
			});
			setShouldFetch(false);
			setPageNumber((oldValue) => oldValue + 1);
			// Get the cached items
			const cachedItems =
				(queryClient.getQueryData(["items", debouncedSearch]) as string[]) ??
				[];
			const items = Array.isArray(data) ? data : data?.results;

			// Return the accumulated items
			console.log(data.length);
			return [...cachedItems, ...items];

			// return data;
		} catch (error) {
			throw new Error("Failed to fetch photos");
		}
	};

	const { data, error, refetch, isFetching } = useQuery({
		queryKey: ["items", debouncedSearch],
		staleTime: Infinity,
		queryFn: fetchPhotos,
	});

	useEffect(() => {}, [data]);

	const fetchMore = async () => {
		const response = await fetch(INITIAL_URL);
	};

	useInfiniteScroll({ refetch, isFetching });
	console.log(isFetching);

	// const infiniteScrollRef = useInfiniteScroll(refetch, data?.length);

	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		// <div ref={infiniteScrollRef}>
		<Container>
			<Search onSearch={onSearch} search={search} />
			<Items items={data} />
		</Container>
		// </div>
	);
};

export default Home;
