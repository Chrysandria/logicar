<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use App\Http\Controllers\MyController;

Route::get('/', function () {
    return view('welcome');
})->name('login');

Route::post('/test', [MyController::class,'postest'])->name('test');

Route::middleware("auth")->group(function () {
    
});
