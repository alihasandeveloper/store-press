<?php

/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also includes all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @link              https://https://github.com/alihasandeveloper
 * @since             1.0.0
 * @package           Store_Press
 *
 * @wordpress-plugin
 * Plugin Name:       StorePress – Store Locator for WordPress
 * Plugin URI:        https://#
 * Description:       StorePress is a powerful store locator plugin that helps you display store locations, maps, and nearby stores on your website with an easy-to-use interface.
 * Version:           1.0.0
 * Author:            Ali Hasan
 * Author URI:        https://github.com/alihasandeveloper/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       store-press
 * Domain Path:       /languages
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
	die;
}

require __DIR__ . '/vendor/autoload.php';

/**
 * Currently plugin version.
 */
define('STORE_PRESS_VERSION', '1.0.0');

/**
 * The code that runs during plugin activation.
 */
function activate_store_press()
{
	StorePress\Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 */
function deactivate_store_press()
{
	StorePress\Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'activate_store_press');
register_deactivation_hook(__FILE__, 'deactivate_store_press');

/**
 * Begins execution of the plugin.
 */
function run_store_press()
{

	$plugin = new StorePress\StorePress();
	$plugin->run();

}
run_store_press();
