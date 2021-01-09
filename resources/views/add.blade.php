<x-app-layout>
<x-slot name="header">
    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        {{ __('Add Item') }}
    </h2>
</x-slot>

<div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-5">
        
            <form id="add_item_form" action="/item">

                <div class="form-group">
                    <textarea name="item_name" id="item_name" class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"  placeholder='Enter your item'></textarea>  
                    @if ($errors->has('item_name'))
                        <span class="text-danger">{{ $errors->first('item_name') }}</span>
                    @endif
                </div>

                <div class="form-group">
                    <button id="ajaxSubmit_add" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Item</button>
                </div>
            </form>
        </div>
    </div>
</div>
<script src="http://code.jquery.com/jquery-3.3.1.min.js">
</x-app-layout>