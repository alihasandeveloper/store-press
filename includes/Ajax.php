<?php

namespace StorePress;

class Ajax
{
    public function __construct()
    {

    }

    private function auth()
    {
        return current_user_can('manage_options');
    }

    public function add_store()
    {
        $this->auth();

    }

    public function edit_store()
    {
        $this->auth();
    }

    public function delete_store()
    {
        $this->auth();
    }

    public function add_category()
    {
        $this->auth();
    }

    public function edit_category()
    {
        $this->auth();
    }

    public function delete_category()
    {
        $this->auth();
    }
}