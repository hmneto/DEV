package javaapplication5;
import java.util.Random;

public class Jogadas implements Runnable{

    public static void main(String[] args) {
        Random r = new Random();
        Jogador j1 = new Jogador("jogador1", new Dados(r.nextInt(6), r.nextInt(6)));
        System.out.println(j1.getJogador() + " " + (j1.getDados().getDado1() + j1.getDados().getDado2()));
        
        Runnable lance1 = (Runnable) new Jogador();
        new Thread(lance1).start();
        
       
    }

    @Override
    public void run() {
        System.out.println("teste");
    }

}
