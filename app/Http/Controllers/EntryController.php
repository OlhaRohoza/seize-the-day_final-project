<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entrie;
use Auth;

class EntryController extends Controller
{
    public function index()
    {
        $entry = Entrie::all();
        return $entry;
    }
    public function store(Request $request)
    {
        $date = $request->input('date');

        $rate = $request->input('rate');

        $note = $request->input('note');

        $user = Auth::user();

        $entry = Entrie::create([
            'user_id' => $user->id,
            'date'=> $date,
            'rate'=> $rate,
            'note'=> $note
        ]);
        return $entry;
    }
}
