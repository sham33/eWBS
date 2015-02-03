package com.wbs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wbs.domain.Story;
import com.wbs.repository.StoryRepository;

@Service
public class StoryService {

	@Autowired
	private StoryRepository storyRepository;

	public Story findStory(long _id) {
		return storyRepository.findStory(_id);
	}

	public void saveStory(Story story) {
		storyRepository.saveStory(story);
	}

	public List<Story> findAllStory(String projectName) {
		return storyRepository.findAllStory(projectName);
	}
}