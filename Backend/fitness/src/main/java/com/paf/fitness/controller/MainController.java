package com.paf.fitness.controller;

import java.util.List;
import java.util.Optional;
import com.paf.fitness.model.Mealplan;
import com.paf.fitness.repo.MealplansRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

@RestController
public class MainController {
    @Autowired
    MealplansRepo mealplansRepo;

    // Add Meal
    @PostMapping("/addMeal")
    public void addMeal(@RequestBody Mealplan mealplan){
        System.out.println("mealplansRepo: " + mealplansRepo); // Add logging statement
        mealplansRepo.save(mealplan);
    }

    // Get all Meals
    @GetMapping("/fetchMeals")
    public List<Mealplan> fetchMeal(){
        return mealplansRepo.findAll();
    }

    // Get Meal by ID
    @GetMapping("/fetchMeal/{id}")
    public ResponseEntity<Mealplan> fetchMealById(@PathVariable("id") Integer id){
        Optional<Mealplan> mealplanData = mealplansRepo.findById(id);
        return mealplanData.map(mealplan -> new ResponseEntity<>(mealplan, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update Meal by ID
    @PutMapping("/updateMeal/{id}")
    public ResponseEntity<?> updateMeal(@PathVariable("id") Integer id, @RequestBody Mealplan mealplan) {
        Optional<Mealplan> mealplanData = mealplansRepo.findById(id);

        if (mealplanData.isPresent()) {
            Mealplan _mealplan = mealplanData.get();
            _mealplan.setName(mealplan.getName());
            _mealplan.setMeal(mealplan.getMeal());
            mealplansRepo.save(_mealplan);
            return new ResponseEntity<>("Mealplan updated successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Mealplan not found", HttpStatus.NOT_FOUND);
        }
    }

    // Delete Meal by ID
    @DeleteMapping("/deleteMeal/{id}")
    public ResponseEntity<?> deleteMeal(@PathVariable("id") Integer id) {
        try {
            mealplansRepo.deleteById(id);
            return new ResponseEntity<>("Mealplan deleted successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Mealplan not found", HttpStatus.NOT_FOUND);
        }
    }
}
