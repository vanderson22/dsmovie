package com.devsuperior.dsmovie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.entities.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.dto.ScoreDTO;
import com.devsuperior.dsmovie.services.ScoreService;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

	@Autowired
	private ScoreService service;

	@PutMapping()
	public MovieDTO saveScore(@RequestBody ScoreDTO dto) {
		return service.saveScore(dto);
	}

}
