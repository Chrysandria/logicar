<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MyController extends Controller
{
    public function unlogged(){
        return view("welcome");
    }

    public function admin(){
        return view("adminView");
    }

    public function service(){
        return view("serviceView");
    }

    public function postest(Request $request){
        return response()->json([
            "message" => "Coucou post."
        ]);
    }
}
