package com.perservice.hmneton.petservice;

import android.app.Activity;
import android.content.Intent;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class ActInicial extends Activity {
    private Button btn;
    private Button btnProfissional;

    private Button btnConnect;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.act_inicial);


        btn = (Button) findViewById(R.id.btn);
        btnProfissional = (Button)findViewById(R.id.btnProfissional);
        btnConnect = (Button)findViewById(R.id.bntCon);


        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ActInicial.this,ActRegiao.class);
                startActivity(intent);

            }
        });



        btnProfissional.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(ActInicial.this,ActLogin.class);
                startActivity(intent);

            }
        });


        btnConnect.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {

                Intent intent = new Intent(getApplicationContext(),MainActivity.class);
                startActivity(intent);
            }
        });

    }
}
