<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entrie;
use App\Models\Entry;
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
            'date' => $date,
            'rate' => $rate,
            'note' => $note
        ]);
        return $entry;
    }

    public function editeEntrie(Request $request, $id)
    {
        $rate = $request->input('rate');

        $note = $request->input('note');

        $entrie = Entrie::where('id', $id)->first();

        $entrie->rate = $rate;
        $entrie->note = $note;

        $entrie->save();
        return ['message' => 'The Entry was edited'];
        return $entrie;
    }

    public function destroy($id)
    {
        // dd($id);
        $entry = Entry::findOrFail($id);

        $entry->delete();
        return ['message' => 'The Entry was deleted'];
        // return redirect()->route('home');
    }
}
