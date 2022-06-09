package com.perservice.hmneton.petservice;
import android.app.Activity;
import android.app.AlertDialog;
import android.os.Bundle;

public class ActInformacoesProfissional extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_informacoes_profissional);

        AlertDialog.Builder alerta = new AlertDialog.Builder(this);
        alerta.setMessage(Informacoes.getCidade()+" "+Informacoes.getRegiao()+" " +Informacoes.getServico() +" "+ Informacoes.getProfissional());
        alerta.setNeutralButton("OK",null);
        alerta.show();
    }
}
