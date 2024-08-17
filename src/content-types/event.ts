import Article from "./article";
import BaseContentType from "./base-content";
import UIData from "./ui-data";

// At the start of the month, an event may occur. It is displayed to the player through a newspaper article. 
class Event extends BaseContentType{
    // The article which is displayed when the event occurs.
    article: Article;

    // Apply any state changing effects of the event.
    apply: (/* player */) => void; 

    constructor(
        id: string,
        uiData: UIData,
        article: Article,
        applyCallback: () => void
    ) {
        super(id, uiData);
        this.article = article;
        this.apply = applyCallback;
    }
}

export default Event;
