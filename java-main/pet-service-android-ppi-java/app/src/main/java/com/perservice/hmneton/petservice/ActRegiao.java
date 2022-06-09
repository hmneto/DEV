package com.perservice.hmneton.petservice;
import android.app.Activity;
import android.content.Intent;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.Spinner;
import android.widget.Toast;

public class ActRegiao extends Activity {
    private Button button;
    private RadioButton rbCentro;
    private RadioButton rbOeste;
    private RadioButton rbLeste;
    private RadioButton rbNorte;
    private RadioButton rbSul;




    private Spinner spnCidades;
    private ArrayAdapter<String> adpCidades;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_regiao);


        button = (Button)findViewById(R.id.btnSelecionar);

        rbCentro = (RadioButton)findViewById(R.id.rbCentro);
        rbOeste = (RadioButton)findViewById(R.id.rbOeste);
        rbLeste = (RadioButton)findViewById(R.id.rbLeste);
        rbNorte = (RadioButton)findViewById(R.id.rbNorte);
        rbSul = (RadioButton)findViewById(R.id.rbSul);

        spnCidades = (Spinner)findViewById(R.id.spnCidade);


        adpCidades = new ArrayAdapter<String>(this,android.R.layout.simple_spinner_dropdown_item);

        adpCidades.add("São Paulo");
        adpCidades.add("Belo Horizonte");
        adpCidades.add("Rio de Janeiro");
        adpCidades.add("Curitiba");

        spnCidades.setAdapter(adpCidades);





        rbCentro.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(rbCentro.isChecked()){
                    Toast.makeText(getApplicationContext(),"Região Central selecionada ",Toast.LENGTH_SHORT).show();
                }
            }
        });


        rbOeste.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(rbOeste.isChecked()){
                    Toast.makeText(ActRegiao.this,"Região Oeste Selecionada",Toast.LENGTH_LONG).show();
                }
            }
        });

        rbLeste.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast mostra = Toast.makeText(getApplicationContext(),"Região Leste Selecionada",Toast.LENGTH_LONG);
                mostra.show();
            }
        });

        rbNorte.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(),"Região Norte Selecionada",Toast.LENGTH_LONG).show();
            }
        });



        rbSul.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Toast.makeText(getApplicationContext(),"Região Sul Selecionada",Toast.LENGTH_LONG).show();
            }
        });



        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                if(rbCentro.isChecked()){
                    Informacoes.setRegiao("central");
                }else if (rbOeste.isChecked()){
                    Informacoes.setRegiao("oeste");
                }else if(rbLeste.isChecked()){
                    Informacoes.setRegiao("leste");
                }else if(rbNorte.isChecked()){
                    Informacoes.setRegiao("norte");
                }else if(rbSul.isChecked()){
                    Informacoes.setRegiao("sul");
                }
                Informacoes.setCidade(""+spnCidades.getSelectedItem());
                Intent intent = new Intent(ActRegiao.this,ActListaServicos.class);
                startActivity(intent);

            }
        });





    }
}