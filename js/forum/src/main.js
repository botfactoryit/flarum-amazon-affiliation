import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';

app.initializers.add('botfactoryit-amazon-affiliation', function() {
	extend(CommentPost.prototype, 'init', function (post) {
		const amazonRegex = /(?:dp|product)\/([a-zA-Z0-9]{10})(?:[/?%#]|$)/;
		const linkRegex = /href="(.+?)"/g;
		const tag = app.forum.attribute('botfactoryit.amazon-affiliation.tag');
		
		let content = this.props.post.data.attributes.contentHtml;
					
		let m;
		let links = [];
		while (m = linkRegex.exec(content)) {
			links.push(m[1]);
		}
		
		links.forEach((l) => {
			if (isAmazonProductLink(l)) {
				let cleanLink = l;
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
			return (link.match(/\/\/(www\.)?amazon\.(it|com|de|fr|es)/) && amazonRegex.test(link));
		}
	});
});
