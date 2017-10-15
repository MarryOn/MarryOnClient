/* SystemJS module definition */
declare var module: NodeModule;

interface NodeModule {
	id: string;
}

interface Size {
	height: number,
	width: number
}

interface CustomImage {
	filename: string,
	commentCount: number,
	url_thumbnail: string,
	url_large: string,
	size: Size
}

interface WeddingGalleryData {
	[name: string]: CustomImage
}

interface AbstractComment {
	author: string;
	content: string;
	createdAt: string;
	id: number;
	target: string;
}