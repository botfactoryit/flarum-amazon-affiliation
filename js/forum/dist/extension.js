'use strict';

System.register('botfactoryit/amazon-affiliation/main', ['flarum/extend', 'flarum/components/CommentPost'], function (_export, _context) {
	"use strict";

	var extend, CommentPost;
	return {
		setters: [function (_flarumExtend) {
			extend = _flarumExtend.extend;
		}, function (_flarumComponentsCommentPost) {
			CommentPost = _flarumComponentsCommentPost.default;
		}],
		execute: function () {

			app.initializers.add('botfactoryit-amazon-affiliation', function () {
				extend(CommentPost.prototype, 'init', function (post) {
					var amazonRegex = /(?:dp|product)\/([a-zA-Z0-9]{10})(?:[/?%#]|$)/;
					var linkRegex = /href="(.+?)"/g;
					var tag = app.forum.attribute('botfactoryit.amazon-affiliation.tag');

					var content = this.props.post.data.attributes.contentHtml;

					var m = void 0;
					var links = [];
					while (m = linkRegex.exec(content)) {
						links.push(m[1]);
					}

					links.forEach(function (l) {
						if (isAmazonProductLink(l)) {
							var cleanLink = l;
							cleanLink = cleanLink.split('ref=')[0];
							cleanLink = cleanLink.split('?')[0];
							cleanLink = cleanLink.split('#')[0];
							cleanLink = cleanLink + '?tag=' + tag;
							content = content.replace(l, cleanLink);
						}
					});

					content = content.replace('t=_', 't=' + tag);
					content = content.replace('tracking_id=_', 'tracking_id=' + tag);

					this.props.post.data.attributes.contentHtml = content;

					function isAmazonProductLink(link) {
						return link.match(/\/\/(www\.)?amazon\.(it|com|de|fr)/) && amazonRegex.test(link);
					}
				});
			});
		}
	};
});