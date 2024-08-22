import type Activity from '../content-types/activity';
import Article from '../content-types/article';
import ContentLoader from './content-loader';

class ContentLibrary {
	loader: ContentLoader;
	articles: Map<string, Article> = new Map<string, Article>();
	activities: Map<string, Activity> = new Map<string, Activity>();

	getArticle(id: string) {
		return this.articles.get(id);
	}

	getActivity(id: string) {
		return this.activities.get(id);
	}

	async initialize() {
		const articles = await this.loader.loadArticles();
		articles.forEach((article) => {
			this.articles.set(article.id, article);
		});
		const activities = await this.loader.loadActivities();
		activities.forEach((activity) => {
			this.activities.set(activity.id, activity);
		});
	}

	constructor() {
		this.loader = new ContentLoader();
	}
}

export default ContentLibrary;
