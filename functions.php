<?php
define('HOME_PAGE_ID', 25);

function theme_setup()
{
    add_theme_support('title-tag');
    // add_theme_support('automatic-feed-links');
    // add_theme_support('custom-header');
    // add_theme_support('custom-background');
    // add_theme_support('wp-block-styles');
    // add_theme_support('responsive-embeds');
    // add_theme_support('align-wide');
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');
    // add_theme_support('automatic-feed-links');
    // add_theme_support('comments', array('avatar' => true));
    // add_theme_support('html5', array(
        // 'search-form',
        // 'comment-form',
        // 'comment-list',
        // 'gallery',
        // 'caption',
        // 'style',
        // 'script',
    // ));
}
add_action('after_setup_theme', 'theme_setup');

function styles_and_scripts()
{
    /* CSS */
    wp_enqueue_style('libs', get_template_directory_uri() . '/assets/css/libs.min.css', array(), '1.0', 'all');
    wp_enqueue_style('main', get_template_directory_uri() . '/assets/css/style.min.css', array(), '1.0', 'all');

    /* JS */
    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/bundle.js', '', 1.0, true);
    // wp_localize_script('main', 'wp_data', array(
    //     'ajax_url' => admin_url('admin-ajax.php'),
    // ));
}

function menus()
{
    register_nav_menus(
        array(
            'header-menu' => __('Навигационная панель', 'gulp-boilerplate'),
            'footer-menu-1' => __('Footer 1', 'gulp-boilerplate'),
            'footer-menu-2' => __('Footer 2', 'gulp-boilerplate'),
        )
    );
}
add_action('init', 'menus');

include_once 'inc/customizer.php';
include_once 'inc/helpers.php';
include_once 'inc/walkers.php';
// include_once 'inc/ajax.php';