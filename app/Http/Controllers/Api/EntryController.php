<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Entry;

class EntryController extends Controller
{
    public function index(Request $request, $period)
    {
        $id = Auth::user()->id;

        if ($period == 'all') {

            $values = Entry::orderBy('date')->where('user_id', $id)->get();

            return $values;
        } else if ($period == 'day') {

            $values = Entry::where('user_id', $id)->findOrFail($id);

            return $values;
        } else if ($period == 'month') {

            $values = [];

            return $values;
        } else if ($period == 'year') {

            $year = $request->input('year');

            $values = Entry::where('user_id', $id)->where('date', 'LIKE', $year . '%');

            return $values;
        } else {
            return [];
        }
    }
}
