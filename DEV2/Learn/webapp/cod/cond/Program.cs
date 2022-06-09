using System;
using CrashMemory;

namespace Desktop
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            AlteracaoLog a = new AlteracaoLog();
            Teste t = new Teste();

            t.MyProperty = 22;


            Teste t2 = new Teste();

            t2.MyProperty = 22;

            var tes = a.Diff(t, t2);

            foreach(var da in tes)
            {
                Console.WriteLine(da.NewValue);
            }
        }
    }
}
