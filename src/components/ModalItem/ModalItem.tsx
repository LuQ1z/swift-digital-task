import { Statistics } from "../ImageStatsGallery/ImageStatsGallery.styles";
import { ImageSize } from "./ModalItem.styles";

interface ModalItemProps {
	imgURL: string;
	downloads?: number | undefined;
	views?: number | undefined;
	likes?: number;
}

const ModalItem: React.FC<ModalItemProps> = ({
	imgURL,
	downloads,
	views,
	likes,
}) => {
	return (
		<ImageSize>
			<img src={imgURL} alt="" />
			{(downloads || views || likes) && (
				<Statistics>
					<p>Downloads: {downloads}</p>
					<p>Views: {views}</p>
					<p>Likes: {likes}</p>
				</Statistics>
			)}
		</ImageSize>
	);
};

export default ModalItem;
