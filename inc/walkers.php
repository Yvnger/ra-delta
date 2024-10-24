<?php
class Main_Nav_Walker extends Walker_Nav_Menu {
    function start_lvl(&$output, $depth = 0, $args = null) {
        $indent = str_repeat("\t", $depth);
        $classes = array('sub-menu');
        $class = join(' ', apply_filters('nav_menu_submenu_css_class', $classes, $args, $depth));
        $class = $class ? ' class="' . esc_attr($class) . '"' : '';
        $output .= "\n" . $indent . '<ul' . $class . '>' . "\n";
    }

    function end_lvl(&$output, $depth = 0, $args = null) {
        $output .= str_repeat("\t", $depth) . "</ul>\n";
    }

    function start_el(&$output, $item, $depth = 0, $args = null, $id = 0) {
        $indent = ($depth) ? str_repeat("\t", $depth) : '';
        
        $classes = empty($item->classes) ? array() : (array) $item->classes;
        $class_names = join(' ', $classes);

        $class_names .= ' nav__item'; // Замените на ваши классы
        $class_names = $class_names ? ' class="' . esc_attr($class_names) . '"' : '';

        $attributes = array();
        $attributes['title']  = !empty($item->attr_title) ? ' title="' . esc_attr($item->attr_title) . '"' : '';
        $attributes['target'] = !empty($item->target) ? ' target="' . esc_attr($item->target) . '"' : '';
        $attributes['rel']    = !empty($item->xfn) ? ' rel="' . esc_attr($item->xfn) . '"' : '';
        $attributes['href']   = !empty($item->url) ? ' href="' . esc_url($item->url) . '"' : '';
        $attributes['class']  = 'class="nav__link"';

        $attributes = apply_filters('nav_menu_link_attributes', $attributes, $item, $args, $depth);
        $attribute_string = join(' ', $attributes);

        $title = apply_filters('the_title', $item->title, $item->ID);

        $item_output = $args->before;
        $item_output .= '<a'. $attribute_string .'>';
        $item_output .= $args->link_before . $title . $args->link_after;
        $item_output .= '</a>';
        $item_output .= $args->after;

        $output .= $indent . '<li' . $class_names .'>' . apply_filters('walker_nav_menu_start_el', $item_output, $item, $depth, $args);
    }

    // Конец элемента меню
    function end_el(&$output, $item, $depth = 0, $args = null) {
        $output .= "</li>\n";
    }
}