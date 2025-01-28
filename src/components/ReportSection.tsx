import type { JSX } from 'solid-js'
import type { TextContent } from '../hooks/useTextContent'

type ReportSectionProps = {
	textContent: TextContent
}

const ReportSection = (props: ReportSectionProps): JSX.Element => {
	const { mistake, generateText }: TextContent = props.textContent

	function refresh(): void {
		generateText()
	}

	return (
		<div class='bold font-size-xxl text-center'>
			<button type='button' class='bold radius-1 py-0' onclick={refresh}>
				<span class='font-size-md p-0'>↻</span>
				&nbsp;
				<span>Refresh</span>
			</button>
			<br />
			<br />
			<div class='text-color-grey'>
				<span class='text-color-danger'>{mistake()}</span>
				&nbsp;
				<span>typos</span>
			</div>
		</div>
	)
}

export default ReportSection
