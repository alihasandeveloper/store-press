<?php

namespace StorePress;

class Register
{
    public function register_post_type()
    {
        $labels = [
            'name' => 'Stores',
            'singular_name' => 'Store',
            'menu_name' => 'Stores',
            'add_new' => 'Add New',
            'add_new_item' => 'Add New Store',
            'edit_item' => 'Edit Store',
            'new_item' => 'New Store',
            'view_item' => 'View Store',
            'all_items' => 'All Stores',
            'search_items' => 'Search Stores',
            'not_found' => 'No stores found',
        ];

        $args = [
            'labels' => $labels,
            'public' => true,
            'menu_icon' => 'dashicons-store',
            'supports' => ['title', 'editor', 'thumbnail'],
            'has_archive' => true,
            'rewrite' => ['slug' => 'stores'],
            'show_in_rest' => true,
        ];

        register_post_type('store', $args);
    }

    public function register_taxonomy()
    {
        $labels = [
            'name' => 'Store Categories',
            'singular_name' => 'Store Category',
            'search_items' => 'Search Categories',
            'all_items' => 'All Categories',
            'edit_item' => 'Edit Category',
            'update_item' => 'Update Category',
            'add_new_item' => 'Add New Category',
            'new_item_name' => 'New Category Name',
            'menu_name' => 'Store Categories',
        ];

        $args = [
            'hierarchical' => true,
            'labels' => $labels,
            'show_ui' => true,
            'show_admin_column' => true,
            'rewrite' => ['slug' => 'store-category'],
            'show_in_rest' => true,
        ];

        register_taxonomy('store_category', ['store'], $args);
    }
}