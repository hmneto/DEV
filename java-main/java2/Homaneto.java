   import java.util.ArrayList;
    import java.util.Arrays;
    import java.util.Random;
    import java.util.Scanner;

    public class Homaneto{


            static void soma(int a, int b){
                int s = a+b;
                System.out.println("resuldo e "+ s);
            }

    /**
     *
     * @param outro
     */
    public static void main(String[] outro){

                    //Parada que eu nao entendi com a chamada do programa atraves dos argumentos do main
                    //System.out.println(args[0]);
                    Scanner s = new Scanner(System.in);
                    //System.out.println(s.nextLine());
                    System.out.println("Qual o seu nome?");
                    String nome3 = s.nextLine();
                    System.out.println("Bem vindo "+nome3);



                    //aula de tipo primitivo de variaveis
                    int idade = 31;
                    double preco = 12.45;
                    char sexo = 'M';
                    boolean casado = true;

                    // criar uma Wrapper
                    Integer idade2 = new Integer(31);
                    Double preco2 = new Double ("12.45");
                    double d = preco2.doubleValue();
                    int i = preco2.intValue();
                    byte b = preco2.byteValue();

                    Boolean casado2 = new Boolean("true");
                    System.out.println(casado2);


                    double d1 = Double.parseDouble("123.45");
                    int i1 = Integer.parseInt("123");
                    float f1 = Float.parseFloat("3.14F");



                    //Atribuindo o valor de uma base binaria em uma variavel
                    //numero em binario 43 e passado como parametro o numero 2 para infomar que
                    //eh da base binaria

                    int i2 = Integer.valueOf("101011", 2);
                    System.out.println(i2);




                    //Variavel Primitiva
                    int x = 7;
                    x = 9;

                    //Variavel de Referencia
                    String y = "XTI";
                    y = "xti.com.br";
                    System.out.println(y);
                    y = null;



                    int populacaoBrasileira = 203429773;
                    final double PI = 3.14159265358979323846;
                    System.out.println(PI);
                    final char SEXO_MASCULINO = 'M';
                    final char SEXO_FEMININO = 'F';



                     String tenso5 = new String ("vish");
                    // eu Fiz assim String tenso5 = "vish";

                    System.out.println(tenso5.charAt(tenso5.length()-1));
                    System.out.println(tenso5.length());



                    int x1 = 6;
                    int y2 = x1 ++;//pos incremento atribui antes de somar
                    // ++x1 eh o pre incremento

                    System.out.println(x1);
                    System.out.println(y2);

                    int x3 = 6;
                    System.out.println(x3==6);



                    // 2+3 operador binario
                    // - 2 operador unario
                    //true ? "sim" : "nao"; operador ternario



                    int idade4 = 8;
                    String x6 = (idade >= 18) ? "Maior de idade"  : "Menor de idade";
                    System.out.println(x6);

                    int n[] ={3,2,8,7,5,4};

                    for(int c=0; c<n.length-1; c++){
                        System.out.print(+n[c]+" ");
                    }


                    System.out.println(" ");
                    //Forma de  se inicializar um vetor;
                    int impares[] = new int[10];


                    String mes[] ={"Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"};
                    Arrays.sort(mes);
                    for(String valor12:mes){
                        System.out.print(valor12 + " ");
                    }
                    System.out.println("\n"+Arrays.toString(mes));

                    System.out.println(" ");


                    int vet[] = {3, 7, 6, 1, 9, 4 ,2};
                    for(int v:vet){
                        System.out.print(v+" ");
                    }


                    int p = Arrays.binarySearch(vet, 9);
                    System.out.println("\n");
                    System.out.println("encontrei o valor na posicao p " + p);









                    int vet1[] = new int[20];
                    Arrays.fill(vet1, 0);
                    for(int valor:vet1){
                        System.out.print(valor);
                    }



                    System.out.println(" ");


                    soma(5,2);
                    int tensoTeste = Teste.outraSoma(5,20);
                    System.out.println(tensoTeste);


                    Random r = new Random();
                    int aleatorio = r.nextInt(10);
                    System.out.println(aleatorio);


                    String uma[]={"Ricardo","Sandra"};
                    System.out.println(Arrays.toString(uma));
                    String duas[][]={
                        {"Ricardo","M","DF"},
                        {"Sandra", "F", "MG"}
                    };
                    System.out.println(duas[1][0]);


                    ArrayList<String> cores = new ArrayList<>();
                    cores.add("Branco");
                    cores.add(0,"Vermelho");
                    cores.add("Verde");
                    System.out.println(cores.toString());
                    System.out.println("Tamanho "+cores.size());
                    System.out.println("Elemento "+cores.get(2));
                    System.out.println("Posicao "+ cores.indexOf("Branco"));



                    cores.remove("Branco");
                    System.out.println(cores.toString());
                    System.out.println("Saber se tem o item no Array List retorna Booleano |"+cores.contains("Amarelo")+"|");




            }
    }


















