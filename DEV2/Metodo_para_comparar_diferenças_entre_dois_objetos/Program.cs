using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
namespace ConsoleApp1
{

    public class Program
    {
        public string ObjName { get; set; }
        public string Property { get; set; }
        public string OldValue { get; set; }
        public string NewValue { get; set; }

        /// <summary>
        /// Método para comparar diferenças entre dois objetos.
        /// </summary>
        /// <typeparam name="T1">Tipo do Objeto</typeparam>
        /// <param name="oldObj">Objeto Original</param>
        /// <param name="newObj">Objeto que você quer comparar</param>
        /// <param name="typeObj">Opcional, é usado quando a chamada é feita recursivamente</param>
        /// <returns>Array de AlteracaoLog</returns>
        ///         
        static void Main(string[] args)
        {
            Class1 c1 = new Class1();
            c1.Nome = "teste";
            c1.idade = 12;


            Class1 c2 = new Class1();
            c2.Nome = "teste2";
            c2.idade = 124;


            var a = Program.Diff<Class1>(c1, c2);

            foreach (var i in a)
            {
                Console.WriteLine(i.ObjName);
                Console.WriteLine(i.Property);
                Console.WriteLine(i.OldValue);
                Console.WriteLine(i.NewValue);
            }
            Console.WriteLine("Hello World!");
        }


        public static Program[] Diff<T>(T oldObj, T newObj, Type typeObj = null)
        {
            var diffList = new List<Program>();

            var type = typeObj ?? typeof(T);

            foreach (var prop in type.GetProperties())
            {
                var _newValue = prop.GetValue(newObj, null);
                var _oldValue = prop.GetValue(oldObj, null);

                // Caso o objeto tenha uma propriedade que implemente a Interface "IBase"
                // Verifico as alterações desse objeto recursivamente e adiciono na Lista.
                if (prop.PropertyType.GetInterfaces().Contains(typeof(Class1)))
                {
                    var tes = Diff(_oldValue, _newValue, prop.PropertyType);
                    diffList.AddRange(tes);
                }
                else
                {
                    if (!_newValue.Equals(_oldValue))
                    {
                        diffList.Add(new Program
                        {
                            ObjName = type.Name,
                            Property = prop.Name,
                            OldValue = _oldValue.ToString(),
                            NewValue = _newValue.ToString()
                        });
                    }
                }
            }
            return diffList.ToArray();
        }
    }
}





