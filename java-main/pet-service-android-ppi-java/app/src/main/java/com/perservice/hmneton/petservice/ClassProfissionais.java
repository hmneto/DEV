package com.perservice.hmneton.petservice;
/**
 * Created by hmneton on 22/05/16.
 */
public class ClassProfissionais {
    private String nome;
    private String endereco;
    private String regiao;

    public ClassProfissionais() {

    }

    public ClassProfissionais(String nome, String endereco, String regiao) {

        this.nome = nome;
        this.endereco = endereco;
        this.regiao = regiao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getRegiao() {
        return regiao;
    }

    public void setRegiao(String regiao) {
        this.regiao = regiao;
    }
}
