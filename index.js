// que 1 
// Delete the elements in an linked list whose sum is equal to zero





// que 2 
// Reverse a linked list in groups of given size
var head; 
 
     class Node {
            constructor(val) {
                this.data = val;
                this.next = null;
            }
        }
 
    function reverse(head , k) {
        if (head == null)
            return null;
        var current = head;
        var next = null;
        var prev = null;
 
        var count = 0;
 
    
        while (count < k && current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count++;
        }
 
      
        if (next != null)
            head.next = reverse(next, k);
 
        return prev;
    }
 
   
    function push(new_data) {
       
        new_node = new Node(new_data);
        new_node.next = head;
        head = new_node;
    }
    function printList() {
        temp = head;
        while (temp != null) {
            document.write(temp.data + " ");
            temp = temp.next;
        }
        document.write("<br/>");
    }
        push(9);
        push(8);
        push(7);
        push(6);
        push(5);
        push(4);
        push(3);
        push(2);
        push(1);
        
        console.log("Given Linked List<br/>");
        printList();
        head = reverse(head, 3);
        console.log("Reversed list<br/>");
        printList();

       
       
       
        // que 3 
        // Merge a linked list into another linked list at alternate positions.

        class Node
{
    constructor()
    {
        this.data = 0;
        this.next = null;
    }
};
 
function push(head_ref, new_data)
{
    var new_node = new Node();
    new_node.data = new_data;
    new_node.next = (head_ref);
    (head_ref) = new_node;
    return head_ref;
 
}


function printList(head)
{
    var temp = head;
    while (temp != null)
    {
        document.write( temp.data + " ");
        temp = temp.next;
    }
    document.write("<br>");
}
 

function merge(p, q)
{
    var p_curr = p, q_curr = q;
    var p_next, q_next;
 
 
    while (p_curr != null &&  q_curr != null)
    {
     
        p_next = p_curr.next;
        q_next = q_curr.next;
 
      
        q_curr.next = p_next; 
        p_curr.next = q_curr; 
 
      
        p_curr = p_next;
        q_curr = q_next;
    }
 
    q = q_curr;
    return q;
}
var p = null, q = null;
p = push(p, 3);
p = push(p, 2);
p = push(p, 1);
console.log( "First Linked List:<br>");
printList(p);
q = push(q, 8);
q = push(q, 7);
q = push(q, 6);
q = push(q, 5);
q = push(q, 4);
console.log( "Second Linked List:<br>");
printList(q);
q = merge(p, q);
console.log( "Modified First Linked List:<br>");
printList(p);
console.log( "Modified Second Linked List:<br>");
printList(q);
 


// que 4 
// In an array, Count Pairs with given sum

function getPairsCount(arr, n, sum)
{
    let count = 0; 
 
   
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
 
    return count;
}
let arr = [ 1, 5, 7, -1, 5 ];
let n = arr.length;
let sum = 6;
console.log("Count of pairs is "
    + getPairsCount(arr, n, sum));
 

    
    // que 5 
    // Find duplicates in an array

    let numRay = [ 0, 4, 3, 2, 7, 8, 2, 3, 1 ];
    let arr_size = numRay.length;
    
    
  
    for (let i = 0; i < arr_size; i++) {
        numRay[numRay[i] % arr_size]
            = numRay[numRay[i] % arr_size] + arr_size;
    }
    console.log("The repeating elements are : " + "</br>");
    for (let i = 0; i < arr_size; i++) {
        if (numRay[i] >= arr_size * 2) {
            console.log(i + " " + "</br>");
        }
    }

//  que 6 
// Find the Kth largest and Kth smallest number in an array
function kthSmallest(arri, nume, k)
{
    arri.sort((a,b) => a-b);
    return arr[k - 1];
}
let arri = [ 12, 3, 5, 7, 19 ];
let nume = arr.length, k = 2;
console.log("K'th smallest element is " + kthSmallest(arri, nume, k));



// que 7 
// Move all the negative elements to one side of the array

function move(arr){
    arr.sort();
}

let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
move(arr);
for (let e of arr)
    console.log(e , " ");

   
   
   
    // que 8 
    // 8. Reverse a string using a stack data structure
let strforRev = "nitinbarde";
const reverseStr = (string) => {
  let stack = new Stack();
  let revStr = "";
  for (let i = string.length - 1; i > -1; i--) {
    stack.push(string[i]);
  }
  for (j = 0; j < stack.length; j++) {
    revStr += stack.items[j];
  }
  return revStr;
};
console.log(reverseStr(strforRev));

   


// que 9 
    // Evaluate a postfix expression using stack
    function postfixEval(postfixArray) {
        var stack = [];
      
        for (element of postfixArray) {
          console.log("element: " + element);
      
          if (isNaN(element)) {
            var x = stack.pop();
            var y = stack.pop();
            console.log("var x/y: " + x + " " + y + " element: " + element);
            if (element == "+") {
              result = y + x;
              stack.push(y + x);
            } else if (element == "-") {
              stack.push(y - x);
            } else if (element == "*") {
              stack.push(y * x);
            } else if (element == "/") {
              stack.push(y / x);
            }
          } else {
            stack.push(parseFloat(element));
          }
        }
      
        var returnValue = null;
        while (stack.length > 0) {
          console.log(stack);
          var element = stack.pop();
          if (isNaN(element)) {
            continue;
          } else {
            returnValue = element;
          }
        }
        return returnValue;
      }
      
      postfixEval(["7.7", "7", "+"]);

    
    // que 10 
    class Queue{
     
        constructor()
        {
            this.s1 = [];
            this.s2 = [];
        }
         
        enQueue(x)
        {
             
          
            while (this.s1.length != 0)
            {
                this.s2.push(this.s1.pop());
             
            }
         
           
            this.s1.push(x);
         
          
            while (this.s2.length != 0)
            {
                this.s1.push(this.s2.pop());
             
            }
        }
         
        
        deQueue()
        {
            if (this.s1.length == 0)
            {
                document.write("Q is Empty");
            }
         
            let x = this.s1[this.s1.length - 1];
            this.s1.pop();
            return x;
        }
        }
        let q = new Queue();
        q.enQueue(1);
        q.enQueue(2);
        q.enQueue(3);
         
        console.log(q.deQueue() + "<br>");
        console.log(q.deQueue() + "<br>");
        console.log(q.deQueue() + "<br>");
 
             
            
         
        

    
 
   
 

 
 
 
 
 
  
 
 