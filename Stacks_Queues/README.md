# Stacks & Queues

## Time complexity

| **Stacks** | LIFO | **Queues** | FIFO |
| :--------: | :--: | :--------: | :--: |
|   lookup   | O(n) |   lookup   | O(n) |
|    pop     | O(1) |  enqueue   | O(1) |
|    push    | O(1) |  dequeue   | O(1) |
|    peek    | O(1) |    peek    | O(1) |

## Comparison

|        **Basis for comparison**        	|                                                                       **Stack**                                                                       	|                                                                                                     **Queue**                                                                                                     	|
|:--------------------------------------:	|:-----------------------------------------------------------------------------------------------------------------------------------------------------:	|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:	|
| **Principle**                          	| It follows the principle LIFO (Last In- First Out), which implies that the element which is inserted last would be the first one to be deleted.       	| It follows the principle FIFO (First In -First Out), which implies that the element which is added first would be the first element to be removed from the list.                                                  	|
| **Structure**                          	| It has only one end from which both the insertion and deletion take place, and that end is known as a top.                                            	| It has two ends, i.e., front and rear end. The front end is used for the deletion while the rear end is used for the insertion.                                                                                   	|
| **Number of pointers used**            	| It contains only one pointer known as a top pointer. The top pointer holds the address of the last inserted or the topmost element of the stack.      	| It contains two pointers front and rear pointer. The front pointer holds the address of the first element, whereas the rear pointer holds the address of the last element in a queue.                             	|
| **Operations performed**               	| It performs two operations, push and pop. The push operation inserts the element in a list while the pop operation removes the element from the list. 	| It performs mainly two operations, enqueue and dequeue. The enqueue operation performs the insertion of the elements in a queue while the dequeue operation performs the deletion of the elements from the queue. 	|
| **Examination of the empty condition** 	| If top==-1, which means that the stack is empty.                                                                                                      	| If front== -1 or front = rear+1, which means that the queue is empty.                                                                                                                                             	|
| **Examination of full condition**      	| If top== max-1, this condition implies that the stack is full.                                                                                        	| If rear==max-1, this condition implies that the stack is full.                                                                                                                                                    	|
| **Variants**                           	| It does not have any types.                                                                                                                           	| It is of three types like priority queue, circular queue and double ended queue.                                                                                                                                  	|
| **Implementation**                     	| It has a simpler implementation.                                                                                                                      	| It has a comparatively complex implementation than a stack.                                                                                                                                                       	|
| **Visualization**                      	| A Stack is visualized as a vertical collection.                                                                                                       	| A Queue is visualized as a horizontal collection.                                                                                                                                                                 	|

## Applications

### Stacks

- Some CPUs have their entire assembly language based on the concept of performing operations on registers that are stored in a stack.
- `Stack` structure is used in the C++ run-time system.

### Queue

- `Queue` data structure is implemented in the hardware microinstructions inside a CPU.
- `Queue` structure is used in most operating systems.
