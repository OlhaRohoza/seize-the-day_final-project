<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Entrie;
use App\Models\Entry;
use Auth;
use App\Models\Image;

class EntryController extends Controller
{
    public function index()
    {
        $entry = Entrie::all();
        return $entry;
    }
    public function show($id)
    {
        $entry = Entrie::where('id', $id)->first();
        return $entry;
    }

    public function store(Request $request)
    {

        $image = $request->file('image');

        $value = json_decode($request->value);

        $date = $value->date;

        $rate = $value->rate;

        $note = $value->note;

        $user = Auth::user();

        $image->storeAs('images/users/' . \Auth::id(), $image->getClientOriginalName(), 'public');


        $newImage = Image::create([
            'path' => '/images/users/' . \Auth::id() . "/" . $image->getClientOriginalName(),
            'user_id' => $user->id,
        ]);

        // $newImage = new Image;
        // $newImage->path = $image->getClientOriginalName();
        // $newImage->save();

        $entry = Entry::create([
            'user_id' => $user->id,
            'date' => $date,
            'rate' => $rate,
            'note' => $note,
            'image_id' => $newImage->id
        ]);

        $entry->images()->attach($newImage->id);
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
    public function storeImage(Request $request)
    {
        $user_id = Auth::id();
        $data = new Image();
        $data->user_id = $user_id;
        $file = $request->file('image');
        $file_name = $date('YmdHi') . $file->getClientOriginalName();
        $file->move(public_path('public/Image'), $file_name);
        $data->path = $file_name;
        $data->save();

        return $data;
    }
}
