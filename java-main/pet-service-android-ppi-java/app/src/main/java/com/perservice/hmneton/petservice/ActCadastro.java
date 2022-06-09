package com.perservice.hmneton.petservice;

import android.app.Activity;
import android.os.Bundle;
import android.widget.ArrayAdapter;
import android.widget.Spinner;

public class ActCadastro extends Activity {

    ArrayAdapter<String> adpCadastro;
    Spinner spnCadastro;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_act_cadastro);



        spnCadastro = (Spinner)findViewById(R.id.spnCadastro);

        adpCadastro = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_dropdown_item);

        adpCadastro.add("Adestramento");
        adpCadastro.add("Banho");
        adpCadastro.add("Tosa");
        adpCadastro.add("Hidratação");
        adpCadastro.add("Passeio");
        adpCadastro.add("Medicamentos");
        adpCadastro.add("Consultas");
        adpCadastro.add("Vacinação");
        adpCadastro.add("Vermifulgação");
        adpCadastro.add("Hospedagem");
        adpCadastro.add("Transporte");


        spnCadastro.setAdapter(adpCadastro);

    }

}
