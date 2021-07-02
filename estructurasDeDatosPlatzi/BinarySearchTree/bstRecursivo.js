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
    insert(value) {
        if (value > this.value) {
            if(this.right !== null){
                this.right.insert(value);
            } else {
                this.right = new binarySearchTree(value);
            }
        }
        if (value < this.value){
            if(this.left !== null){
                this.left.insert(value);
            } else {
                this.left = new binarySearchTree(value);
            }
        }
    }
    
}

const arbol = new binarySearchTree();