<?php
// Load more function for gallery
// function load_more_images()
// {
//     $start = isset($_POST['start']) ? intval($_POST['start']) : 0;
//     $count = isset($_POST['count']) ? intval($_POST['count']) : 16;

//     $gallery = get_field('gallery', HOME_PAGE_ID); // Замените HOME_PAGE_ID на ID вашей страницы
//     $images = isset($gallery['photos']) ? $gallery['photos'] : array();

//     $more_images = array_slice($images, $start, $count);

//     $html = '';
//     foreach ($more_images as $image) {
//         $html .= get_gallery_item($image);
//     }

//     wp_send_json(array(
//         'html' => $html,
//         'count' => count($more_images)
//     ));
// }

// add_action('wp_ajax_load_more_images', 'load_more_images');
// add_action('wp_ajax_nopriv_load_more_images', 'load_more_images');
