<?php
header('Content-Type: application/json');
$directoryPath = '_build';
$folders = array_filter(glob($directoryPath . '/*'), 'is_dir');
$folderNames = array_map('basename', $folders);
$filteredFolders = array_filter($folderNames, function($folder) {
    return $folder !== 'zips';
});

// Extract unique sizes, languages, and variants
$sizes = array_unique(array_map(function($folder) {
    return explode('_', $folder)[0];
}, $filteredFolders));

$languages = array_unique(array_map(function($folder) {
    return explode('_', $folder)[1];
}, $filteredFolders));

$variants = array_unique(array_map(function($folder) {
    return explode('_', $folder)[2];
}, $filteredFolders));

echo json_encode([
    'folders' => array_values($filteredFolders),
    'sizes' => array_values($sizes),
    'languages' => array_values($languages),
    'variants' => array_values($variants)
]);
?>