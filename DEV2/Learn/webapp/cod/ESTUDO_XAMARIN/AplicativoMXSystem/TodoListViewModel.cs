using System;
using System.Collections.Generic;
using System.Text;
using System.Collections.ObjectModel;
using System.Windows.Input;
using Xamarin.Forms;

namespace AplicativoMXSystem
{
    public class TodoListViewModel
    {
        public ObservableCollection<TodoItem> TodoItems { get; set; }

        public TodoListViewModel()
        {
            TodoItems = new ObservableCollection<TodoItem>();

        }

        public ICommand AddTodoCommand => new Command(AddTodoItem);
        public string NewTodoInput { get; set; }
        void AddTodoItem()
        {
            TodoItems.Add(new TodoItem(NewTodoInput, false));
            NewTodoInput = "";
        }



        public ICommand RemoveTodoCommand => new Command(RemoveTodoItem);
        void RemoveTodoItem(object o)
        {
            TodoItem todoItemBeingRemoved = o as TodoItem;
            TodoItems.Remove(todoItemBeingRemoved);
        }




    }
}
