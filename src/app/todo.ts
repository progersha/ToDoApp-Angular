export class Todo {
    id: number;
    title: string = '';
    complete: boolean = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}

let todo = new Todo({
    title: 'Drink cofee',
    complete: false
});
