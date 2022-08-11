declare module '*/items.json' {
	interface Item {
		src: string
		board: BoardItem
	}
	interface BoardItem {
		transform: string
	}
  const value: Item
  export = value
}