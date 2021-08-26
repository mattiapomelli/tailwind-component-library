export default class DropdownController {
  focusedIndex: number
  items: HTMLElement[]

  constructor(items: HTMLElement[]) {
    this.focusedIndex = -1
    this.items = items
  }

  moveDown() {
    if (this.focusedIndex < this.items.length - 1) {
      this.focusedIndex++
    } else {
      this.focusedIndex = 0
    }
    this.focuseSelectedItem()
  }

  moveUp() {
    if (this.focusedIndex === -1 || this.focusedIndex === 0) {
      this.focusedIndex = this.items.length - 1
    } else {
      this.focusedIndex--
    }
    this.focuseSelectedItem()
  }

  focuseSelectedItem() {
    this.items[this.focusedIndex].focus()
  }

  reset() {
    this.focusedIndex = -1
  }
}
