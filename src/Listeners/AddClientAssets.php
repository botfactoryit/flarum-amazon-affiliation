<?php namespace BotFactory\AmazonAffiliation\Listeners;

use DirectoryIterator;
use Flarum\Event\ConfigureWebApp;
use Illuminate\Contracts\Events\Dispatcher;

class AddClientAssets {
	public function subscribe(Dispatcher $events) {
		$events->listen(ConfigureWebApp::class, [$this, 'addAssets']);
	}
	
	public function addAssets(ConfigureWebApp $app) {
		if ($app->isForum()) {
			$app->addAssets([
				__DIR__ . '/../../js/forum/dist/extension.js',
			]);
			
			$app->addBootstrapper('botfactoryit/amazon-affiliation/main');
		}
		
		if ($app->isAdmin()) {
			$app->addAssets([
				__DIR__ . '/../../js/admin/dist/extension.js',
			]);
			
			$app->addBootstrapper('botfactoryit/amazon-affiliation/main');
		}
	}
}
