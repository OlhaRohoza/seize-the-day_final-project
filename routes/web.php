<?php

use App\Http\Controllers\HomepageController;
use App\Http\Controllers\EntryController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group whichs
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{path?}', [App\Http\Controllers\HomepageController::class, 'index'])->where('path', '.*')->name('home');

Route::post('/user/day', [App\Http\Controllers\EntryController::class, 'store']);
Route::get('/user/day', [App\Http\Controllers\EntryController::class, 'show']);
Route::get('/user/day/{period}', [App\Http\Controllers\EntryController::class, 'index']);

Route::put('/user/day/{id}', [App\Http\Controllers\EntryController::class, 'editeEntrie']);
// Route::get('/user/day/{id}', [App\Http\Controllers\EntryController::class, 'editeEntrie']);
Route::delete('/user/day/{id}', [App\Http\Controllers\EntryController::class, 'destroy']);
Route::get('/user/day/{id}', [App\Http\Controllers\EntryController::class, 'show']);
