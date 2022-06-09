using System;

namespace teste
{

    public class Domain
    {
        public int MyProperty { get; set; }
    }
    public class Kingdom 
    {
    }
    public class Phylum 
    {
    }

    public class Class : Domain, Kingdom
    {
    }




    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
        }
    }
}
