package com.cleancodeschool;

import com.cleancodeschool.after.ModelController;
import com.cleancodeschool.after.SongController;
import com.cleancodeschool.after.VideoController;
import com.cleancodeschool.before.ImageController;
import com.cleancodeschool.before.UserController;

public class Main {

    static void doWhateverWithAnyModelObj(ModelController modelController, final Long id) {
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
