//% groups=['Console Overlay']
namespace console.consoleOverlay {
    /**
     * Toggles the console overlay on/off
     */
    //% block="toggle console overlay"
    //% group="Console Overlay"
    export function toggleConsole(): void {
        if (game.consoleOverlay.isVisible()) {
            game.consoleOverlay.setVisible(false)
        } else {
            game.consoleOverlay.setVisible(true)
        }
    }

    /**
     * Turns the console overlay on/off
     * @param sets the console overlay display
     */
    //% block="turn console overlay $display"
    //% display.shadow="toggleOnOff"
    //% display.defl=true
    //% group="Console Overlay"
    export function consoleDisplay(display: boolean): void {
        if (display) {
            game.consoleOverlay.setVisible(true)
        } else {
            game.consoleOverlay.setVisible(false)
        }
    }

    /**
     * Returns whether the console overlay is on/off
     */
    //% block="is console overlay visible?"
    //% group="Console Overlay"
    export function isConsoleVisible(): boolean {
        return game.consoleOverlay.isVisible()
    }

    /**
     * Sets the text color of the console overlay
     * @param the text color
     */
    //% block="set text color to $textColor"
    //% textColor.shadow="colorindexpicker"
    //% textColor.defl=1
    //% group="Console Overlay"
    export function setTextColor(textColor: number): void {
        game.consoleOverlay.setVisible(game.consoleOverlay.isVisible(), textColor)
    }

    /**
     * Clears the console overlay
     */
    //% block="clear console overlay"
    //% group="Console Overlay"
    export function clearConsole(): void {
        game.consoleOverlay.clear()
    }
}
