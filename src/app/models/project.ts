export class Project {
    constructor(
        public _id: String,
        public name: String,
        public description: String,
        public category: String,
        public langs: String,
        public year: number,
        public image: String,
        public linkApp: String,
        public linkCode: String,
    ) { }
}