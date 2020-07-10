import { extend } from 'flarum/extend';
import HeaderPrimary from 'flarum/components/HeaderPrimary';
import HeaderSecondary from 'flarum/components/HeaderSecondary';
import IndexPage from 'flarum/components/IndexPage';
import Button from 'flarum/components/Button';
import LinkButton from 'flarum/components/LinkButton';
import NavItem from 'flarum/components/nav-item';

app.initializers.add('ejin/ejin-custom', () => {
  extend(HeaderSecondary.prototype, 'items', function(items) {
    if (!app.session.user || !app.forum.attribute('canSaveDrafts')) return;
    items.add(
      'message',
      LinkButton.component({
        icon: 'fas fa-envelope',
        title: 'Messages',
        href: '/u/' + app.session.user.data.attributes.username + '/byobu',
        className: 'Button Button--icon Button--link Button-emojionearea',
      }),
      20
    );
  });

  extend(IndexPage.prototype, 'navItems', function (items) {
      if (!app.session.user || !app.forum.attribute('canSaveDrafts')) return;
      items.remove('fof-user-directory')
      items.remove('privateDiscussions')
      items.add(
        'message',
        LinkButton.component({
          icon: 'fas fa-envelope',
          label: 'Messages',
          text: 'Messages',
          href: '/u/' + app.session.user.data.attributes.username + '/byobu',
          className: 'Button Button--icon Button--link Button-emojionearea',
        }),
        100
      );

      items.add(
        'user-directory',
        LinkButton.component({
          icon: 'fas fa-users',
          text: 'User Directory',
          href: '/users',
          className: 'Button Button--icon Button--link Button-emojionearea',
        }),
        20
      );
  });
});
