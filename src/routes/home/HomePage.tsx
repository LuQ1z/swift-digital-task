import ImageStatsGallery from "../../components/ImageStatsGallery/ImageStatsGallery";
import Search from "../../components/searchBar/SearchBar";
import { Container } from "./home.styles";
import { useQueryData } from "../../hooks/useQueryData";

interface IProps {
	setSearchHistory: React.Dispatch<React.SetStateAction<string[]>>;
}

const Home: React.FC<IProps> = ({ setSearchHistory }) => {
	const { search, setSearch, currentPhotoWithStats, setCurrentPhotoId, data } =
		useQueryData(setSearchHistory);

	const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	return (
		<Container>
			<Search onSearch={onSearch} search={search} />
			<ImageStatsGallery
				items={data ?? []}
				currentPhotoWithStats={currentPhotoWithStats}
				setCurrentPhotoId={setCurrentPhotoId}
			/>
		</Container>
	);
};

export default Home;
