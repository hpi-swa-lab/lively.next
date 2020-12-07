import { Window } from 'lively.components';
import { CommentMorph } from './commentMorph.js';
import { VerticalLayout, Label, Morph } from 'lively.morphic';
import { pt, Rectangle } from 'lively.graphics';
import { resource } from 'lively.resources';
import { connect } from 'lively.bindings';
import { CommentIndicator } from './commentIndicator.js';
import { Badge } from './badge.js';

let instance;

export class CommentBrowser extends Window {
  static close () {
    instance.close();
  }

  static get instance () {
    return instance;
  }

  static isOpen () {
    return instance && $world.get('comment browser');
  }

  static async removeCommentForMorph (updatedComment, morph) {
    await instance.removeCommentForMorph(updatedComment, morph);
  }

  static async addCommentForMorph (comment, morph) {
    await instance.addCommentForMorph(comment, morph);
  }

  static async initializeCommentBrowser () {
    const firstTimeOpened = !instance;
    new CommentBrowser();
    if (firstTimeOpened) {
      await instance.initializeCommentGroupMorphs();
    }
  }

  // Construction and initialization

  constructor () {
    if (!instance) {
      super();
      this.initializeContainers();
      this.initializeExtents();
      this.relayoutWindow();

      instance = this;
      this.name = 'comment browser';
      this.commentGroups = {}; // dict Morph id -> Comment group morph

      this.makeVisible();
    } else {
      this.makeVisible();
    }
    return instance;
  }

  makeVisible () {
    $world.addMorph(instance);
  }

  initializeExtents () {
    this.height = ($world.height - $world.getSubmorphNamed('lively top bar').height);
    this.width = 280; // perhaps use width of comment morph?

    this.position = pt($world.width - this.width, $world.getSubmorphNamed('lively top bar').height);

    // when styling palette is opened, position comment browser to the left of it. TODO: move it back when palette is closed
    if ($world.get('lively top bar') && $world.get('lively top bar').activeSideBars.includes('Styling Palette')) {
      this.position = this.position.addPt(pt(-$world.get('lively top bar').stylingPalette.width, 0));
    }
  }

  initializeContainers () {
    this.container = new Morph({
      clipMode: 'auto',
      name: 'comment container'
    });
    this.layoutContainer = new Morph({
      layout: new VerticalLayout({
        spacing: 5,
        orderByIndex: true
      }),
      name: 'comment container layout'
    });
    this.container.addMorph(this.layoutContainer);
    this.addMorph(this.container);
  }

  close () {
    // super.close();
    const topbar = $world.getSubmorphNamed('lively top bar');
    if (topbar) {
      topbar.uncolorCommentBrowserButton();
    }
    this.remove();
  }

  async initializeCommentGroupMorphs () {
    const commentGroupMorphs = [];
    await Promise.all($world.withAllSubmorphsDo(async (morph) => {
      if (morph.comments.length == 0) {
        return;
      }
      morph.comments.forEach(async (comment) => {
        await this.addCommentForMorph(comment, morph);
      });
    }));
  }

  async addCommentForMorph (comment, morph) {
    if (morph.id in this.commentGroups) {
      await this.commentGroups[morph.id].addCommentMorph(comment);
    } else {
      const commentGroupMorph = await resource('part://CommentGroupMorphMockup/comment group morph master').read();
      await commentGroupMorph.initialize(morph);
      this.commentGroups[morph.id] = commentGroupMorph;
      await this.commentGroups[morph.id].addCommentMorph(comment);
      this.layoutContainer.addMorph(commentGroupMorph);
    }

    this.updateCommentCountBadge();
  }

  async removeCommentForMorph (comment, morph) {
    const group = this.commentGroups[morph.id];
    await group.removeCommentMorph(comment);
    if (group.getCommentMorphCount() === 0) {
      this.removeCommentGroup(group);
    }
    this.updateCommentCountBadge();
  }

  removeCommentGroup (group) {
    group.hideCommentIndicators();
    delete this.commentGroups[group.referenceMorph.id];
    group.remove();
  }

  getCommentMorphForComment (comment, referencedMorph) {
    // currently comments are referenced by timestamp and morph. We assume that no two comments have the same timestamp and morph.
    // This may be changed to an id
    let result;
    this.withAllSubmorphsDo((submorph) => {
      if (submorph.comment && submorph.referenceMorph) {
        if (submorph.comment.timestamp === comment.timestamp &&
          submorph.referenceMorph === referencedMorph) {
          result = submorph;
          return 0; // Return to break execution
        }
      }
    });
    return result;
  }

  getCommentCount () {
    return this.layoutContainer.submorphs.reduce((acc, cur) => cur.getCommentMorphCount() + acc, 0);
  }

  updateCommentCountBadge () {
    const count = this.getCommentCount();
    let badge = $world.get('lively top bar').get('comment browser button').get('comment count badge');
    if (badge) {
      if (count <= 0) {
        badge.remove();
        return;
      }
      badge.setText(count);
    } else if (count > 0) {
      badge = Badge.newWithText(count);
      badge.name = 'comment count badge';
      badge.addToMorph($world.get('lively top bar').get('comment browser button'));
    }
  }

  // named relayoutWindows instead of relayout() to not block respondsToVisibleWindow() implementation
  relayoutWindow () {
    this.relayoutWindowControls();
  }
}
