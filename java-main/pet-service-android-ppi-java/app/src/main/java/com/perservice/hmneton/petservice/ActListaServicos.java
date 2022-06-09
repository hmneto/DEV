package com.perservice.hmneton.petservice;
import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;

import java.util.ArrayList;

public class ActListaServicos extends Activity {
    private ListView listView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_servicos);



        ArrayList<ClassServicos> lista = new ArrayList<ClassServicos>();

        lista.add(new ClassServicos(R.drawable.ades,"Adestramento"));
        lista.add(new ClassServicos(R.drawable.ban,"Banho"));
        lista.add(new ClassServicos(R.drawable.tosa,"Tosa"));
        lista.add(new ClassServicos(R.drawable.hidra,"Hidratação"));
        lista.add(new ClassServicos(R.drawable.pass,"Passeio"));
        lista.add(new ClassServicos(R.drawable.reme,"Medicamentos"));
        //lista.add(new ClassServicos(R.drawable.consulta,"Consultas"));
        //lista.add(new ClassServicos(R.drawable.vacina,"Vacinação"));
        //lista.add(new ClassServicos(R.drawable.verme,"Vermifulgação"));
        //lista.add(new ClassServicos(R.drawable.hosp,"Hospedagem"));
        //lista.add(new ClassServicos(R.drawable.trans,"Transporte"));


        ListaViewAdapterServicos adaptador = new ListaViewAdapterServicos(this,lista);

        listView = (ListView)findViewById(R.id.listView);
        listView.setAdapter(adaptador);




        listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent intent = new Intent(ActListaServicos.this,ActProfissionais.class);
                //AlertDialog.Builder alerta = new AlertDialog.Builder(ActListaServicos.this);
                //alerta.setMessage(String.format("%d",position));
                //alerta.setNeutralButton("ok",null);
                //alerta.show();

                if(position == 0) {
                    Informacoes.setServico("Adestramento");
                }
                if(position == 1) {
                    Informacoes.setServico("banho");
                }
                if(position == 2) {
                    Informacoes.setServico("Tosa");
                }
                if(position == 3) {
                    Informacoes.setServico("Hidratação");
                }
                if(position == 4) {
                    Informacoes.setServico("Passeio");
                }
                if(position == 5) {
                    Informacoes.setServico("Medicamentos");
                }
                if(position == 6) {
                    Informacoes.setServico("Consultas");
                }
                if(position == 7) {
                    Informacoes.setServico("Vacinação");
                }
                if(position == 8) {
                    Informacoes.setServico("Vermifulgação");
                }
                if(position == 9) {
                    Informacoes.setServico("Hospedagem");
                }
                if(position == 10) {
                    Informacoes.setServico("Transporte");
                }

                startActivity(intent);



            }
        });

    }
}
