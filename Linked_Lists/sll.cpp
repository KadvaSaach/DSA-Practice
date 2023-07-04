#include <bits/stdc++.h>
#include <string>
using namespace std;

struct node
{
    int data;
    struct node *next;
};
struct node *head = NULL;
struct node *current = NULL;

// display the list
void printList()
{
    struct node *p = head;
    cout << "\n[";

    // start from the beginning
    while (p != NULL)
    {
        cout << " " << p->data << " ";
        p = p->next;
    }
    cout << "]";
}

// insertion at the beginning
void insertatbegin(int data)
{

    // create a link
    struct node *lk = (struct node *)malloc(sizeof(struct node));
    lk->data = data;

    // point it to old first node
    lk->next = head;

    // point first to new first node
    head = lk;
    printList();
}

void insertatend(int data)
{

    // create a link
    struct node *lk = (struct node *)malloc(sizeof(struct node));
    lk->data = data;
    struct node *linkedlist = head;

    // point it to old first node
    while (linkedlist->next != NULL)
        linkedlist = linkedlist->next;

    // point first to new first node
    linkedlist->next = lk;
    printList();
}

void insertafternode(struct node *list, int data)
{
    struct node *lk = (struct node *)malloc(sizeof(struct node));
    lk->data = data;
    lk->next = list->next;
    list->next = lk;
    printList();
}

void deleteatbegin()
{
    head = head->next;
    printList();
}

void deleteatend()
{
    struct node *linkedlist = head;
    while (linkedlist->next->next != NULL)
        linkedlist = linkedlist->next;
    linkedlist->next = NULL;
    printList();
}

void deletenode(int key)
{
    struct node *temp = head, *prev;
    if (temp != NULL && temp->data == key)
    {
        head = temp->next;
        return;
    }

    // Find the key to be deleted
    while (temp != NULL && temp->data != key)
    {
        prev = temp;
        temp = temp->next;
    }

    // If the key is not present
    if (temp == NULL)
        return;

    // Remove the node
    prev->next = temp->next;
    printList();
}

void reverseList(struct node **head)
{
    struct node *prev = NULL, *cur = *head, *tmp;
    while (cur != NULL)
    {
        tmp = cur->next;
        cur->next = prev;
        prev = cur;
        cur = tmp;
    }
    *head = prev;

    printList();
}

int searchlist(int key)
{
    struct node *temp = head;
    while (temp != NULL)
    {
        if (temp->data == key)
        {
            return 1;
        }
        temp = temp->next;
    }
    return 0;
}

int main()
{
    insertatbegin(12);
    insertatbegin(22);
    insertatbegin(30);
    insertatbegin(44);
    insertatbegin(50);
    cout << "Linked List: ";

    // print list
    printList();

    int k = searchlist(44);
    if (k == 1)
        cout << "\nElement is found";
    else
        cout << "\nElement is not present in the list";

    reverseList(&head);
}