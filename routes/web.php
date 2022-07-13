<?php

use App\Http\Controllers\HomepageController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{path?}', [App\Http\Controllers\HomepageController::class, 'index'])->where('path', '.*');

// Route::get('/user/{path?}', [App\Http\Controllers\UserController::class, 'app'])->where('path', '.*');
