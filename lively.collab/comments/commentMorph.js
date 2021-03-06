import { Morph, Icon } from 'lively.morphic';
import { pt, Color } from 'lively.graphics';
import { remove } from 'lively.lang/array.js';
import { connect } from 'lively.bindings';
import { resource } from 'lively.resources';
import { CommentBrowser } from './commentBrowser.js';
import { CommentIndicator } from './commentIndicator.js';

export class CommentGroupMorph extends Morph {
  static get properties () {
    return {
      referenceMorph: {
        set (referenceMorph) {
          this.setProperty('referenceMorph', referenceMorph);
        }
      },
      isExpanded: {
        defaultValue: true,
        set (expand) {
          this.setProperty('isExpanded', expand);
        }
      },
      commentMorphs: {
        defaultValue: []
      },
      commentIndicators: {
        defaultValue: []
      },
      ui: {}
    };
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // initialization
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  async initialize (referenceMorph) {
    this.referenceMorph = referenceMorph;
    await this.initializeUI();
    this.commentIndicators = [];
    this.isExpanded = true;
  }

  async initializeUI () {
    this.ui = {
      groupNameLabel: this.get('group name label'),
      commentMorphContainer: this.get('comment morph container'),
      header: this.get('header'),
      collapseIndicator: this.get('collapse indicator'),
      commentCountLabel: this.get('comment count label')
    };
    connect(this.ui.header, 'onMouseDown', this, 'toggleExpanded');
    this.updateName();
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // comment morph addition/removal
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  async addCommentMorph (comment) {
    const commentMorph = await resource('part://CommentComponents/comment morph master').read();
    await commentMorph.initialize(comment, this.referenceMorph);
    this.commentMorphs.push(commentMorph);
    this.updateCommentContainerSubmorphs();
    this.updateCommentCountLabel();
  }

  removeCommentMorphFor (comment) {
    this.commentMorphs.forEach(commentMorph => {
      if (commentMorph.comment.equals(comment)) {
        commentMorph.abandon();
        remove(this.commentMorphs, commentMorph);
      }
    });
    this.updateCommentContainerSubmorphs();
    this.updateCommentCountLabel();
  }

  hasCommentMorphForComment (comment) {
    let result = false;
    this.commentMorphs.forEach((commentMorph) => {
      if (commentMorph.comment.equals(comment)) {
        result = true;
      }
    });
    return result;
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // reference morph changes
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  updateName () {
    this.ui.groupNameLabel.textString = this.referenceMorph.name;
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // counts
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  getCommentCount () {
    return this.commentMorphs.length;
  }

  getUnresolvedCommentCount () {
    return this.commentMorphs.filter((commentMorph) => !commentMorph.comment.isResolved()).length;
  }

  updateCommentCountLabel () {
    this.ui.commentCountLabel.textString = this.getCommentCount();
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // comment indicators
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  showCommentIndicators () {
    this.commentMorphs.forEach((commentMorph) => commentMorph.showCommentIndicator());
  }

  hideCommentIndicators () {
    this.commentMorphs.forEach((commentMorph) => commentMorph.hideCommentIndicator());
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // expansion
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  applyExpanded () {
    Icon.setIcon(this.ui.collapseIndicator, this.isExpanded ? 'caret-down' : 'caret-right');
    this.updateCommentContainerSubmorphs();
    if (!this.isExpanded) {
      // it should not be necessary to set extent manually, but layout doesn't change it automatically
      this.ui.commentMorphContainer.extent = pt(0, 0);
    }
  }

  toggleExpanded () {
    this.isExpanded = !this.isExpanded;
    this.applyExpanded();
  }

  updateCommentContainerSubmorphs () {
    this.ui.commentMorphContainer.submorphs = this.isExpanded ? this.commentMorphs : [];
  }
}

export class CommentMorph extends Morph {
  static get properties () {
    return {
      comment: {
        set (comment) {
          this.setProperty('comment', comment);
        }
      },
      referenceMorph: {
        set (referenceMorph) {
          this.setProperty('referenceMorph', referenceMorph);
        }
      },
      commentIndicator: {},
      isInEditMode: {
        defaultValue: false
      }
    };
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // initialization
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

  async initialize (comment, referenceMorph) {
    this.comment = comment;
    this.referenceMorph = referenceMorph;
    this.initializeUI();
    await this.showCommentIndicator();
    this.setDate();
    this.setUser();
  }

  setDate () {
    const [date, time] = new Date(this.comment.timestamp).toLocaleString('de-DE', { hour12: false }).split(', ');
    this.ui.dateLabel.textString = date + ' ' + time;
  }

  setUser () {
    let username = this.comment.username;
    if (username.startsWith('guest')) {
      username = 'guest';
    }
    this.ui.usernameLabel.textString = username;
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // ui
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  initializeUI () {
    this.reset();

    this.ui.commentTextField.textString = this.comment.text;
    this.setDefaultUI();
  }

  setDefaultUI () {
    Icon.setIcon(this.ui.editSaveButton, 'pencil-alt');
    Icon.setIcon(this.ui.resolveButton, this.comment.resolved ? 'undo-alt' : 'check');

    // Edit/Save Icon widths are off by one, revert the additional padding from setEditUI
    if (this.isInEditMode) this.ui.editSaveButton.padding.width -= 1;

    this.isInEditMode = false;

    this.enabledButtonAppearance();
    this.ui.editSaveButton.tooltip = 'Edit Comment';

    this.ui.commentTextField.readOnly = true;
    this.ui.commentTextField.fill = Color.rgb(251, 252, 252);
    this.ui.commentTextField.borderStyle = 'none';
  }

  enabledButtonAppearance () {
    const buttonColor = Color.rgb(127, 140, 141);

    this.ui.resolveButton.fontColor = buttonColor;
    this.ui.resolveButton.nativeCursor = 'pointer';
    this.ui.resolveButton.tooltip = this.comment.isResolved() ? 'Unresolve Comment' : 'Resolve Comment';

    this.ui.deleteButton.fontColor = buttonColor;
    this.ui.deleteButton.nativeCursor = 'pointer';
    this.ui.deleteButton.tooltip = 'Delete Comment';
  }

  disabledButtonAppearance () {
    const deactivatedButtonColor = Color.rgba(127, 140, 141, 0.4);

    this.ui.resolveButton.fontColor = deactivatedButtonColor;
    this.ui.resolveButton.nativeCursor = 'default';
    this.ui.resolveButton.tooltip = 'Save comment to be able to resolve it';

    this.ui.deleteButton.fontColor = deactivatedButtonColor;
    this.ui.deleteButton.nativeCursor = 'default';
    this.ui.deleteButton.tooltip = 'Save comment to be able to delete it';
  }

  setEditUI () {
    Icon.setIcon(this.ui.editSaveButton, 'save');

    // Edit/Save Icon widths are off by one, will be reverted in setDefaultUI
    if (!this.isInEditMode) this.ui.editSaveButton.padding.width += 1;

    this.isInEditMode = true;

    this.disabledButtonAppearance();
    this.ui.editSaveButton.tooltip = 'Save Comment';

    this.ui.commentTextField.readOnly = false;
    this.ui.commentTextField.fill = Color.white;
    this.ui.commentTextField.borderStyle = 'solid';
    this.ui.commentTextField.focus();
  }

  reset () {
    this.ui = {
      dateLabel: this.get('date label'),
      commentTextField: this.get('comment text field'),
      deleteButton: this.get('delete button'),
      resolveButton: this.get('resolve button'),
      editSaveButton: this.get('edit save button'),
      usernameLabel: this.get('user name label')
    };
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // comment actions
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  saveComment () {
    this.comment.text = this.ui.commentTextField.textString;
    this.setDefaultUI();
  }

  abortCommentEdit () {
    this.ui.commentTextField.textString = this.comment.text;
    this.setDefaultUI();
  }

  toggleEditMode () {
    this.isInEditMode ? this.saveComment() : this.setEditUI();
  }

  async toggleResolveStatus () {
    this.abortCommentEdit();
    this.comment.toggleResolveStatus();
    await CommentBrowser.instance.applyResolveStatus(this.comment, this.referenceMorph);
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // comment indicators
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  async showCommentIndicator () {
    if (!this.commentIndicator) {
      this.commentIndicator = await resource('part://CommentComponents/comment indicator master').read();
      await this.commentIndicator.initialize(this, this.comment, this.referenceMorph);
    }
    if (CommentBrowser.isOpen() && (this.comment.isResolved() == CommentBrowser.showsArchive()) && this.referenceMorph.world()) {
      this.commentIndicator.display();
    }
  }

  hideCommentIndicator () {
    if (this.commentIndicator) {
      this.commentIndicator.abandon();
    }
    this.commentIndicator = undefined;
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // lifecycle
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  async onLoad () {
    this.reset();
  }

  abandon () {
    if (this.commentIndicator) this.commentIndicator.abandon();
    super.abandon();
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // interaction
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  async performClickAction (action) {
    switch (action) {
      case 'remove':
        if (!this.isInEditMode) {
          await this.referenceMorph.removeComment(this.comment);
        }
        break;
      case 'toggle_edit':
        this.toggleEditMode();
        break;
      case 'resolve':
        if (!this.isInEditMode) {
          this.toggleResolveStatus();
        }
        break;
    }
  }

  onMouseDown (evt) {
    super.onMouseDown(evt);

    if (evt.targetMorph === this.ui.deleteButton) {
      this.performClickAction('remove');
    } else if (evt.targetMorph === this.ui.editSaveButton) {
      this.performClickAction('toggle_edit');
    } else if (evt.targetMorph === this.ui.resolveButton) {
      this.performClickAction('resolve');
    } else if (this.referenceMorph && !this.isInEditMode) {
      this.referenceMorph.show();
    }
  }
}
