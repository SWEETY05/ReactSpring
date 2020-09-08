package com.sweeti.springboot.controller;

import java.util.List;

import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sweeti.springboot.exception.ResourceNotFoundException;
import com.sweeti.springboot.model.Employee;
import com.sweeti.springboot.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

	@Autowired
	EmployeeRepository userRepository;

	// get all employee
	@GetMapping("/employees")
	public List<Employee> getAllEmployee() {

		return userRepository.findAll();

	}

	// create/save employee rest api
	@PostMapping("/employees")
	public Employee saveEmployee(@RequestBody Employee emp) {
		return userRepository.save(emp);
	}

	// save all list of emp rest api
	@PostMapping("/save-all")
	public List<Employee> SaveAllEmployee(@RequestBody List<Employee> emp) {
		return userRepository.saveAll(emp);
	}

	// get emp by id rest api
	@GetMapping("/get-employee-by-id")
	public ResponseEntity<Employee> getEmployeebyId(@PathParam("id") Long id) {

		Employee employee = userRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("not found"));
		return ResponseEntity.ok(employee);

	}

	// delete emp
	@DeleteMapping("/delete-by-id")
	public void deleteById(@PathParam("id") long id) {
		userRepository.deleteById(id);
	}

}
