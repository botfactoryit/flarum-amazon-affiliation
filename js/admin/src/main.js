import app from 'flarum/app';
import AmazonAffiliationSettingsModal from 'botfactoryit/amazon-affiliation/components/AmazonAffiliationSettingsModal';

app.initializers.add('botfactoryit-amazon-affiliation', () => {
	app.extensionSettings['botfactoryit-amazon-affiliation'] = () => app.modal.show(new AmazonAffiliationSettingsModal());
});
