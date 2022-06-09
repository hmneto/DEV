package com.perservice.hmneton.petservice;
import android.app.Activity;
import android.content.Intent;

import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;

import com.perservice.hmneton.petservice.R;

import java.util.ArrayList;

public class ActProfissionais extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_profissionais);

        ArrayList<ClassProfissionais> lista = new ArrayList<ClassProfissionais>();

        lista.add(new ClassProfissionais("José","Av. Américo", "ZS"));
        lista.add(new ClassProfissionais("Mauricio","R. das dores", "ZS"));
        lista.add(new ClassProfissionais("Pedro","R. uruguai", "ZS"));
        lista.add(new ClassProfissionais("Everton","R. Arnaldo cezar", "ZS"));
        lista.add(new ClassProfissionais("Luciana","Av. Sumaré", "ZS"));
        lista.add(new ClassProfissionais("Maria","Av. Itatinga", "ZS"));
        lista.add(new ClassProfissionais("Mauro","R. Joaquim pereira", "ZS"));



        ListaViewAdapterProfissionais adaptador = new ListaViewAdapterProfissionais(this,lista);

        ListView listViewProfissionais = (ListView)findViewById(R.id.listViewProfissionais);
        listViewProfissionais.setAdapter(adaptador);


        listViewProfissionais.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                Intent intent = new Intent(ActProfissionais.this,ActInformacoesProfissional.class);
                    startActivity(intent);
                    Informacoes.setProfissional(position);

            }
        });


    }
}
