package com.perservice.hmneton.petservice;

import android.content.Context;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.TextView;

import org.w3c.dom.Text;

import java.util.ArrayList;
import java.util.List;
import java.util.zip.Inflater;

public class ListaViewAdapterProfissionais extends ArrayAdapter<ClassProfissionais> {

    private Context context;
    private ArrayList<ClassProfissionais> listaProfissionais;

    public ListaViewAdapterProfissionais(Context context, ArrayList<ClassProfissionais> listaProfissionais) {
        super(context, 0, listaProfissionais);
        this.context = context;
        this.listaProfissionais = listaProfissionais;
    }


    @Override
    public View getView(int position, View convertView, ViewGroup parent) {

        ClassProfissionais posicaoProfissional = this.listaProfissionais.get(position);
        convertView = LayoutInflater.from(this.context).inflate(R.layout.adp_lista_profissionais,null);

        TextView txtNome = (TextView)convertView.findViewById(R.id.txtNome);
        txtNome.setText(posicaoProfissional.getNome());

        TextView txtEndereco = (TextView)convertView.findViewById(R.id.txtEndereco);
        txtEndereco.setText(posicaoProfissional.getEndereco());

        TextView txtZona = (TextView)convertView.findViewById(R.id.txtZona);
        txtZona.setText(posicaoProfissional.getRegiao());


        return convertView;
    }
}
