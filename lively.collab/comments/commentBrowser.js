
import { VerticalLayout, HorizontalLayout, Morph } from 'lively.morphic';
import { pt, Rectangle } from 'lively.graphics';
import { resource } from 'lively.resources';
import { connect } from 'lively.bindings';
import { Badge } from 'lively.collab';
import { ModeSelector } from 'lively.components/widgets.js';
import { arr } from 'lively.lang';

export class CommentBrowser extends Morph {
  /*
  //////
  Static Methods (external interface)
  //////
  */

  static get instance () {
    return $world.commentBrowser;
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // opening/closing/singleton creation
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  static open () {
    if (!CommentBrowser.instance) {
      CommentBrowser.initializeCommentBrowser();
    }

    if (CommentBrowser.isOpen()) return;

    if (!CommentBrowser.instance.wasOpenedBefore) {
      CommentBrowser.instance.relayout();
      CommentBrowser.instance.wasOpenedBefore = true;
    }
    CommentBrowser.openInWindow();
    CommentBrowser.instance.showCommentIndicators();
  }

  static openInWindow () {
    const topbar = $world.getSubmorphNamed('lively top bar');
    CommentBrowser.window = CommentBrowser.instance.openInWindow({
      name: 'comment browser window',
      title: 'Comment Browser'
    });
    CommentBrowser.window.position = pt($world.width - CommentBrowser.instance.width, topbar.height);
    // when styling palette is opened, position comment browser to the left of it
    if (topbar.activeSideBars.includes('Styling Palette')) {
      CommentBrowser.window.position = CommentBrowser.window.position.addPt(pt(-topbar.stylingPalette.width, 0));
    }
  }

  static isOpen () {
    return !!(CommentBrowser.instance && !!$world.get('comment browser'));
  }

  static async whenRendered () {
    return CommentBrowser.instance.whenRendered();
  }

  static initializeCommentBrowser () {
    $world.commentBrowser = new CommentBrowser();
  }

  static close () {
    if (!CommentBrowser.instance) return;

    const topbar = $world.getSubmorphNamed('lively top bar');
    if (topbar) {
      topbar.uncolorCommentBrowserButton();
    }
    CommentBrowser.instance.hideAllCommentIndicators();
    $world.get('comment browser window').remove();
  }

  static toggle () {
    CommentBrowser.isOpen() ? CommentBrowser.close() : CommentBrowser.open();
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // browser mode / archive
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  static showsArchive () {
    return !!CommentBrowser.instance.showsResolvedComments;
  }

  static toggleArchive () {
    CommentBrowser.instance.toggleArchive();
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // comment creation and update
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  static async addCommentForMorph (comment, morph) {
    await CommentBrowser.instance.addCommentForMorph(comment, morph);
  }

  static async removeCommentForMorph (comment, morph) {
    await CommentBrowser.instance.removeCommentForMorph(comment, morph);
  }

  static updateName (morph) {
    CommentBrowser.instance.updateName(morph);
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // construction and initialization
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  static get properties () {
    return {
      filterContainer: {},
      filterSelector: {},
      container: {},
      commentContainer: {},
      resolvedCommentContainer: {},
      filterContainer: {},
      name: {
        defaultValue: 'comment browser'
      },
      extent: {
        defaultValue: pt(280, 800)
      },
      submorphs: {
        initialize () {
          this.buildContainers();
          this.buildFilterSelector();
          this.buildCommentGroupMorphs();
        }
      },
      commentGroups: {
        defaultValue: {}// dict Morph id -> Comment group morph
      },
      resolvedCommentGroups: {
        defaultValue: {}
      },
      wasOpenedBefore: {
        defaultValue: false
      },
      showsResolvedComments: {
        defaultValue: false
      }
    };
  }

  /*
  //////
  Instance Methods
  //////
  */

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // ui initialization
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  buildContainers () {
    this.container = new Morph({
      clipMode: 'auto',
      name: 'container'
    });
    this.commentContainer = new Morph({
      layout: new VerticalLayout({
        spacing: 5,
        orderByIndex: true
      }),
      name: 'comment container'
    });
    this.resolvedCommentContainer = new Morph({
      layout: new VerticalLayout({
        spacing: 5,
        orderByIndex: true
      }),
      name: 'resolved comment container'
    });
    this.filterContainer = new Morph({
      name: 'filter container'
    });
    this.addMorph(this.container);
    this.addMorph(this.filterContainer);
    this.container.addMorph(this.commentContainer);
  }

  buildFilterSelector () {
    this.filterSelector = new ModeSelector({
      reactsToPointer: false,
      name: 'resolvedModeSelector',
      items: ['Unresolved Comments', 'Resolved Comments'],
      tooltips: {
        'Unresolved Comments': 'Show unresolved comments',
        'Resolved Comments': 'Show resolved comments'
      },
      layout: new HorizontalLayout({
        spacing: 5
      })
    });
    connect(this.filterSelector, 'Unresolved Comments', this, 'toggleArchive');
    connect(this.filterSelector, 'Resolved Comments', this, 'toggleArchive');
    this.filterContainer.addMorph(this.filterSelector);
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // browser mode / archive
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  toggleArchive () {
    this.showsResolvedComments = !this.showsResolvedComments;
    let containerToRemove = this.resolvedCommentContainer;
    let newContainer = this.commentContainer;
    if (this.showsResolvedComments) {
      containerToRemove = this.commentContainer;
      newContainer = this.resolvedCommentContainer;
    }

    containerToRemove.remove();
    this.container.addMorph(newContainer);
    this.hideAllCommentIndicators();
    this.showCommentIndicators();
  }

  async applyResolveStatus (comment, referenceMorph) {
    await this.removeCommentForMorph(comment, referenceMorph);
    await this.addCommentForMorph(comment, referenceMorph);
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // comment indicators
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  showCommentIndicators () {
    if (this.showsResolvedComments) {
      arr.invoke(this.resolvedCommentContainer.submorphs, 'showCommentIndicators');
    } else {
      arr.invoke(this.commentContainer.submorphs, 'showCommentIndicators');
    }
  }

  hideAllCommentIndicators () {
    arr.invoke(this.resolvedCommentContainer.submorphs, 'hideCommentIndicators');
    arr.invoke(this.commentContainer.submorphs, 'hideCommentIndicators');
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // comment creation and update
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  async addCommentForMorph (comment, morph) {
    let groupDictionary = this.commentGroups;
    let commentContainer = this.commentContainer;

    if (comment.isResolved()) {
      groupDictionary = this.resolvedCommentGroups;
      commentContainer = this.resolvedCommentContainer;
    }

    if (!(morph.id in groupDictionary)) {
      const commentGroupMorph = await resource('part://CommentComponents/comment group morph master').read();
      await commentGroupMorph.initialize(morph);
      groupDictionary[morph.id] = commentGroupMorph;
      commentContainer.addMorph(commentGroupMorph);
    }
    await groupDictionary[morph.id].addCommentMorph(comment);
    this.updateCommentCountBadge();
  }

  async removeCommentForMorph (comment, morph) {
    let groupDictionary = this.commentGroups;
    if (this.resolvedCommentGroups[morph.id] &&
       this.resolvedCommentGroups[morph.id].hasCommentMorphForComment(comment)) {
      groupDictionary = this.resolvedCommentGroups;
    }
    const groupOfCommentMorph = groupDictionary[morph.id];
    await groupOfCommentMorph.removeCommentMorphFor(comment);
    if (groupOfCommentMorph.getCommentCount() === 0) {
      this.removeCommentGroup(groupOfCommentMorph, groupDictionary);
    }
    this.updateCommentCountBadge();
  }

  updateName (morph) {
    this.resolvedCommentGroups[morph.id] && this.resolvedCommentGroups[morph.id].updateName();
    this.commentGroups[morph.id] && this.commentGroups[morph.id].updateName();
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // comment group creation/deletion
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  buildCommentGroupMorphs () {
    const commentGroupMorphs = [];
    $world.withAllSubmorphsDo(async (morph) => {
      if (morph.comments.length == 0) {
        return;
      }
      for (const comment of morph.comments) {
        await this.addCommentForMorph(comment, morph);
      }
    });
  }

  removeCommentGroup (group, groupDictionary) {
    group.hideCommentIndicators();
    delete groupDictionary[group.referenceMorph.id];
    group.remove();
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // comment counts
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  getCommentCount () {
    return this.getResolvedCommentCount() + this.getUnresolvedCommentCount();
  }

  getResolvedCommentCount () {
    return this.resolvedCommentContainer.submorphs.reduce((acc, cur) => cur.getCommentCount() + acc, 0);
  }

  getUnresolvedCommentCount () {
    return this.commentContainer.submorphs.reduce((acc, cur) => cur.getCommentCount() + acc, 0);
  }

  updateCommentCountBadge () {
    const count = this.getUnresolvedCommentCount();
    let badge = $world.get('lively top bar').get('comment browser button').get('comment count badge');
    if (badge) {
      if (count <= 0) {
        badge.abandon();
        return;
      }
      badge.text = count;
    } else if (count > 0) {
      badge = Badge.newWithText(count);
      badge.name = 'comment count badge';
      badge.addToMorph($world.get('lively top bar').get('comment browser button'));
    }
    if (badge) {
      badge.tooltip = count + ' unresolved comment' + (count == 1 ? '' : 's');
    }
  }

  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  // misc
  // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  relayout () {
    const filterContainerHeight = 30;
    const filterContainerBounds = new Rectangle(0, 0, this.width, filterContainerHeight);
    const mainContainerBounds = new Rectangle(0, filterContainerHeight, this.width, this.height - filterContainerHeight);
    this.filterContainer.setBounds(filterContainerBounds);
    this.container.setBounds(mainContainerBounds);
  }

  close () {
    CommentBrowser.close();
    super.close();
  }
}
