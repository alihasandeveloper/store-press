<?php

namespace StorePress\Admin;

/**
 * The admin-specific functionality of the plugin.
 */
class Admin
{

    /**
     * The ID of this plugin.
     */
    private $plugin_name;

    /**
     * The version of this plugin.
     */
    private $version;

    /**
     * Initialize the class and set its properties.
     */
    public function __construct($plugin_name, $version)
    {
        $this->plugin_name = $plugin_name;
        $this->version = $version;
        add_action('admin_menu', [$this, 'storepress_register_custom_menu']);
    }

    /**
     * Register the stylesheets for the admin area.
     */
    public function enqueue_styles()
    {
        wp_enqueue_style($this->plugin_name, plugin_dir_url(__FILE__) . 'build/index.css', array(), $this->version, 'all');
    }

    /**
     * Register the JavaScript for the admin area.
     */
    public function enqueue_scripts()
    {
        wp_enqueue_script($this->plugin_name, plugin_dir_url(__FILE__) . 'build/index.js', array(), $this->version, true);
    }

    public function storepress_register_custom_menu()
    {
        add_menu_page(
            'StorePress',
            'StorePress',
            'manage_options',
            'store-press',
            [$this, 'storepress_admin_page_callback'],
            'dashicons-location',
            20
        );
    }

    public function storepress_admin_page_callback()
    {
        ?>
        <div id="storepress-dashboard">
        </div>
        <?php
    }

}
