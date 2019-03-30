package com.cleancodeschool.after;

/**
 * AFTER APPLYING EXTRACT INTERFACE REFACT
 */
public class SongController implements ModelController {

    @Override
    public String findById(Long id) {
        return "Song with id: " + id.toString();
    }
}
