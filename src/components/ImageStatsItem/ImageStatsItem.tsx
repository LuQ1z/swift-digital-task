import { useContext } from "react";
import ModalContext from "../../context/ModalContext";
import { Image } from "../ImageStatsGallery/ImageStatsGallery.styles";
import ModalItem from "../ModalItem/ModalItem";
import { IData } from "../../types";

interface IProps {
	imgURL: string;
	likes: number;
	thumb: string;
	id: string;
	currentPhotoWithStats: IData | undefined;
	setCurrentPhotoId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const ImageStatsItem: React.FC<IProps> = ({
	imgURL,
	likes,
	thumb,
	id,
	currentPhotoWithStats,
	setCurrentPhotoId,
}) => {
	const { showModal } = useContext(ModalContext);


	return (
		<div>
			<Image
				onClick={() => {
					setCurrentPhotoId(id);
					showModal(
						<ModalItem
							imgURL={imgURL}
							likes={likes}
							downloads={currentPhotoWithStats?.downloads.total}
							views={currentPhotoWithStats?.views.total}
						/>
					);
				}}
			>
				<img src={thumb} alt="Image" />
			</Image>
		</div>
	);
};
