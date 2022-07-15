<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Entry;

class EntryController extends Controller
{
    public function index(Request $request, $period, $value = null)
    {
        $id = Auth::user()->id;
        
        
        
        if ($period == 'all') {

            $values = Entry::orderBy('date')->where('user_id', $id)->get();

            return $values;
        } else if ($period == 'day') {

            $date = $value;
            
            $values = Entry::where('user_id', $id)->where('date', $date)->get();
            
            return $values;
        } else if ($period == 'month') {

            $period = $value;
            $values = Entry::where('user_id', $id)->where('date', 'LIKE', $period . '%')->get();

            return $values;
        } else if ($period == 'year') {

            $year = $value;
            $values = Entry::where('user_id', $id)->where('date', 'LIKE', $year . '%')->get();
            // dd($values);
            return $values;
        } else {
            return [];
        }
    }

    public function store(Request $request) {

        $date = $request->input('date');

        $rate = $request->input('rate');

        $note = $request->input('note');


        $res = Entrie::create([
            'date' => $date,
            'rate' => $rate,
            'note' => $note
        ]);

        return $res;
    }

 
}
