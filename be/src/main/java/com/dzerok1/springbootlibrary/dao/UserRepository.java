package com.dzerok1.springbootlibrary.dao;

import com.dzerok1.springbootlibrary.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
