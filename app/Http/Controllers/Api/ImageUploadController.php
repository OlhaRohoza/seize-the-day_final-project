<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Image;

class ImageUploadController extends Controller
{

    public function SaveImage(Request $request)
    {
        $user_id = Auth::id();
        $data= new Image();
        $data ->user_id = $user_id;
        $file = $request->file('image');
        $file_name = $date('YmdHi') . $file->getClientOriginalName();
        $file-> move(public_path('public/Image'), $filename);
        
        $data ->path = $file_name;
        $data->save();
       
        
        return $data;
    }
}