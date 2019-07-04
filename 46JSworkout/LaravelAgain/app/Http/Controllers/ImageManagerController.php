<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImageManagerController extends Controller
{
    public function index(){
        return view('image-manager/index');
    }
    public function images(){
        $images_folder="reee";

        return ($images_folder);
    }
}
