import type { JSX } from 'solid-js'
import type { TextContent } from '../hooks/useTextContent'

type ReportSectionProps = {
	textContent: TextContent
}

const ReportSection = (props: ReportSectionProps): JSX.Element => {
	const { mistake }: TextContent = props.textContent

	function refresh(): void {
		window.location.reload()
	}

	return (
		<div class='bold font-size-xxl text-center'>
			<div>Mistakes : {mistake()}</div>
			<button type='button' class='bold radius-1 py-0' onclick={refresh}>
				<span class='font-size-md p-0'>↻</span>
				&nbsp;
				<span>Refresh</span>
			</button>
		</div>
	)
}

export default ReportSection
