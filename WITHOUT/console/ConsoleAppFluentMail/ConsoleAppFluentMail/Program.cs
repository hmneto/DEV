using FluentEmail.Core;
using FluentEmail.Smtp;
using System;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ConsoleAppFluentMail
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            var sender = new SmtpSender(() => new SmtpClient("localhost")
            {
                EnableSsl = false,
                DeliveryMethod=SmtpDeliveryMethod.SpecifiedPickupDirectory,
                PickupDirectoryLocation=@"C:\Dados\Email"
            });

            Email.DefaultSender = sender;
            var email = await Email
                .From("hmneton@gmail.com")
                .To("teste@teste.com")
                .Subject("FluentMail")
                .Body("Teste....")
                .SendAsync();

            if (email.Successful)
                Console.WriteLine("Email enviado com sucesso");
            else
                Console.WriteLine($"Falha ao enviar o email - {email.ErrorMessages}");
        }
    }
}
