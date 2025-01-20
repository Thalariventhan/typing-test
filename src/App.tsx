import './css/App.css'
import type { Component } from 'solid-js'
import useTextContent, { type TextContent } from './hooks/useTextContent'

const App: Component = () => {
	const textContent: TextContent = useTextContent()

	return (
		<div>
			<h1 class='ml-1 flex'>Typing Test</h1>
		</div>
	)
}

export default App
