﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using MobileTeste;
using MobileTeste.Modelo;

namespace MobileTeste
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            BOTAO.Clicked += BuscarCEP;
        }

        private void BuscarCEP(object sender, EventArgs args)
        {
            string cep = CEP.Text.Trim();
            if (isValidCEP(cep))
            {
                try
                {
                    Endereco endereco = ViaCepServico.BuscarEnderecoViaCEP(cep);
                    if(endereco != null)
                    {
                        RESULTADO.Text = string.Format("Endereço: {2] {3} {0}, {1}", endereco.localidade, endereco.uf, endereco.logradouro, endereco.bairro);
                    }
                    else
                    {
                        DisplayAlert("ERRO", "O endereço não foi encontrado para o CEP informado: ", "OK");
                    }
                    

                }
                catch(Exception e)
                {
                    DisplayAlert("Erro Crítico", e.Message, "OK");
                }
                
            }
        }

        private bool isValidCEP(string cep)
        {
            bool valido = true;
            if (cep.Length != 8)
            {
                DisplayAlert("Erro", "CEP inválido! O CEP deve conter 8 caracteres", "OK");
                valido = false;
            }

            int NovoCEP = 0;

            if(!int.TryParse(cep, out NovoCEP))
            {
                DisplayAlert("Erro", "CEP inválido! O CEP deve ser composto apenas por números", "OK");
                valido = false;
            }
            return valido;
        }
    }
}
