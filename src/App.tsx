import './css/App.css'
import type { Component } from 'solid-js'
import useTextContent, { type TextContent } from './hooks/useTextContent'
import TypingArea from './components/TypingArea'
import ReportSection from './components/ReportSection'

const App: Component = () => {
	const textContent: TextContent = useTextContent()

	return (
		<div>
			<h1 class='ml-1 flex'>Typing Test</h1>
			<TypingArea textContent={textContent} />
			<ReportSection textContent={textContent} />
		</div>
	)
}

export default App
