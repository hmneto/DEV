package com.perservice.hmneton.petservice;


import java.io.IOException;
        import java.util.ArrayList;

        import org.apache.http.HttpResponse;
        import org.apache.http.NameValuePair;
        import org.apache.http.ParseException;
        import org.apache.http.client.ClientProtocolException;
        import org.apache.http.client.HttpClient;
        import org.apache.http.client.entity.UrlEncodedFormEntity;
        import org.apache.http.client.methods.HttpPost;
        import org.apache.http.impl.client.DefaultHttpClient;
        import org.apache.http.message.BasicNameValuePair;
        import org.apache.http.util.EntityUtils;





        import android.app.Activity;
        import android.app.AlertDialog;
        import android.os.Bundle;
        import android.util.Log;
        import android.view.View;
        import android.widget.Button;
        import android.widget.EditText;
        import android.widget.Toast;




public class MainActivity extends Activity {
    EditText eEt;
    EditText sEt;
    EditText nEt;
    Button btn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        nEt = (EditText) findViewById(R.id.nome);
        sEt = (EditText) findViewById(R.id.sobrenome);
        eEt = (EditText) findViewById(R.id.email);


        btn = (Button)findViewById(R.id.button1);



        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                enviarDados();
            }
        });
    }





    public void enviarDados(){


        new Thread(){
            public void run(){

                postHttp(nEt.getText().toString(), sEt.getText().toString(), eEt.getText().toString());
            }
        }.start();

    }

    public void postHttp(String nome, String sobrenome, String email){
        HttpClient httpClient = new DefaultHttpClient();
        HttpPost httpPost = new HttpPost("http://www.hmnetonanmy.esy.es/teste/server.php");

        try{
            ArrayList<NameValuePair> valores = new ArrayList<NameValuePair>();
            valores.add(new BasicNameValuePair("nome", nome));
            valores.add(new BasicNameValuePair("sobrenome", sobrenome));
            valores.add(new BasicNameValuePair("email", email));




            httpPost.setEntity(new UrlEncodedFormEntity(valores));
            final HttpResponse resposta = httpClient.execute(httpPost);

            runOnUiThread(new Runnable(){
                public void run(){
                    try {
                        Toast.makeText(getBaseContext(), EntityUtils.toString(resposta.getEntity()), Toast.LENGTH_SHORT).show();
                    } catch (ParseException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    } catch (IOException e) {
                        // TODO Auto-generated catch block
                        e.printStackTrace();
                    }
                }
            });
        }
        catch(ClientProtocolException e){}
        catch(IOException e){}
    }




}