import { useContext } from "react";
import { useQueryClient } from "@tanstack/react-query";
import ModalContext from "../../context/ModalContext";
import { IData } from "../../types";
import ModalItem from "../../components/ModalItem/ModalItem";
import { Container, HistoryItem, HistoryImage } from "./history.styles";

interface HistoryProps {
	searchHistory: string[];
}

const HistoryPage: React.FC<HistoryProps> = ({ searchHistory }) => {
	const queryClient = useQueryClient();
	const getCachedItem = (item: string): IData[] | undefined => {
		return queryClient.getQueryData(["items", item]);
	};

	const { showModal } = useContext(ModalContext);

	return (
		<Container>
			{searchHistory.length ? (
				searchHistory.map((item) => {
					return (
						<HistoryItem
							onClick={() => {
								showModal(
									<Container>
										{(getCachedItem(item) ?? []).map((cachedItem) => {
											const { id, urls } = cachedItem;
											return (
												<HistoryImage key={id}>
													<ModalItem imgURL={urls.regular} />
												</HistoryImage>
											);
										})}
									</Container>
								);
							}}
						>
							{item}
						</HistoryItem>
					);
				})
			) : (
				<div>Nothing to show here</div>
			)}
		</Container>
	);
};

export default HistoryPage;
