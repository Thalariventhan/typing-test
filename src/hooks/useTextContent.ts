import { type Accessor, createSignal } from 'solid-js'
import { generateRandomText } from '../commons/generateText'
import useReport, { type ReportHook } from './useReport'

export interface TextContent {
	typedText: Accessor<string>
	untypedText: Accessor<string>
	mistake: Accessor<number>
	updateMistake: () => void
	updateText: (key: string) => void
	removeText: () => void
	generateText: () => void
}

const useTextContent = (): TextContent => {
	const [textContent, setTextContent] = createSignal<string>('')
	const [typedText, setTypedText] = createSignal<string>('')
	const [untypedText, setUntypedText] = createSignal<string>('')
	const [textIndex, setTextIndex] = createSignal<number>(0)
	const { mistake, resetMistake, updateMistake }: ReportHook = useReport()

	function generateText(): void {
		const newText: string = generateRandomText()
		setTextContent(newText)
		setUntypedText(newText)
		setTypedText('')
		resetMistake()
		setTextIndex(0)
		setTextIndex(0)
	}

	function updateText(key: string): void {
		const __typedText: string = typedText()
		const __textContent: string = textContent()
		let __textIndex: number = textIndex()

		if (key === __textContent.charAt(__textIndex)) {
			__textIndex++
			setTypedText(__typedText + key)
			setTextIndex(__textIndex)
			setUntypedText(textContent().slice(__textIndex))
		} else {
			updateMistake()
		}
	}

	function removeText(): void {
		let __textIndex: number = textIndex()
		__textIndex--
		setTypedText(typedText().slice(0, -1))
		setTextIndex(__textIndex)
		setUntypedText(textContent().slice(__textIndex))
	}

	return {
		typedText,
		untypedText,
		mistake,
		updateText,
		removeText,
		generateText,
		updateMistake,
	}
}

export default useTextContent
