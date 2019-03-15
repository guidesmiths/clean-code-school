package com.cleancodeschool;

/**
 * BEFORE APPLYING EXTRACT INTERFACE REFACTOR
 */
class UserController {
    String findById(final Long id) { return "User with id: " + id.toString();};
}

class ImageController {
    String findById(final Long id) { return "Image with id: " + id.toString();};
}

/**
 * AFTER APPLYING EXTRACT INTERFACE REFACT
 */
interface ModelController {
    String findById(final Long id);
}

class VideoController implements ModelController{

    @Override
    public String findById(Long id) {
        return "Video with id: " + id.toString();
    }
}

class SongController implements ModelController {

    @Override
    public String findById(Long id) {
        return "Song with id: " + id.toString();
    }
}


public class Main {

    static void doWhateverWithAnyModelObj(ModelController modelController,final Long id) {
        System.out.println(modelController.findById(id));
    }

    public static void main(String[] args) {
        //BEFORE REFACTORING
        UserController userController = new UserController();
        ImageController imageController = new ImageController();

        //AFTER REFACTORING
        ModelController videoController = new VideoController();
        ModelController songController = new SongController();


        System.out.println(userController.findById(1L));
        System.out.println(imageController.findById(2L));

        doWhateverWithAnyModelObj(videoController,3L);
        doWhateverWithAnyModelObj(songController,4L);
    }
}
