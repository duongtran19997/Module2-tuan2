import {Node} from "./Node";

export class LinkedList<T>{
    head:Node<T>
    tail:Node<T>
    size:number
    constructor() {
        this.head=null
        this.tail=null
        this.size=0
    }
    insertFirstNode(data:T):void{
        let node = new Node(data)
        node.next=this.head
        this.head=node
            if(!this.tail){
                this.tail=node
            }
            this.size++
    }
    insertLastNode(data:T):void{
        let node = new Node(data)
        this.tail.next=node
        this.tail = node
            if(!this.head){
               this.insertFirstNode(data)
            }
            this.size++
    }
    getSize():number{
        return this.size;
    }
    readList():T[]{
        let listData=[]
        let currentData= this.head;
        while (currentData!==null){
            listData.push(currentData.readData());
            currentData = currentData.next;
        }
        return listData;
    }
}