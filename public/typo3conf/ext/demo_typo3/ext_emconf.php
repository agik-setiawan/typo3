<?php

/**
 * Extension Manager/Repository config file for ext "demo_typo3".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Demo Typo3',
    'description' => 'Demo Typo3 Site',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '10.2.0-10.4.99',
            'fluid_styled_content' => '10.2.0-10.4.99',
            'rte_ckeditor' => '10.2.0-10.4.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Agiksetiawan\\DemoTypo3\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Agik Setiawan',
    'author_email' => 'setiawanagik@gmail.com',
    'author_company' => 'Agiksetiawan',
    'version' => '1.0.0',
];
