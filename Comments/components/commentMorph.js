import { Morph, Icon, Label } from 'lively.morphic';
import { pt, Rectangle } from 'lively.graphics';
import { connect } from 'lively.bindings';
import { resource } from 'lively.resources';
import { CommentBrowser } from './commentBrowser.js';
import { CommentIndicator } from './commentIndicator.js';

export class CommentGroupMorph extends Morph {
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
    this.ui.groupNameLabel.textString = this.referenceMorph.name;
  }

  async addCommentMorph (comment) {
    const commentMorph = await resource('part://CommentComponents/comment morph master').read();
    const commentIndicator = CommentIndicator.for(this.referenceMorph, comment);
    this.commentIndicators.push(commentIndicator);
    commentMorph.initialize(comment, this.referenceMorph);
    this.ui.commentMorphContainer.addMorph(commentMorph);
    this.ui.commentMorphContainer.extent = pt(0, 0);
    this.updateCommentCountLabel();
  }

  onOwnerChanged () {
    // called when comment groups enter or exit the screen
    super.onOwnerChanged();
    if (CommentBrowser.isOpen()) {
      this.showCommentIndicators();
    } else {
      this.hideCommentIndicators();
    }
  }

  updateCommentCountLabel () {
    this.ui.commentCountLabel.textString = this.getCommentMorphCount();
  }

  getCommentMorphCount () {
    return this.ui.commentMorphContainer.submorphs.length;
  }

  async removeCommentMorph (comment) {
    this.ui.commentMorphContainer.submorphs.forEach((commentMorph) => {
      if (commentMorph.comment.timestamp == comment.timestamp) {
        commentMorph.remove();
      }
    });
    this.updateCommentCountLabel();
  }

  applyExpanded () {
    Icon.setIcon(this.ui.collapseIndicator, this.isExpanded ? 'caret-down' : 'caret-right');
    if (!this.isExpanded) {
      this.commentMorphCache = this.ui.commentMorphContainer.submorphs;
      this.ui.commentMorphContainer.submorphs = [];
      // it should not be necessary to set extent manually, but layout doesn't change it automatically
      this.ui.commentMorphContainer.extent = pt(0, 0);
    } else {
      this.ui.commentMorphContainer.submorphs = this.commentMorphCache;
    }
  }

  toggleExpanded () {
    this.isExpanded = !this.isExpanded;
    this.applyExpanded();
  }

  showCommentIndicators () {
    this.commentIndicators.forEach((commentIndicator) => $world.addMorph(commentIndicator));
  }

  hideCommentIndicators () {
    // $world.setStatusMessage(this.commentIndicators);
    this.commentIndicators.forEach((commentIndicator) => commentIndicator.delete());
  }
}

export class CommentMorph extends Morph {
  static get properties () {
    return {
      comment: {
      },
      referenceMorph: {
      }
    };
  }

  constructor () {
    super();
  }

  setDate () {
    const [date, time] = new Date(this.comment.timestamp).toLocaleString('de-DE', { hour12: false }).split(', ');
    this.ui.dateLabel.textString = date + ' ' + time;
  }

  initializeUI () {
    this.ui = {
      dateLabel: this.get('date label'),
      commentTextField: this.get('comment text field'),
      deleteButton: this.get('delete button'),
      editSaveButton: this.get('edit save button')
    };

    this.ui.commentTextField.textString = this.comment.text;
    this.editSaveButtonState = 'edit';
    this.ui.commentTextField.readOnly = true;
  }

  initialize (comment, referenceMorph) {
    this.comment = comment;
    this.referenceMorph = referenceMorph;
    this.initializeUI();

    this.setDate();
  }

  saveComment () {
    Icon.setIcon(this.ui.editSaveButton, 'pencil-alt');
    this.editSaveButtonState = 'edit';
    this.ui.commentTextField.readOnly = true;
    this.ui.editSaveButton.padding.width -= 1;

    this.textChanged();
  }

  editComment () {
    Icon.setIcon(this.ui.editSaveButton, 'save');
    this.editSaveButtonState = 'save';
    this.ui.commentTextField.readOnly = false;
    this.ui.editSaveButton.padding.width += 1; // Icon widths are off by one
  }

  toggleEditSaveButton () {
    if (this.editSaveButtonState === 'edit') {
      this.editComment();
    } else if (this.editSaveButtonState === 'save') {
      this.saveComment();
    }
  }

  textChanged () {
    const text = this.ui.commentTextField.textString;
    this.referenceMorph.comments.forEach((comment) => {
      if (comment.timestamp === this.comment.timestamp) { // Maybe use ids in comments / implement an equal method for a comment class
        comment.text = text;
        return true; // Break
      }
    });
  }

  onMouseDown (evt) {
    super.onMouseDown(evt);

    if (evt.targetMorph === this.ui.deleteButton) {
      this.referenceMorph.removeComment(this.comment);
    } else if (evt.targetMorph === this.ui.editSaveButton) {
      this.toggleEditSaveButton();
    } else if (this.referenceMorph) {
      this.referenceMorph.show();
    }
  }
}
