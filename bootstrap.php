<?php

use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
    $events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
        if ($event->isForum()) {
            $event->addAssets(__DIR__.'/js/forum/dist/extension.js');
            $event->addAssets(__DIR__.'/less/forum/extension.less');
            $event->addBootstrapper('swissup/theme/main');
        }
    });
};
