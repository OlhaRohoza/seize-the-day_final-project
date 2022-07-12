<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    // render the react app for user-page
    public function app()
    {
        return view('user.app');
    }
}
