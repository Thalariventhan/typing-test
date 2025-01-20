import { type Accessor, createSignal } from 'solid-js'

export interface ReportHook {
	mistake: Accessor<number>
	updateMistake: () => void
	resetMistake: () => void
}

const useReport = (): ReportHook => {
	const [mistake, setMistake] = createSignal<number>(0)

	function resetMistake(): void {
		setMistake(0)
	}

	function updateMistake(): void {
		setMistake(mistake() + 1)
	}

	return {
		mistake,
		updateMistake,
		resetMistake,
	}
}

export default useReport
