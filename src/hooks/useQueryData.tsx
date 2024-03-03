import { useQueryClient, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";
import useInfiniteScroll from "./useInfiniteScroll";
import { IData } from "../types";

interface QueryDataInterface {
	search: string;
	setSearch: (search: string) => void;
	data: IData[] | undefined;
	currentPhotoWithStats: IData | undefined;
	currentPhotoId: string | undefined;
	setCurrentPhotoId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const useQueryData = (
	setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>
): QueryDataInterface => {
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [search, setSearch] = useState<string>("");
	const [currentPhotoId, setCurrentPhotoId] = useState<string>();
	const debouncedSearch = useDebounce(search, 1000);

	const POPULAR_PHOTOS_API = `https://api.unsplash.com/photos?order_by=popular&client_id=${
		import.meta.env.VITE_API_KEY
	}&per_page=20&page=${pageNumber}`;

	const CURRENT_PHOTO_API = `https://api.unsplash.com/photos/${currentPhotoId}/statistics?client_id=${
		import.meta.env.VITE_API_KEY
	}`;

	const SEARCHED_PHOTOS_API = `https://api.unsplash.com/search/photos?query=${debouncedSearch}&client_id=${
		import.meta.env.VITE_API_KEY
	}&per_page=20&page=${pageNumber}`;

	const isSearchActive = !!debouncedSearch;

	const queryClient = useQueryClient();

	useEffect(() => {
		setPageNumber(1);
	}, [search]);

	const fetchPopularPhotos = async () => {
		try {
			const response = await fetch(POPULAR_PHOTOS_API);
			const data = await response.json();
			// Get the cached items
			const cachedItems =
				(queryClient.getQueryData(["popular"]) as IData[]) ?? [];

			setPageNumber((oldValue) => oldValue + 1);

			// Return the accumulated items
			return [...cachedItems, ...data];
		} catch (error) {
			throw new Error("Failed to fetch popular photos");
		}
	};

	const {
		data: popularPhotosData,
		isFetching: isFetchingPopularPhotos,
		refetch: refetchPopularPhotos,
	} = useQuery<IData[]>({
		queryKey: ["popular"],
		staleTime: Infinity,
		queryFn: fetchPopularPhotos,
		// only fetch when the search is empty
		enabled: !isSearchActive,
	});

	const fetchSearchedPhotos = async () => {
		try {
			const response = await fetch(SEARCHED_PHOTOS_API);
			const data = await response.json();
			setSearchHistory((prev) => {
				const filteredItems = prev.filter((item) => item !== search && !!item);
				return [...filteredItems, search];
			});
			setPageNumber((oldValue) => oldValue + 1);
			// Get the cached items
			const cachedItems =
				(queryClient.getQueryData(["items", debouncedSearch]) as string[]) ??
				[];
			const items = data?.results;

			// Return the accumulated items
			return [...cachedItems, ...items];

			// return data;
		} catch (error) {
			throw new Error("Failed to fetch photos");
		}
	};

	const {
		data: searchedPhotos,
		refetch: refetchSearchedPhotos,
		isFetching: isFetchingSearchedPhotos,
	} = useQuery<IData[]>({
		queryKey: ["items", debouncedSearch],
		staleTime: Infinity,
		queryFn: fetchSearchedPhotos,
		// only fetch when the search is not empty
		enabled: isSearchActive,
	});

	const fetchPhotoWithStats = async () => {
		try {
			const response = await fetch(CURRENT_PHOTO_API);
			const data = await response.json();
			return data;

			// return data;
		} catch (error) {
			throw new Error("Failed to fetch photos");
		}
	};

	const { data: currentPhotoWithStats } = useQuery<IData>({
		queryKey: ["photoStats", currentPhotoId],
		staleTime: Infinity,
		queryFn: fetchPhotoWithStats,
		enabled: !!currentPhotoId,
	});

	const infiniteScrollProps = isSearchActive
		? { refetch: refetchSearchedPhotos, isFetching: isFetchingSearchedPhotos }
		: { refetch: refetchPopularPhotos, isFetching: isFetchingPopularPhotos };

	useInfiniteScroll(infiniteScrollProps);

	return {
		search,
		setSearch,
		data: isSearchActive ? searchedPhotos : popularPhotosData,
		currentPhotoWithStats,
		currentPhotoId,
		setCurrentPhotoId,
	};
};
