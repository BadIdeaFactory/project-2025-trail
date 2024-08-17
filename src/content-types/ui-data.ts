// UIData contains any data necessary to display the content to the player.
// Can include text, as well as e.g. icons or other visuals.
// That can be things like the title / content of a newspaper article.
class UIData {
    // A short name / title.
    name: string;

    // A long form description.
    description: string;

    constructor(
        name: string,
        description: string
    ) {
        this.name = name;
        this.description = description;
    }
}

export default UIData;
