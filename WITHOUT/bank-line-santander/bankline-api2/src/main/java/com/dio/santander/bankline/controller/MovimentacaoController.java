package com.dio.santander.bankline.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dio.santander.bankline.dto.NovaMovimentacao;
import com.dio.santander.bankline.model.Movimentacao;
import com.dio.santander.bankline.repository.MovimentacaoRepository;

@RestController
@RequestMapping("/movimentacao")
public class MovimentacaoController {
	@Autowired
	private MovimentacaoRepository repository;
	
	@Autowired
	private MovimentacaoService service;

	@GetMapping("/findall")
	public List<Movimentacao> findAll(){
		return repository.findAll();
	}
	
	
	@PostMapping
	public void save(@RequestBody NovaMovimentacao novaMovimentacao){
		service.save(novaMovimentacao);
	}

}
