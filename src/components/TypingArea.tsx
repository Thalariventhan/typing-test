import { type JSX, onMount } from 'solid-js'
import type { TextContent } from '../hooks/useTextContent'

interface TypingAreaProps {
	textContent: TextContent
}

/**
 * TypingArea component.
 *
 * This component represents a typing area where users can type text. It uses hooks to manage the text content and report mistakes.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered typing area component.
 *
 */

const TypingArea = (props: TypingAreaProps): JSX.Element => {
	const {
		typedText,
		untypedText,
		updateText,
		removeText,
		generateText,
		updateMistake,
	} = props.textContent

	onMount(() => {
		generateText()
	})

	function handleKeys(e: KeyboardEvent) {
		if (e.metaKey || e.ctrlKey || e.altKey) {
			return
		}

		e.preventDefault()
		e.stopPropagation()

		if (e.key === 'Backspace' && typedText().length > 0) {
			removeText()
		} else if (
			e.key === 'Backspace' ||
			e.key === 'Shift' ||
			e.key === 'CapsLock'
		) {
			return
		} else if (/^[a-zA-Z]$/.test(e.key) || e.key === ' ') {
			updateText(e.key)
		} else updateMistake()
	}

	function handleClick() {
		const typedTextSpan = document.querySelector('#typed-text')
		const untypedTextSpan = document.querySelector('#untyped-text')

		if (typedTextSpan && untypedTextSpan) {
			const range = document.createRange()
			const selection = window.getSelection()
			console.log(range, selection)
			range.setStartAfter(typedTextSpan)
			range.setEndBefore(untypedTextSpan)

			selection?.removeAllRanges()
			selection?.addRange(range)
		}
	}

	return (
		<>
			<main
				class='font-family-courier font-size-xl outline-none radius-5 text-left '
				onkeydown={handleKeys}
				onclick={handleClick}
				contentEditable={true}
			>
				<span id='typed-text' class='bold mr-0 ml-0 pr-0 pl-0'>
					{typedText()}
				</span>
				<span
					id='untyped-text'
					class='bold text-color-grey mr-0 ml-0 pl-0 pr-0'
				>
					{untypedText()}
				</span>
			</main>
		</>
	)
}

export default TypingArea
