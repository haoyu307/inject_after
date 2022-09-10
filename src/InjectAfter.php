<?php

namespace Bunny;

final class InjectAfter {
    /**
     * @param array $array
     * @param string $afterKey
     * @param string $newKey
     * @param mixed $newValue
     * @return array
     */
    public static function injectAfter(
        $array, $afterKey, $newKey, $newValue
    ) {
        if (!is_array($array)) {
            return array(
            $newKey => $newValue
            );
        }
        elseif ($afterKey == $newKey) {
            return $array;
        }
        $resultArray = array();
        foreach ($array as $key => $value) {
            if ($key != $newKey) $resultArray[$key] = $value;
            if ($afterKey === $key) {
                $resultArray[$newKey] = $newValue;
            }
        }
        return $resultArray;
    }
}
