<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Item;

class ItemsController extends Controller
{
    public function index()
    {
        $items = auth()->user()->items();
        return view('dashboard', compact('items'));
    }
    public function add()
    {
    	return view('add');
    }

    public function create(Request $request)
    {
        $this->validate($request, [
            'item_name' => 'required'
        ]);
    	$item = new Item();
    	$item->item_name = $request->item_name;
    	$item->user_id = auth()->user()->id;
    	$item->save();
    	return redirect('/dashboard'); 
    }

    public function edit(Item $item)
    {

    	if (auth()->user()->id == $item->user_id)
        {            
                return view('edit', compact('item'));
        }           
        else {
             return redirect('/dashboard');
         }            	
    }

    public function update(Request $request, Item $item)
    {
    	if(isset($_POST['delete'])) {
    		$item->delete();
    		return redirect('/dashboard');
    	}
    	else
    	{
            $this->validate($request, [
                'item_name' => 'required'
            ]);
    		$item->item_name = $request->item_name;
	    	$item->save();
	    	return redirect('/dashboard'); 
    	}    	
    }
}