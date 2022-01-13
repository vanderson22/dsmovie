package com.devsuperior.dsmovie.entities;

public class MovieDTO {

	private Long id;
	private String title;
	private Long count;
	private Double score;
	private String image;

	/**
	 * @param id
	 * @param title
	 * @param count
	 * @param score
	 * @param image
	 */
	public MovieDTO(Long id, String title, Long count, Double score, String image) {
		this.id = id;
		this.title = title;
		this.count = count;
		this.score = score;
		this.image = image;
	}

	public Movie dtoToMovie(MovieDTO dto) {

		return null;
	}

	public MovieDTO(Movie movie) {

		id = movie.getId();
		title = movie.getTitle();
		count = movie.getCount();
		score = movie.getScore();
		image = movie.getImage();
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

	public Long getCount() {
		return count;
	}

	public void setCount(Long count) {
		this.count = count;
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
