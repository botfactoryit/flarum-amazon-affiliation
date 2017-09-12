'use strict';

System.register('botfactoryit/amazon-affiliation/components/AmazonAffiliationSettingsModal', ['flarum/components/SettingsModal'], function (_export, _context) {
	"use strict";

	var SettingsModal, AmazonAffiliationSettingsModal;
	return {
		setters: [function (_flarumComponentsSettingsModal) {
			SettingsModal = _flarumComponentsSettingsModal.default;
		}],
		execute: function () {
			AmazonAffiliationSettingsModal = function (_SettingsModal) {
				babelHelpers.inherits(AmazonAffiliationSettingsModal, _SettingsModal);

				function AmazonAffiliationSettingsModal() {
					babelHelpers.classCallCheck(this, AmazonAffiliationSettingsModal);
					return babelHelpers.possibleConstructorReturn(this, (AmazonAffiliationSettingsModal.__proto__ || Object.getPrototypeOf(AmazonAffiliationSettingsModal)).apply(this, arguments));
				}

				babelHelpers.createClass(AmazonAffiliationSettingsModal, [{
					key: 'className',
					value: function className() {
						return 'AmazonAffiliationSettingsModal Modal--small';
					}
				}, {
					key: 'title',
					value: function title() {
						return 'Amazon Affiliation';
					}
				}, {
					key: 'form',
					value: function form() {
						return [m(
							'div',
							{ className: 'Form-group' },
							m(
								'label',
								null,
								'Amazon Affiliation tag'
							),
							m('input', { className: 'FormControl', bidi: this.setting('botfactoryit.amazon-affiliation.tag') })
						)];
					}
				}]);
				return AmazonAffiliationSettingsModal;
			}(SettingsModal);

			_export('default', AmazonAffiliationSettingsModal);
		}
	};
});;
'use strict';

System.register('botfactoryit/amazon-affiliation/main', ['flarum/app', 'botfactoryit/amazon-affiliation/components/AmazonAffiliationSettingsModal'], function (_export, _context) {
	"use strict";

	var app, AmazonAffiliationSettingsModal;
	return {
		setters: [function (_flarumApp) {
			app = _flarumApp.default;
		}, function (_botfactoryitAmazonAffiliationComponentsAmazonAffiliationSettingsModal) {
			AmazonAffiliationSettingsModal = _botfactoryitAmazonAffiliationComponentsAmazonAffiliationSettingsModal.default;
		}],
		execute: function () {

			app.initializers.add('botfactoryit-amazon-affiliation', function () {
				app.extensionSettings['botfactoryit-amazon-affiliation'] = function () {
					return app.modal.show(new AmazonAffiliationSettingsModal());
				};
			});
		}
	};
});