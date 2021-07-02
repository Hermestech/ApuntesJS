class Node{
    constructor (value){
        this.left = null;
        this.right = null;
        this.value = value; 
    }
}

class binarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        const newNode = new Node(value);
        
        if(this.root === null){
            this.root = newNode;
        } 
        else if (this.root === value){
            return "Ya existe este valor"
        }
        else {
            let currentNode = this.root;
            while(true){
                if(value < currentNode.value){
                    if(!currentNode.left){
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left
                } else {
                    if(!currentNode.right){
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
}

const tree = new binarySearchTree();