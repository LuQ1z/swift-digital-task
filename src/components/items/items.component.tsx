import React, { useEffect, useState } from "react";
import {
	Container,
	Image,
	Modal,
	ModalBackground,
	Statistics,
} from "./items.styles";

interface GridItemProps {
	imgURL: string;
	downloads: number;
	views: number;
	likes: number;
	gay: string;
}

const GridItem: React.FC<GridItemProps> = ({
	imgURL,
	downloads,
	views,
	likes,
	gay,
}) => {
	const [showModal, setShowModal] = useState(false);

	const openModal = () => {
		setShowModal(true);
		document.body.style.overflow = "hidden";
	};
	const closeModal = () => {
		setShowModal(false);
		document.body.style.overflow = "auto";
	};

	return (
		<>
			<Image className="grid-item" onClick={openModal}>
				{/* <img src={imgURL} alt="" /> */}
				{gay}
			</Image>

			{showModal && (
				<ModalBackground onClick={closeModal}>
					<Modal>
						<img src={imgURL} alt="" />
						<Statistics>
							<p>Downloads: {downloads}</p>
							<p>Views: {views}</p>
							<p>Likes: {likes}</p>
						</Statistics>
					</Modal>
				</ModalBackground>
			)}
		</>
	);
};

interface ItemsProps {
	items: {
		id: string;
		links: { download: string };
		downloads: number;
		views: number;
		likes: number;
		gay: string;
	}[];
}

const Items: React.FC<ItemsProps> = ({ items }) => {
	return (
		<Container>
			{(items ?? []).map((item) => {
				return (
					<GridItem
						key={item.slug}
						imgURL={item.links.download}
						gay={item.slug}
						downloads={item.downloads}
						views={item.views}
						likes={item.likes}
					/>
				);
			})}
		</Container>
	);
};

export default Items;
