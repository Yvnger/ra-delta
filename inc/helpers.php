<?php
/**
 * Debug 
 */
function dd($var) {
    echo '<pre>';
    var_dump($var);
    echo '</pre>';
}

/**
 * Clean phone
 */
function cleanPhone($phone) {
    return preg_replace('/[\s\-\(\)]/', '', $phone);
}

/**
 * Склоняет слово в зависимости от числа.
 *
 * @param int $number Число
 * @param string $one Форма для единичного числа
 * @param string $few Форма для чисел от 2 до 4
 * @param string $many Форма для чисел 5 и более
 * @return string Склоненное слово
 */
function pluralize($number, $one, $few, $many) {
    $number = abs($number) % 100;
    $n1 = $number % 10;
    
    if ($number > 10 && $number < 20) {
        // Специфический случай для чисел от 11 до 19
        return $many;
    }
    
    switch ($n1) {
        case 1:
            return $one;
        case 2:
        case 3:
        case 4:
            return $few;
        default:
            return $many;
    }
}