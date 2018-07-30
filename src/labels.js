/** Simple Label that is really just a Phaser.Text
 * @extends Phaser.Text
 */
export class Label extends Phaser.Text {
    /**
     * @param {Object} game - Current game instance.
     * @param {string} label - The text to place on top of the label.
     * @param {Object} style - The style properties to be set on the Text.
     * @param {number} x - The x coordinate on screen where the textSprite will be placed.
     * @param {number} y - The y coordinate on screen where the textSprite will be placed.
     */
    constructor(game, label, style, x, y) {
        super(game, x, y, label, style);
        game.add.existing(this);
        this.anchor.set(0.5, 0.5);
    }

    /**
      * @param {string} text - The new text to place on top of the sprite.
     */
    setText(text) {
        super.setText(text);
    }
}

/** Sprite with text added as a child.
 * @extends Phaser.Sprite
 */
export class textSprite extends Phaser.Sprite {
    /**
     * @param {Object} game - Current game instance.
     * @param {string} image - The image to create a sprite with.
     * @param {string} label - The text to place on top of the sprite.
     * @param {Object} style - The style properties to be set on the Text.
     * @param {number} x - The x coordinate on screen where the textSprite will be placed.
     * @param {number} y - The y coordinate on screen where the textSprite will be placed.
     */
    constructor(game, image, label, style, x, y) {
        super(game, x, y, image);
        game.add.existing(this);

        this.text = this.game.add.text(this.width / 2, this.height / 2, label, style);
        this.text.anchor.set(0.5, 0.5);

        this.addChild(this.text);
    }

    /**
      * @param {string} text - The new text to place on top of the sprite.
     */
    setText(text) {
        this.text.setText(text);
    }
}
