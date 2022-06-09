package com.perservice.hmneton.petservice;
/**
 * Created by hmneton on 02/06/16.
 */
public class Informacoes {

    static private String cidade;
    static private String regiao;
    static private String servico;
    static private int profissional;

    public Informacoes() {

    }


    public Informacoes(String cidade, String regiao, String servico, int profissional){
        this.cidade = cidade;
        this.regiao = regiao;
        this.servico = servico;
        this.profissional = profissional;
    }

    public static String getCidade() {
        return cidade;
    }

    public static void setCidade(String cidade) {
        Informacoes.cidade = cidade;
    }

    public static String getRegiao() {
        return regiao;
    }

    public static void setRegiao(String regiao) {
        Informacoes.regiao = regiao;
    }

    public static String getServico() {
        return servico;
    }

    public static void setServico(String servico) {
        Informacoes.servico = servico;
    }

    public static int getProfissional() {
        return profissional;
    }

    public static void setProfissional(int profissional) {
        Informacoes.profissional = profissional;
    }
}
