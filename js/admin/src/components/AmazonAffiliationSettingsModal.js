import SettingsModal from 'flarum/components/SettingsModal';

export default class AmazonAffiliationSettingsModal extends SettingsModal {
	className() {
		return 'AmazonAffiliationSettingsModal Modal--small';
	}

	title() {
		return 'Amazon Affiliation';
	}

	form() {
		return [
			<div className="Form-group">
				<label>Amazon Affiliation tag</label>
				<input className="FormControl" bidi={this.setting('botfactoryit.amazon-affiliation.tag')}/>
			</div>
		];
	}
}
