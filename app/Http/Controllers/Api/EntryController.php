<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Entry;
use App\Models\Image;

class EntryController extends Controller
{

    public function index(Request $request, $period, $value1 = null, $value2 = null)
    {

        $id = Auth::id();

        if (!$id) return [];

        if ($period == 'all') {

            $values = Entry::orderBy('date')->where('user_id', $id)->get();

            return $values;
        } else if ($period == 'day') {

            $date = $value1;

            $values = Entry::where('user_id', $id)->where('date', $date)->get();

            return $values;
        } else if ($period == 'month') {

            $year = $value1;
            $month = $value2;
            $values = Entry::where('user_id', $id)->orderBy('date')->where('date', 'like', $year . '-' . $month . '%')->get();

            return $values;
        } else if ($period == 'year') {

            $year = $value1;
            $values = Entry::where('user_id', $id)->where('date', 'like', $year . '%')->get();
            // dd($values);
            return $values;
        } else {
            return [];
        }
    }

    public function search($phrase)
    {
        $id = Auth::id();

        if (!$id) return null;

        $result = Entry::where('user_id', $id)->where('note', 'like', '%' . $phrase . '%')->get();

        return $result;
    }
    public function store(Request $request)
    {
        
       
        $date = $request->input('date');

        $rate = $request->input('rate');

        $note = $request->input('note');

        $image = $request->input('image');
        
        $newImage = new Image();

        $newImage->path = $image->name;

        $newImage->save();


        $res = Entry::create([
            'date' => $date,
            'rate' => $rate,
            'note' => $note,
            'image_id' => $newImage->id
        ]);

        return $res;
    }
   
    
}
