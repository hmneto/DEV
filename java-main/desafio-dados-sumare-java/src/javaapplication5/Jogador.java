/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package javaapplication5;

/**
 *
 * @author 1421554
 */
public class Jogador {
    private String jogador;
    private Dados dados;
    
    public Jogador(){
        
    }
    public Jogador(String _jogador, Dados _dados) {
        this.jogador = _jogador;
        this.dados = _dados;
    }

    public String getJogador() {
        return jogador;
    }

    public void setJogador(String jogador) {
        this.jogador = jogador;
    }

    public Dados getDados() {
        return dados;
    }

    public void setDados(Dados dados) {
        this.dados = dados;
    }
}
