using System;

namespace ConsoleApp1
{

    class Pessoa
    {

        public int? Idade;

    }
    class Program
    {
        static void Main(string[] args)
        {
            var Pe = new Pessoa();


            Console.WriteLine(Pe.Idade);
        }
    }
}
