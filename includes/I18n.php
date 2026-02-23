<?php

namespace StorePress;

/**
 * Define the internationalization functionality.
 */
class I18n
{

    /**
     * Load the plugin text domain for translation.
     */
    public function load_plugin_textdomain()
    {
        load_plugin_textdomain(
            'store-press',
            false,
            dirname(dirname(plugin_basename(__FILE__))) . '/languages/'
        );
    }

}
