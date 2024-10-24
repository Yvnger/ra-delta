<?php
add_action('customize_register', 'customizer_settings');

function customizer_settings(WP_Customize_Manager $wp_customize)
{

    /**
     * Секция "Контакты"
     */
    $wp_customize->add_section('contacts_section', array(
        'title'    => __('Контакты', 'gulp-boilerplate'),
        'priority' => 30,
    ));

    // Номер телефона
    $wp_customize->add_setting('contact_phone', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('contact_phone', array(
        'label'    => __('Телефон', 'gulp-boilerplate'),
        'section'  => 'contacts_section',
        'type'     => 'text',
    ));

    // E-mail
    $wp_customize->add_setting('contact_email', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_email',
    ));
    $wp_customize->add_control('contact_email', array(
        'label'    => __('Email', 'gulp-boilerplate'),
        'section'  => 'contacts_section',
        'type'     => 'email',
    ));

    // Telegram
    $wp_customize->add_setting('contact_telegram', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('contact_telegram', array(
        'label'    => __('Telegram URL', 'gulp-boilerplate'),
        'section'  => 'contacts_section',
        'type'     => 'url',
    ));

    // RuTube
    $wp_customize->add_setting('contact_rutube', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('contact_rutube', array(
        'label'    => __('RuTube URL', 'gulp-boilerplate'),
        'section'  => 'contacts_section',
        'type'     => 'url',
    ));

    // VK
    $wp_customize->add_setting('contact_vk', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('contact_vk', array(
        'label'    => __('VK URL', 'gulp-boilerplate'),
        'section'  => 'contacts_section',
        'type'     => 'url',
    ));

    // Instagram
    $wp_customize->add_setting('contact_instagram', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control('contact_instagram', array(
        'label'    => __('Instagram URL', 'gulp-boilerplate'),
        'section'  => 'contacts_section',
        'type'     => 'url',
    ));

    /**
     * Подвал сайта
     */
    $wp_customize->add_section('footer_section', array(
        'title'    => __('Подвал сайта', 'gulp-boilerplate'),
        'priority' => 30,
    ));

    // Копирайт
    $wp_customize->add_setting('footer_copyright', array(
        'default'           => '',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control('footer_copyright', array(
        'label'    => __('Копирайт', 'gulp-boilerplate'),
        'section'  => 'footer_section',
        'type'     => 'textarea',
    ));
}
