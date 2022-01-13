package com.devsuperior.dsmovie.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tb_movie")
public class Movie {
  
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String title;
	private Long count;
	private Double score;
	private String image;
	
	
	public Movie() {

	}

	
	

	/**
	 * @param id
	 * @param title
	 * @param count
	 * @param score
	 * @param image
	 */
	public Movie(Long id, String title, Long count, Double score, String image) {
		this.id = id;
		this.title = title;
		this.count = count;
		this.score = score;
		this.image = image;
	}

 
	


	public Long getCount() {
		return count;
	}




	public void setCount(Long count) {
		this.count = count;
	}




	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public Double getScore() {
		return score;
	}


	public void setScore(Double score) {
		this.score = score;
	}


	public String getImage() {
		return image;
	}


	public void setImage(String image) {
		this.image = image;
	}

	
	
}