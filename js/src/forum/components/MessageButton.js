import NotificationsDropdown from 'flarum/components/NotificationsDropdown';

export default class MessageButton extends NotificationsDropdown {
    view() {
      const userUrl = '/u/' + app.session.user.data.attributes.username + '/byobu';
      return (
        <div class="ButtonGroup">
          <a href={userUrl}>
            <button class="Button Button--flat" title="Messages">
              <i class="icon fas fa-envelope Button-icon"></i>
              <span class="Button-label">Private Messaging</span>
            </button>
          </a>
        </div>
      )
    }
}
