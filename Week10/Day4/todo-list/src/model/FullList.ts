import  ListItem , { Item } from './ListItem';

export interface List {
    list: ListItem[];
    addItem(itemObj:ListItem): void; 
    removeItem(id:string): void;
    load(): void; //When we load from localStorage
    save(): void; //When we save to localStorage
    clearlist(): void;
}

export default class FullList implements List {
    private _list: ListItem[] = [];
    static instance: FullList = new FullList(); //singleton

    constructor(list: ListItem[] = []) {
        this._list = list;
    }

    get list(): ListItem[] {
        return this._list;
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj);
    }
    
    removeItem(id: string): void {
        
    }
    load(): void {} 
    save(): void {
        
    }
    clearlist(): void {
        
    }
}
