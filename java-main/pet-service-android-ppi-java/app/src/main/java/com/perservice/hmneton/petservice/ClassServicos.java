package com.perservice.hmneton.petservice;
/**
 * Created by hmneton on 22/05/16.
 */
public class ClassServicos {
    private int imagem;
    private String servico;

    public ClassServicos() {
    }

    public ClassServicos(int imagem, String servico) {
        this.imagem = imagem;
        this.servico = servico;
    }

    public int getImagem() {

        return imagem;
    }

    public void setImagem(int imagem) {

        this.imagem = imagem;
    }

    public String getServico() {

        return servico;
    }

    public void setServico(String servico) {

        this.servico = servico;
    }
}
