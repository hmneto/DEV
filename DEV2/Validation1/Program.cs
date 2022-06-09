﻿
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ConsoleApplication1
{
    public class Person
    {
        [Required]
        public string Name { get; set; }

        public Address Address { get; set; }
    }

    public class Address
    {
        [Required]
        public string Street { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string State { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Person person = new Person
            {
                Name = "teste",
                Address = new Address
                {
                    Street = "123 Any St"
                }
            };

            var validationContext = new ValidationContext(person, null, null);
            var validationResults = new List<ValidationResult>();


            var adress = new Address
            {
                Street = "123 Any St"
            };

            var validationContext2 = new ValidationContext(adress, null, null);
            var validationResults2 = new List<ValidationResult>();


            var isValid2 = Validator.TryValidateObject(adress, validationContext2, validationResults2);

            //Console.WriteLine(isValid2);

            validationResults2.ForEach(r => Console.WriteLine(r.ErrorMessage));




            var isValid = Validator.TryValidateObject(person, validationContext, validationResults);

            //Console.WriteLine(isValid);

            validationResults.ForEach(r => Console.WriteLine(r.ErrorMessage));

            Console.ReadLine();
        }
    }
}