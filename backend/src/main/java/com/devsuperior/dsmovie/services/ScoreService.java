package com.devsuperior.dsmovie.services;

import java.util.OptionalDouble;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.entities.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.dto.ScoreDTO;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;

@Service
public class ScoreService {

	@Autowired
	private MovieRepository movieRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ScoreRepository scoreRepository;

	@Transactional
	public MovieDTO saveScore(ScoreDTO dto) {

		User user = userRepository.findByEmail(dto.getEmail());
		if (user == null) {
			user = new User();
			user.setEmail(dto.getEmail());
			user = userRepository.saveAndFlush(user);

		}

		// não tá validando.
		Movie movie = movieRepository.findById(dto.getMovieId()).get();

		Score score = new Score();
		score.setMovie(movie);
		score.setUser(user);
		score.setValue(dto.getScore());

		score = scoreRepository.saveAndFlush(score);

		double sum = 0.0;
		for (Score score2 : movie.getScores()) {

			sum = sum + score2.getValue();
		}

		OptionalDouble optionalDouble = movie.getScores().stream().map(s -> s.getValue()).mapToDouble(d -> d).average();
		System.out.println(optionalDouble.getAsDouble());

		double avg = sum / movie.getScores().size();

		movie.setScore(avg);
		movie.setCount((long) movie.getScores().size());
		movie = movieRepository.save(movie);

		return new MovieDTO(movie);
	}

}
