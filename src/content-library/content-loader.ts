import Activity from '../content-types/activity';
import Article from '../content-types/article';
const loadedActivities = import.meta.glob('../content/activities/*', { eager: true });
const loadedArticles = import.meta.glob('../content/articles/*', { eager: true });
import.meta.glob('../scripts/*', { eager: true });

class ContentLoader {
	async loadArticles(): Promise<Article[]> {
		const articles: Article[] = [];
		Object.entries(loadedArticles).forEach(([, definition]) => {
			const article = (definition as Record<string, Article>).default;
			articles.push(article);
		});
		return articles;
	}

	async loadActivities(): Promise<Activity[]> {
		const activities: Activity[] = [];
		for (let i = 0; i < Object.entries(loadedActivities).length; i++) {
			const module: [string, unknown] = Object.entries(loadedActivities)[i];
			const rawActivity = (module[1] as Record<string, Activity>).default;
			const importedScript = await import(rawActivity.scriptPath as string);
			rawActivity.apply = importedScript.default;
			activities.push(rawActivity);
		}
		return activities;
	}

	constructor() {}
}

export default ContentLoader;
