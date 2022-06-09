   string[] row1 = new string[] { "Meatloaf", "Main Dish", "ground beef",
        "**" };
    string[] row2 = new string[] { "Key Lime Pie", "Dessert", 
        "lime juice, evaporated milk", "****" };
    string[] row3 = new string[] { "Orange-Salsa Pork Chops", "Main Dish", 
        "pork chops, salsa, orange juice", "****" };
    string[] row4 = new string[] { "Black Bean and Rice Salad", "Salad", 
        "black beans, brown rice", "****" };
    string[] row5 = new string[] { "Chocolate Cheesecake", "Dessert", 
        "cream cheese", "***" };
    string[] row6 = new string[] { "Black Bean Dip", "Appetizer", 
        "black beans, sour cream", "***" };
    object[] rows = new object[] { row1, row2, row3, row4, row5, row6 };

    foreach (string[] rowArray in rows)
    {
        dataGridView1.Rows.Add(rowArray);
    }

https://cwi.com.br/blog/como-funcionam-as-apis-do-pix/

-----------------------------------------------------------------------------------------
tread
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskConsole
{
    class Program
    {
        static void Main(string[] args)
        {
            #region Task Part 1
            //Task t1 = new Task(Tarefa);
            //t1.Start();

            //Task t2 = Task.Run(Tarefa);

            //Task.Run(Tarefa);
            //Task.Factory.StartNew(Tarefa);

            //Task.Run(() => {
            //    for (int i = 0; i < 10; i++)
            //    {
            //        Console.WriteLine("tarefa anonima");
            //    }
            //});
            //for (int i = 0; i < 10; i++)
            //{
            //    Console.WriteLine("tarefa anonima");
            //}
            #endregion
            #region Task Part 2
            //Task[] tasks =
            //{
            //    Task.Factory.StartNew(()=>{                
            //        Console.WriteLine("Tarefa 1");
            //    }),
            //        Task.Factory.StartNew(()=>{
            //             Console.WriteLine("Tarefa 2");
            //        }),
            //            Task.Factory.StartNew(()=>{
            //                 Console.WriteLine("Tarefa 3");
            //            }),
            //                Task.Factory.StartNew(()=>{
            //                     Console.WriteLine("Tarefa 4");
            //                })
            //};
            //  Task.WaitAll(tasks);// executa a task primeiro e o resto espera
            //Task t1 = Task.Run(() => { Console.WriteLine("Comando #1"); });
            //Task t2 = Task.Run(() => { Console.WriteLine("Comando #2"); });
            //Task t3 = Task.Run(() => { Console.WriteLine("Comando #3"); });
            //Task.WaitAll(t1,t2,t3);//na ordem
            //Console.WriteLine("Principal");
            //Console.ReadKey();
            #endregion
            //Task<int> tarefa1 = Task.Factory.StartNew(() => Dobro(5));
            //Console.WriteLine(tarefa1.Result);
            //Console.ReadKey();  

            Task<int> tarefa1 = Task.Factory.StartNew(() =>
            {
               // return new Random().Next(10);//0 a 9
                return 5;
            });

            Task<int> tarefa2 = tarefa1.ContinueWith((num)=> {
                return num.Result * 2;
            });

            Task<string> tarefa3 = tarefa2.ContinueWith((num) =>
            {
                return "Valor final " + num.Result;
            });

            Console.WriteLine(tarefa3.Result);
            Console.ReadKey();
        }

        static int Dobro(int num)
        {
            return num * 2;
        }
        static private void Tarefa()
        {
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("Taregfa do task");
            }
        }
    }
}
