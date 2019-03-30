package com.cleancodeschool.after;

/**
 * AFTER APPLYING EXTRACT INTERFACE REFACT
 */
public class VideoController implements ModelController {

    @Override
    public String findById(Long id) {
        return "Video with id: " + id.toString();
    }
}
