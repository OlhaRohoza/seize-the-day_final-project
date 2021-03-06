<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/search/{phrase}', [EntryController::class, 'search']);
Route::get('{period}/{value1?}/{value2?}', [EntryController::class, 'index']);

// Route::post('/user/day/{user_id}',[ImageUploadController::class,'SaveImage']);
// Route::post('/user/store-image',[EntryController::class,'storeImage'])
// ->name('images.store');
// Route::get('/user/view-image',[EntryController::class,'storeImage'])->name('images.view');

// Route::get('{user_id}/year/{year}', [EntryController::class, 'year']);
