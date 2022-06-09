using System; 
using System.Collections; 
using System.Collections.Generic; 
using System.Linq;
using System.Reflection; 
using System.Text; 
using System.Threading.Tasks;

namespace CrashMemory
{
    public class AlteracaoLog
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
        public AlteracaoLog[] Diff<T>(T oldObj, T newObj, Type typeObj = null)
        {
            var diffList = new List<AlteracaoLog>();
            var type = typeObj ?? typeof(T);
            //var reg = type.GetProperties(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static | BindingFlags.NonPublic | BindingFlags.GetField);
            //var reg2 = type.GetProperties();

            //var propriedades = type.GetMembers(BindingFlags.Public | BindingFlags.Instance | BindingFlags.Static | BindingFlags.GetField).Where(a => a.MemberType == MemberTypes.Property || a.MemberType == MemberTypes.Field);
            foreach (var prop in type.GetFields())
            {
                var nome = prop.Name;
                //verificando se é um array ou lista 
                if (prop.GetValue(newObj).GetType().IsGenericType && prop.GetValue(oldObj).GetType().IsGenericType)
                {
                    //Tipo da lista ou tipo da classe do objecto
                    Type tipo = (Type)GetGenericCollectionItemType(prop.GetValue(newObj).GetType());

                    var oldObjField = (IList)prop.GetValue(oldObj);
                    var newObjField = (IList)prop.GetValue(newObj);
                    var tipoObjeto = prop.GetValue(newObj).GetType();

                    var countNewObjField = (int)tipoObjeto.GetProperty("Count").GetValue(newObjField, null);
                    var countOldObjField = (int)tipoObjeto.GetProperty("Count").GetValue(oldObjField, null);


                    if (countNewObjField > countOldObjField)
                    {
                        for (int i = 0; i < countNewObjField; i++)
                        {
                            if (i >= countOldObjField)
                            {
                                var instanciaNula = Activator.CreateInstance(tipo);
                                diffList.AddRange(Diff(instanciaNula, newObjField[i], newObjField[i].GetType()));
                            }
                            else
                            {
                                diffList.AddRange(Diff(oldObjField[i], newObjField[i], newObjField[i].GetType()));
                            }
                        }
                    }
                    else
                        if (countOldObjField > countNewObjField)
                        {
                            for (int i = 0; i < countOldObjField; i++)
                            {
                                if (i >= countNewObjField)
                                {
                                    var instanciaNula = Activator.CreateInstance(tipo);
                                    diffList.AddRange(Diff(oldObjField[i], instanciaNula, oldObjField[i].GetType()));
                                }
                                else
                                {
                                    diffList.AddRange(Diff(oldObjField[i], newObjField[i], newObjField[i].GetType()));
                                }
                            }
                        }
                        else
                        {
                            for (int i = 0; i < countNewObjField; i++)
                            {
                                diffList.AddRange(Diff(oldObjField[i], newObjField[i], newObjField[i].GetType()));
                            }
                        }

                }
                else
                {
                    var _newValue = prop.GetValue(newObj);
                    var _oldValue = prop.GetValue(oldObj);
                    diffList.AddRange(Diff(_oldValue, _newValue, _oldValue.GetType()));
                }


            }






            foreach (var prop in type.GetProperties())
            {
                var _newValue = prop.GetValue(newObj, null);
                var _oldValue = prop.GetValue(oldObj, null);
                _newValue = _newValue == null ? "" : _newValue;

                if (!_newValue.Equals(_oldValue))
                {
                    diffList.Add(new AlteracaoLog
                    {
                        ObjName = type.Name,
                        Property = prop.Name,
                        OldValue = _oldValue == null ? "" : _oldValue.ToString(),
                        NewValue = _newValue == null ? "" : _newValue.ToString()
                    });
                }
                //}
            }
            return diffList.ToArray();
        }


        public List<AlteracaoLog> FieldChanged(Type type, object newObj, object oldObj)
        {

            var fields = type.GetFields();
            var diffList = new List<AlteracaoLog>();
            foreach (var prop in fields)
            {
                var _newValue = prop.GetValue(newObj);
                var _oldValue = prop.GetValue(oldObj);
                diffList.AddRange(Diff(_oldValue, _newValue, _oldValue.GetType()));
            }
            return diffList.ToList();
        }

        public Type GetGenericCollectionItemType(Type type)
        {
            if (type.IsGenericType)
            {
                var args = type.GetGenericArguments();
                if (args.Length == 1 &&
                    typeof(ICollection<>).MakeGenericType(args).IsAssignableFrom(type))
                {
                    return args[0];
                }
            }
            return null;
        }
    }
}