import { Container, Search } from "./history.styles";
import { useQueryClient } from "@tanstack/react-query";

interface HistoryProps {
	searchHistory: string;
}

const HistoryPage: React.FC<HistoryProps> = ({ searchHistory }) => {
	const queryClient = useQueryClient();
	const cachedItems = queryClient.getQueryData(["items", searchHistory[0]]);
	console.log(searchHistory, cachedItems);

	return (
		<Container>
			{searchHistory.map((item) => {
				return <div item={item} />;
			})}
		</Container>
	);
};

export default HistoryPage;
