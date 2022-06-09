package com.perservice.hmneton.petservice;
import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import java.util.ArrayList;

public class ListaViewAdapterServicos extends ArrayAdapter<ClassServicos> {




        private Context context;
        private ArrayList<ClassServicos> listaServicos;

        public ListaViewAdapterServicos(Context context, ArrayList<ClassServicos> listaServicos) {
            super(context,0, listaServicos);
            this.context = context;
            this.listaServicos = listaServicos;
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            ClassServicos servicoItemPosicao = this.listaServicos.get(position);
            convertView = LayoutInflater.from(this.context).inflate(R.layout.adp_lista_servicos,null);

            ImageView imgServico = (ImageView) convertView.findViewById(R.id.imgServico);
            imgServico.setImageResource(servicoItemPosicao.getImagem());

            TextView txtServicos = (TextView) convertView.findViewById(R.id.txtServico);
            txtServicos.setText(servicoItemPosicao.getServico());

            return convertView;
        }



}
