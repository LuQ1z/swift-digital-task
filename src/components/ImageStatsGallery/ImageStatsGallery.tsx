import React from "react";
import { Container } from "./ImageStatsGallery.styles";
import { IData } from "../../types";
import { ImageStatsItem } from "../ImageStatsItem/ImageStatsItem";

interface ItemsProps {
	items: IData[];
	currentPhotoWithStats: IData | undefined;
	setCurrentPhotoId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const ImageStatsGallery: React.FC<ItemsProps> = ({
	items,
	currentPhotoWithStats,
	setCurrentPhotoId,
}) => {
	return (
		<Container>
			{(items ?? []).map((item) => {
				return (
					<ImageStatsItem
						key={item.id}
						id={item.id}
						imgURL={item.urls.regular}
						likes={item.likes}
						thumb={item.urls.thumb}
						currentPhotoWithStats={currentPhotoWithStats}
						setCurrentPhotoId={setCurrentPhotoId}
					/>
				);
			})}
		</Container>
	);
};

export default ImageStatsGallery;
