export interface IData {
	id: string;
	slug: string;
	likes: number;
	views: { total: number };
	downloads: { total: number };
	urls: { regular: string; thumb: string };
}
