package com.dzerok1.springbootlibrary;

import org.modelmapper.ModelMapper;
import org.modelmapper.config.Configuration;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class SpringBootLibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootLibraryApplication.class, args);
	}
//	@Bean
//	public ModelMapper modelMapper() {
//		ModelMapper modelMapper = new ModelMapper();
//		modelMapper
//				.getConfiguration()
//				.setFieldMatchingEnabled(true)
//				.setFieldAccessLevel(Configuration.AccessLevel.PRIVATE)
//				.setMatchingStrategy(MatchingStrategies.STRICT);
//		return modelMapper;
//	}

}
