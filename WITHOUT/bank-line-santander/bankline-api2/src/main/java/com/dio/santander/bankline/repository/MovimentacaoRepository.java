package com.dio.santander.bankline.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import com.dio.santander.bankline.model.Movimentacao;
@Service
public interface MovimentacaoRepository extends JpaRepository<Movimentacao, Integer>{

}
