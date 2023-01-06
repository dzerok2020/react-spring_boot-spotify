package com.dzerok1.springbootlibrary.service;

import com.dzerok1.springbootlibrary.dao.UserRepository;
import com.dzerok1.springbootlibrary.model.User;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

public interface UserService {
    User addUser(User user);
    List<User> getAllUsers();
    User getUserByUsername(String username);
}

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public User addUser(User user) {
        log.info("Add new user {} to the database", user.getUsername());
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }
}
